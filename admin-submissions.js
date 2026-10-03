import crypto from 'node:crypto';
import { requireAdmin } from '../server/auth.js';
import { audit, supabase } from '../server/db.js';
import { json, methodNotAllowed, readBody, safeText } from '../server/http.js';

async function getSubmission(id) {
  const { data } = await supabase(`contact_submissions?id=eq.${encodeURIComponent(id)}&select=*&limit=1`);
  return data?.[0] || null;
}

export default async function handler(req, res) {
  let session;
  try { session = requireAdmin(req); }
  catch (error) { return json(res, error.statusCode || 401, { ok: false, error: error.message }); }

  if (req.method === 'GET') {
    try {
      const { data } = await supabase('contact_submissions?select=*&order=created_at.desc');
      return json(res, 200, { ok: true, submissions: Array.isArray(data) ? data : [] });
    } catch (error) { return json(res, 500, { ok: false, error: error.message }); }
  }
  if (req.method !== 'POST') return methodNotAllowed(res, ['GET','POST']);

  try {
    const body = await readBody(req);
    const id = safeText(body.id, 120);
    const action = safeText(body.action, 30);
    const submission = await getSubmission(id);
    if (!submission) return json(res, 404, { ok: false, error: 'Submission not found.' });
    if (submission.status !== 'pending') return json(res, 409, { ok: false, error: `Submission is already ${submission.status}.` });

    if (action === 'approve') {
      const contactId = `community-${crypto.randomUUID()}`;
      const row = {
        id: contactId, country: submission.country, domain: submission.domain, type: submission.type, name: submission.name,
        state: submission.state, city: submission.city, phones: submission.phones || [], address: submission.address,
        email: submission.email || '', website: submission.website || '', open24: Boolean(submission.open24), services: submission.services || [],
        source: submission.source || submission.website || '', verified: false, community: true, checked: new Date().toISOString().slice(0,10), status: 'approved'
      };
      await supabase('contacts', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify([row]) });
      await supabase(`contact_submissions?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ status: 'approved', reviewed_at: new Date().toISOString(), reviewed_by: session.u }) });
      await audit({ admin: session.u, action: 'approve', entityType: 'submission', entityId: id, beforeData: submission, afterData: row });
      return json(res, 200, { ok: true, contactId });
    }
    if (action === 'reject') {
      await supabase(`contact_submissions?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ status: 'rejected', reviewed_at: new Date().toISOString(), reviewed_by: session.u }) });
      await audit({ admin: session.u, action: 'reject', entityType: 'submission', entityId: id, beforeData: submission });
      return json(res, 200, { ok: true });
    }
    return json(res, 400, { ok: false, error: 'Unknown submission action.' });
  } catch (error) {
    return json(res, 400, { ok: false, error: error.message });
  }
}
