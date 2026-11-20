import { api, getSession } from "./api.js";
const KEY = "palace-progress-v1";
export function readProgress() { try { const data = JSON.parse(localStorage.getItem(KEY) || "{}"); return data && typeof data === "object" && !Array.isArray(data) ? data : {}; } catch { return {}; } }
export async function recordProgress(id, title, detail) {
  const item = { id, title, detail, date: new Date().toISOString() };
  if (getSession()) { try { await api("/progress", { method: "PUT", body: JSON.stringify(item) }); } catch (error) { window.alert("No se pudo guardar tu progreso en la cuenta: " + error.message); } }
  else { try { const data = readProgress(); data[id] = item; localStorage.setItem(KEY, JSON.stringify(data)); } catch { window.alert("No se pudo guardar el progreso en este navegador."); } }
}
export function clearProgress() { localStorage.removeItem(KEY); }
