import { clearSessionCookie } from '../server/auth.js';
import { json, methodNotAllowed } from '../server/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);
  clearSessionCookie(res);
  return json(res, 200, { ok: true });
}
