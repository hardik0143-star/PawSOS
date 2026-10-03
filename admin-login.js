import { createSession, setSessionCookie, verifyAdminCredentials } from '../server/auth.js';
import { dbConfigured } from '../server/db.js';
import { json, methodNotAllowed, readBody } from '../server/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);
  if (!dbConfigured()) return json(res, 503, { ok: false, error: 'Cloud database is not configured yet.' });
  try {
    const body = await readBody(req);
    const ok = await verifyAdminCredentials(body.username, body.password);
    if (!ok) return json(res, 401, { ok: false, error: 'Invalid administrator credentials.' });
    setSessionCookie(res, createSession(process.env.ADMIN_USERNAME || 'admin'));
    return json(res, 200, { ok: true, username: process.env.ADMIN_USERNAME || 'admin' });
  } catch (error) {
    return json(res, 500, { ok: false, error: error.message });
  }
}
