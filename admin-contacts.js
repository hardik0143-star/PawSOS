import crypto from 'node:crypto';
import { requireAdmin } from '../server/auth.js';
import { normalizeContact } from '../server/contact.js';
import { audit, getContact, getContacts, supabase } from '../server/db.js';
import { json, methodNotAllowed, readBody, safeText } from '../server/http.js';

export default async function handler(req, res) {
  let session;
  try { session = requireAdmin(req); }
  catch (error) { return json(res, error.statusCode || 401, { ok: false, error: error.message }); }

  if (req.method === 'GET') {
    try { return json(res, 200, { ok: true, contacts: await getContacts({ includeDeleted: true }) }); }
    catch (error) { return json(res, 500, { ok: false, error: error.message }); }
  }
  if (req.method !== 'POST') return methodNotAllowed(res, ['GET','POST']);

  try {
    const body = await readBody(req);
    const action = safeText(body.action, 40);
    if (action === 'update') {
      const id = safeText(body.id, 120);
      const before = await getContact(id);
      if (!before) return json(res, 404, { ok: false, error: 'Contact not found.' });
      const contact = normalizeContact(body.contact || {});
      const after = { ...contact, verified: Boolean(body.contact?.verified ?? before.verified), community: Boolean(before.community), checked: body.contact?.checked || before.checked || new Date().toISOString().slice(0,10), status: 'approved', updated_at: new Date().toISOString() };
      const { data } = await supabase(`contacts?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', headers: { Prefer: 'return=representation' }, body: JSON.stringify(after) });
      await audit({ admin: session.u, action: 'update', entityType: 'contact', entityId: id, beforeData: before, afterData: data?.[0] || after });
      return json(res, 200, { ok: true, contact: data?.[0] || { id, ...after } });
    }
    if (action === 'create') {
      const contact = normalizeContact(body.contact || {});
      const row = { id: `admin-${crypto.randomUUID()}`, ...contact, verified: Boolean(body.contact?.verified), community: false, checked: new Date().toISOString().slice(0,10), status: 'approved' };
      const { data } = await supabase('contacts', { method: 'POST', headers: { Prefer: 'return=representation' }, body: JSON.stringify([row]) });
      await audit({ admin: session.u, action: 'create', entityType: 'contact', entityId: row.id, afterData: data?.[0] || row });
      return json(res, 201, { ok: true, contact: data?.[0] || row });
    }
    if (action === 'delete' || action === 'restore') {
      const id = safeText(body.id, 120);
      const before = await getContact(id);
      if (!before) return json(res, 404, { ok: false, error: 'Contact not found.' });
      const status = action === 'delete' ? 'deleted' : 'approved';
      const { data } = await supabase(`contacts?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', headers: { Prefer: 'return=representation' }, body: JSON.stringify({ status, updated_at: new Date().toISOString() }) });
      await audit({ admin: session.u, action, entityType: 'contact', entityId: id, beforeData: before, afterData: data?.[0] || { ...before, status } });
      return json(res, 200, { ok: true });
    }
    if (action === 'restoreAll') {
      await supabase('contacts?status=eq.deleted', { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ status: 'approved', updated_at: new Date().toISOString() }) });
      await audit({ admin: session.u, action: 'restoreAll', entityType: 'contact', entityId: '*' });
      return json(res, 200, { ok: true });
    }
    return json(res, 400, { ok: false, error: 'Unknown admin action.' });
  } catch (error) {
    return json(res, 400, { ok: false, error: error.message });
  }
}
