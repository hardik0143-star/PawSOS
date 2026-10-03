import { dbConfigured, supabase } from '../server/db.js';
import { json, methodNotAllowed } from '../server/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return methodNotAllowed(res, ['GET']);
  if (!dbConfigured()) return json(res, 200, { ok: true, configured: false, mode: 'offline-fallback', message: 'Cloud database environment variables are not configured.' });
  try {
    const { response } = await supabase('contacts?select=id&status=eq.approved&limit=1', { headers: { Prefer: 'count=exact' } });
    const range = response.headers.get('content-range') || '';
    const total = Number(range.split('/')[1]) || null;
    return json(res, 200, { ok: true, configured: true, mode: 'cloud', contacts: total, version: '5.3.0' });
  } catch (error) {
    return json(res, 200, { ok: false, configured: true, mode: 'offline-fallback', message: error.message });
  }
}
