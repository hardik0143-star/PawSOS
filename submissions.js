import crypto from 'node:crypto';
import { normalizeContact } from '../server/contact.js';
import { supabase } from '../server/db.js';
import { json, methodNotAllowed, readBody, safeText } from '../server/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return methodNotAllowed(res, ['POST']);
  try {
    const body = await readBody(req);
    const contact = normalizeContact(body);
    const row = {
      id: crypto.randomUUID(),
      ...contact,
      submitter_note: safeText(body.submitterNote, 600),
      status: 'pending',
    };
    await supabase('contact_submissions', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify([row]),
    });
    return json(res, 201, { ok: true, id: row.id, status: 'pending', message: 'Thank you. This contact was submitted for administrator review.' });
  } catch (error) {
    return json(res, 400, { ok: false, error: error.message });
  }
}
