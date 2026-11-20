import { askGemini } from "./gemini.js";
import { installAccounts } from "./accounts.js";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;
const origins = (process.env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
const requests = new Map();
app.disable("x-powered-by");
app.use((req, res, next) => {
  const origin = req.get("origin");
  if (origin && origins.includes(origin)) { res.set("Access-Control-Allow-Origin", origin); res.set("Vary", "Origin"); res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); res.set("Access-Control-Allow-Headers", "Content-Type, Authorization"); }
  if (req.method === "OPTIONS") return res.sendStatus(origins.includes(origin) ? 204 : 403);
  next();
});
app.use(express.json({ limit: "4kb" }));
app.get("/api/health", (req, res) => res.json({ ok: true, project: "Gambling Palace", service: "Palace AI Backend", message: "Servidor funcionando correctamente" }));
app.post("/api/ai", async (req, res) => {
  const now = Date.now();
  for (const [ip, item] of requests) if (item.reset <= now) requests.delete(ip);
  const item = requests.get(req.ip) || { count: 0, reset: now + 60000 }; item.count++; requests.set(req.ip, item);
  if (item.count > 5) return res.status(429).json({ error: "Demasiadas preguntas. Espera un minuto." });
  const question = req.body?.question;
  if (typeof question !== "string" || !question.trim() || question.length > 500) return res.status(400).json({ error: "Escribe una pregunta de hasta 500 caracteres." });
  if (!process.env.GEMINI_API_KEY) return res.status(503).json({ error: "Palace AI aún no está configurado. Consulta las instrucciones del servidor." });
  try {
    const answer = await askGemini(question.trim(), { key: process.env.GEMINI_API_KEY, model: process.env.GEMINI_MODEL || "gemini-3.5-flash-lite" });
    res.json({ answer });
  } catch (error) {
    if (error.message === "provider_auth") return res.status(502).json({ error: "Google rechazó la solicitud. Revisa la clave de Gemini y que tu proyecto tenga acceso a la API." });
    if (error.message === "model_unavailable") return res.status(502).json({ error: "El modelo de Gemini no está disponible para este proyecto." });
    if (error.message === "rate_limit") return res.status(429).json({ error: "Se alcanzó el límite de consultas de Gemini. Inténtalo más tarde." });
    res.status(502).json({ error: "No fue posible obtener una respuesta de Gemini. Inténtalo más tarde." });
  }
});
await installAccounts(app);
app.use((err, req, res, next) => res.status(err.status === 413 ? 413 : 400).json({ error: "Solicitud inválida o demasiado larga." }));
app.listen(PORT, process.env.HOST || "127.0.0.1", () => console.log("👑 Palace AI Backend: puerto " + PORT));
