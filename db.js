const ENV_ERROR = 'Cloud database is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel Environment Variables.';

export function dbConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function assertDb() {
  if (!dbConfigured()) throw new Error(ENV_ERROR);
}

function baseUrl() {
  return process.env.SUPABASE_URL.replace(/\/$/, '') + '/rest/v1/';
}

export async function supabase(path, options = {}) {
  assertDb();
  const headers = {
    apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
    ...options.headers,
  };
  const response = await fetch(baseUrl() + path, { ...options, headers });
  const text = await response.text();
  let data = null;
  if (text) {
    try { data = JSON.parse(text); } catch { data = text; }
  }
  if (!response.ok) {
    const message = data?.message || data?.hint || data?.error || `Supabase request failed (${response.status})`;
    throw new Error(message);
  }
  return { data, response };
}

export async function getContacts({ includeDeleted = false } = {}) {
  const status = includeDeleted ? '' : '&status=eq.approved';
  const { data } = await supabase(`contacts?select=*&order=country.asc,state.asc,city.asc,name.asc${status}`);
  return Array.isArray(data) ? data : [];
}

export async function getContact(id) {
  const { data } = await supabase(`contacts?id=eq.${encodeURIComponent(id)}&select=*&limit=1`);
  return data?.[0] || null;
}

export async function audit({ admin = 'admin', action, entityType, entityId, beforeData = null, afterData = null }) {
  try {
    await supabase('audit_log', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify([{ admin_username: admin, action, entity_type: entityType, entity_id: String(entityId ?? ''), before_data: beforeData, after_data: afterData }]),
    });
  } catch (error) {
    console.error('audit_log failed', error.message);
  }
}
