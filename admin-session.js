import { readSession } from '../server/auth.js';
import { dbConfigured } from '../server/db.js';
import { json, methodNotAllowed } from '../server/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);
  const session = readSession(req);
  return json(res, 200, { ok: true, configured: dbConfigured(), authenticated: Boolean(session), username: session?.u || null });
}
