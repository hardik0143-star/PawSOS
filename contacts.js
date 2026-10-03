import { getContacts } from '../server/db.js';
import { json, methodNotAllowed } from '../server/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);
  try {
    const contacts = await getContacts();
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=120, stale-while-revalidate=300');
    return json(res, 200, { ok: true, contacts, syncedAt: new Date().toISOString() });
  } catch (error) {
    return json(res, 503, { ok: false, error: error.message });
  }
}
