const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/cities';

async function fetchJson(url, { method = 'GET', body, headers = { 'Content-Type': 'application/json' }, signal } = {}) {
  const opts = { method };
  if (body !== undefined) {
    opts.body = typeof body === 'string' ? body : JSON.stringify(body);
    opts.headers = headers;
  }
  if (signal) opts.signal = signal;

  const res = await fetch(url, opts);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Request failed ${res.status} ${res.statusText} - ${text}`);
  }

  if (res.status === 204) return null;
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}

async function get(url, signal) {
  return fetchJson(url, { method: 'GET', signal });
}

async function post(url, body) {
  return fetchJson(url, { method: 'POST', body });
}

async function del(url) {
  return fetchJson(url, { method: 'DELETE' });
}

export { BASE_URL, fetchJson, get, post, del };
