import crypto from 'node:crypto';

const DEFAULT_SALT = '420d18d23944edbd6507e57f9e21a2dd';
const DEFAULT_HASH = '80ae27b0169e293b7059aabd8d8c55143d415c21379e566d945c33518522d42f3f6ea38bff08c32dbe563f46d7e5ea5bd18da2643e318e66fc52c76b5f9c88d5';
const COOKIE = 'pawwing_admin_session';
const MAX_AGE = 60 * 60 * 8;

function toB64Url(value) {
  return Buffer.from(value).toString('base64url');
}
function fromB64Url(value) {
  return Buffer.from(value, 'base64url').toString('utf8');
}
function sessionSecret() {
  if (process.env.SESSION_SECRET) return process.env.SESSION_SECRET;
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return crypto.createHash('sha256').update(`pawwing:${process.env.SUPABASE_SERVICE_ROLE_KEY}`).digest('hex');
  }
  return '';
}
function sign(payload) {
  const secret = sessionSecret();
  if (!secret) throw new Error('Admin sessions require SESSION_SECRET or SUPABASE_SERVICE_ROLE_KEY.');
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
}
function parseCookies(header = '') {
  return Object.fromEntries(header.split(';').map(v => v.trim()).filter(Boolean).map(v => {
    const i = v.indexOf('='); return i < 0 ? [v, ''] : [v.slice(0, i), decodeURIComponent(v.slice(i + 1))];
  }));
}
function safeEqualHex(a, b) {
  try {
    const aa = Buffer.from(a, 'hex'), bb = Buffer.from(b, 'hex');
    return aa.length === bb.length && crypto.timingSafeEqual(aa, bb);
  } catch { return false; }
}

export async function verifyAdminCredentials(username, password) {
  const expectedUser = process.env.ADMIN_USERNAME || 'admin';
  if (String(username || '').trim() !== expectedUser) return false;
  const salt = process.env.ADMIN_PASSWORD_SALT || DEFAULT_SALT;
  const expected = process.env.ADMIN_PASSWORD_HASH || DEFAULT_HASH;
  const derived = await new Promise((resolve, reject) => crypto.scrypt(String(password || ''), Buffer.from(salt, 'hex'), 64, { N: 16384, r: 8, p: 1 }, (err, key) => err ? reject(err) : resolve(key.toString('hex'))));
  return safeEqualHex(derived, expected);
}

export function createSession(username = 'admin') {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE;
  const payload = toB64Url(JSON.stringify({ u: username, exp }));
  return `${payload}.${sign(payload)}`;
}

export function readSession(req) {
  const token = parseCookies(req.headers.cookie || '')[COOKIE];
  if (!token || !token.includes('.')) return null;
  const [payload, signature] = token.split('.');
  let expected;
  try { expected = sign(payload); } catch { return null; }
  const a = Buffer.from(signature), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const session = JSON.parse(fromB64Url(payload));
    if (!session?.u || !session?.exp || session.exp < Math.floor(Date.now() / 1000)) return null;
    return session;
  } catch { return null; }
}

export function setSessionCookie(res, token) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${MAX_AGE}${secure}`);
}

export function clearSessionCookie(res) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure}`);
}

export function requireAdmin(req) {
  const session = readSession(req);
  if (!session) {
    const error = new Error('Administrator authentication required.');
    error.statusCode = 401;
    throw error;
  }
  return session;
}
