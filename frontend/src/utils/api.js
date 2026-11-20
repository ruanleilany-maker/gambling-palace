const BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
const KEY = "palace-session-v1";
export function getSession() { try { return JSON.parse(sessionStorage.getItem(KEY) || "null"); } catch { return null; } }
export function setSession(value) { if (value) sessionStorage.setItem(KEY, JSON.stringify(value)); else sessionStorage.removeItem(KEY); window.dispatchEvent(new Event("palace-session")); }
export async function api(path, options = {}) {
  const token = getSession()?.token;
  const headers = { ...(options.body ? { "Content-Type": "application/json" } : {}), ...(token ? { Authorization: "Bearer " + token } : {}), ...options.headers };
  let response;
  try { response = await fetch(BASE + "/api" + path, { ...options, headers }); } catch { throw new Error("No se pudo conectar con el servidor."); }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "No se pudo completar la solicitud.");
  return data;
}
