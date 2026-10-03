export async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string' && req.body.trim()) {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  let raw = '';
  for await (const chunk of req) raw += chunk;
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

export function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

export function methodNotAllowed(res, allowed = ['GET']) {
  res.setHeader('Allow', allowed.join(', '));
  return json(res, 405, { error: 'Method not allowed' });
}

export function safeText(value, max = 500) {
  return String(value ?? '').trim().slice(0, max);
}

export function safeArray(value, maxItems = 12, maxLen = 180) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, maxItems).map(v => safeText(v, maxLen)).filter(Boolean);
}
