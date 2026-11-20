import { DatabaseSync } from 'node:sqlite';
import { randomBytes, scrypt as scryptCallback, timingSafeEqual, createHash } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);
const sessionLifetime = 8 * 60 * 60 * 1000;
const sessions = new Map();
const attempts = new Map();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hashToken = token => createHash('sha256').update(token).digest('hex');
const normalize = email => email.trim().toLowerCase();
async function passwordHash(password, salt = randomBytes(16).toString('hex')) {
  const hash = await scrypt(password, salt, 64);
  return `${salt}:${hash.toString('hex')}`;
}
async function passwordMatches(password, stored) {
  const [salt, hash] = stored.split(':');
  const derived = await scrypt(password, salt, 64);
  const expected = Buffer.from(hash, 'hex');
  return expected.length === derived.length && timingSafeEqual(expected, derived);
}
function userView(user) { return { id: user.id, email: user.email, role: user.role }; }
function authLimit(req, res, next) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until <= now) attempts.delete(key);
  const item = attempts.get(req.ip) || { count: 0, until: now + 15 * 60 * 1000 };
  item.count++; attempts.set(req.ip, item);
  if (item.count > 20) return res.status(429).json({ error: 'Demasiados intentos. Espera 15 minutos.' });
  next();
}
function validCredentials(email, password) {
  return typeof email === 'string' && email.length <= 254 && emailPattern.test(email.trim()) && typeof password === 'string' && password.length >= 8 && password.length <= 128;
}
export async function installAccounts(app) {
  const db = new DatabaseSync(process.env.DB_PATH || './palace.sqlite');
  db.exec(`PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'student');
    CREATE TABLE IF NOT EXISTS progress (user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, activity_id TEXT NOT NULL, title TEXT NOT NULL, detail TEXT NOT NULL, completed_at TEXT NOT NULL, PRIMARY KEY (user_id, activity_id));
    CREATE TABLE IF NOT EXISTS notices (id INTEGER PRIMARY KEY, title TEXT NOT NULL, body TEXT NOT NULL, created_at TEXT NOT NULL);`);
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD;
  if (adminEmail && adminPassword) {
    if (!validCredentials(adminEmail, adminPassword)) throw new Error('ADMIN_EMAIL o ADMIN_INITIAL_PASSWORD no son válidos');
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(normalize(adminEmail));
    if (!existing) db.prepare('INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)').run(normalize(adminEmail), await passwordHash(adminPassword), 'admin');
  }
  const authenticate = (req, res, next) => {
    const match = /^Bearer ([a-f0-9]{64})$/.exec(req.get('Authorization') || '');
    const key = match && hashToken(match[1]);
    const session = key && sessions.get(key);
    if (!session || session.expires <= Date.now()) { if (key) sessions.delete(key); return res.status(401).json({ error: 'Inicia sesión para continuar.' }); }
    const user = db.prepare('SELECT id, email, role FROM users WHERE id = ?').get(session.userId);
    if (!user) { sessions.delete(key); return res.status(401).json({ error: 'Sesión no válida.' }); }
    req.user = user; req.sessionKey = key; next();
  };
  const adminOnly = (req, res, next) => req.user.role === 'admin' ? next() : res.status(403).json({ error: 'Acceso exclusivo de administración.' });
  app.post('/api/register', authLimit, async (req, res) => {
    const { email, password } = req.body || {};
    if (!validCredentials(email, password)) return res.status(400).json({ error: 'Usa un correo válido y una contraseña de 8 a 128 caracteres.' });
    try { db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').run(normalize(email), await passwordHash(password)); return res.status(201).json({ ok: true }); }
    catch (error) { if (String(error.message).includes('UNIQUE')) return res.status(409).json({ error: 'No se pudo crear la cuenta con ese correo.' }); throw error; }
  });
  app.post('/api/login', authLimit, async (req, res) => {
    const { email, password } = req.body || {};
    if (typeof email !== 'string' || email.length > 254 || typeof password !== 'string' || password.length > 128) return res.status(400).json({ error: 'Datos inválidos.' });
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(normalize(email));
    if (!user || !(await passwordMatches(password, user.password_hash))) return res.status(401).json({ error: 'Correo o contraseña incorrectos.' });
    const token = randomBytes(32).toString('hex');
    sessions.set(hashToken(token), { userId: user.id, expires: Date.now() + sessionLifetime });
    res.json({ token, user: userView(user) });
  });
  app.get('/api/me', authenticate, (req, res) => res.json({ user: userView(req.user) }));
  app.post('/api/logout', authenticate, (req, res) => { sessions.delete(req.sessionKey); res.json({ ok: true }); });
  app.put('/api/account/password', authenticate, authLimit, async (req, res) => {
    const { currentPassword, newPassword } = req.body || {};
    if (typeof currentPassword !== 'string' || !currentPassword || currentPassword.length > 128 || typeof newPassword !== 'string' || newPassword.length < 8 || newPassword.length > 128) return res.status(400).json({ error: 'Introduce la contraseña actual y una nueva de 8 a 128 caracteres.' });
    const user = db.prepare('SELECT password_hash FROM users WHERE id = ?').get(req.user.id);
    if (!user || !(await passwordMatches(currentPassword, user.password_hash))) return res.status(401).json({ error: 'La contraseña actual es incorrecta.' });
    if (currentPassword === newPassword) return res.status(400).json({ error: 'La nueva contraseña debe ser diferente.' });
    const hash = await passwordHash(newPassword);
    const result = db.prepare('UPDATE users SET password_hash = ? WHERE id = ? AND password_hash = ?').run(hash, req.user.id, user.password_hash);
    if (!result.changes) return res.status(409).json({ error: 'La cuenta cambió. Vuelve a iniciar sesión e inténtalo de nuevo.' });
    for (const [key, session] of sessions) if (session.userId === req.user.id && key !== req.sessionKey) sessions.delete(key);
    res.json({ ok: true });
  });
  app.delete('/api/account', authenticate, authLimit, async (req, res) => {
    const password = req.body?.password;
    if (typeof password !== 'string' || !password || password.length > 128) return res.status(400).json({ error: 'Introduce tu contraseña.' });
    const user = db.prepare('SELECT password_hash FROM users WHERE id = ?').get(req.user.id);
    if (!user || !(await passwordMatches(password, user.password_hash))) return res.status(401).json({ error: 'Contraseña incorrecta.' });
    db.prepare('DELETE FROM users WHERE id = ?').run(req.user.id);
    for (const [key, session] of sessions) if (session.userId === req.user.id) sessions.delete(key);
    res.json({ ok: true });
  });
  app.get('/api/progress', authenticate, (req, res) => {
    const rows = db.prepare('SELECT activity_id AS id, title, detail, completed_at AS date FROM progress WHERE user_id = ? ORDER BY completed_at DESC').all(req.user.id);
    res.json({ items: rows });
  });
  app.put('/api/progress', authenticate, (req, res) => {
    const { id, title, detail, date } = req.body || {};
    if (![id, title, detail, date].every(x => typeof x === 'string') || !id.trim() || id.length > 100 || !title.trim() || title.length > 100 || detail.length > 160 || !Number.isFinite(Date.parse(date)) || date.length > 40) return res.status(400).json({ error: 'Datos de progreso inválidos.' });
    db.prepare('INSERT INTO progress (user_id, activity_id, title, detail, completed_at) VALUES (?, ?, ?, ?, ?) ON CONFLICT(user_id, activity_id) DO UPDATE SET title = excluded.title, detail = excluded.detail, completed_at = excluded.completed_at').run(req.user.id, id, title, detail, date);
    res.json({ ok: true });
  });
  app.delete('/api/progress', authenticate, (req, res) => { db.prepare('DELETE FROM progress WHERE user_id = ?').run(req.user.id); res.json({ ok: true }); });
  app.get('/api/notices', (req, res) => res.json({ items: db.prepare('SELECT id, title, body, created_at AS date FROM notices ORDER BY id DESC LIMIT 30').all() }));
  app.post('/api/notices', authenticate, adminOnly, (req, res) => {
    const { title, body } = req.body || {};
    if (typeof title !== 'string' || !title.trim() || title.length > 120 || typeof body !== 'string' || !body.trim() || body.length > 1000) return res.status(400).json({ error: 'Escribe un título y un texto válidos.' });
    const result = db.prepare('INSERT INTO notices (title, body, created_at) VALUES (?, ?, ?)').run(title.trim(), body.trim(), new Date().toISOString());
    res.status(201).json({ id: Number(result.lastInsertRowid) });
  });
  app.put('/api/notices/:id', authenticate, adminOnly, (req, res) => {
    const { title, body } = req.body || {};
    if (!/^\d+$/.test(req.params.id) || typeof title !== 'string' || !title.trim() || title.length > 120 || typeof body !== 'string' || !body.trim() || body.length > 1000) return res.status(400).json({ error: 'Datos inválidos.' });
    const result = db.prepare('UPDATE notices SET title = ?, body = ? WHERE id = ?').run(title.trim(), body.trim(), Number(req.params.id));
    res.status(result.changes ? 200 : 404).json(result.changes ? { ok: true } : { error: 'Aviso no encontrado.' });
  });
  app.delete('/api/notices/:id', authenticate, adminOnly, (req, res) => {
    if (!/^\d+$/.test(req.params.id)) return res.status(400).json({ error: 'Datos inválidos.' });
    const result = db.prepare('DELETE FROM notices WHERE id = ?').run(Number(req.params.id));
    res.status(result.changes ? 200 : 404).json(result.changes ? { ok: true } : { error: 'Aviso no encontrado.' });
  });
}
