# 👑 Gambling Palace — Más allá del azar

**Proyecto final de Jóvenes Creativos (ruta avanzada).**  
Aplicación educativa dirigida a jóvenes de 15–24 años, sin apuestas, depósitos ni premios monetarios.

## Estado actual

- ✅ Frontend React + Vite preparado y Home Royal Palace implementado.
- ✅ Rutas de navegación iniciales y pantallas provisionales.
- ✅ Identidad negro/dorado/violeta y recurso visual Royal Crown (diseño 3).
- ⏳ Games, Academy, AI, Progress, Login y Admin: aún no implementados.
- ⏳ Backend y base de datos: pendientes.
- ⏳ GitHub, commits reales y despliegue: se realizan desde tu cuenta.

## Requisitos de entorno

- Node.js LTS **24** recomendado (Node 22.22+ también sirve si las dependencias lo admiten).
- npm y Git.

## Ejecutar localmente

Abre una terminal en la carpeta raíz del repositorio:

```bash
cd frontend
npm install
npm run dev
```

Abre la URL que indique Vite (normalmente `http://localhost:5173`).

Para verificar el compilado:

```bash
npm run build
npm run preview
```

⚠️ **Importante:** después de `npm install` se generará `frontend/package-lock.json`. Conserva y sube ese archivo a GitHub. La acción de despliegue utiliza `npm ci` y depende de él.

## Estructura

```text
gambling-palace/
├─ .github/workflows/deploy-pages.yml
├─ backend/README.md                  # API pendiente
├─ frontend/
│  ├─ public/assets/                  # logo Royal Crown
│  ├─ src/
│  │  ├─ components/                   # Navbar, Footer, ExperienceCard
│  │  ├─ data/                         # contenido editable
│  │  ├─ pages/                        # Home y páginas provisionales
│  │  ├─ styles/                       # variables y CSS responsive
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ package.json
│  ├─ vite.config.js
│  └─ index.html
├─ .gitignore
└─ README.md
```

## Publicar en GitHub

1. Crea un repositorio en https://github.com/new llamado `gambling-palace` y **no** agregues un README, licencia ni .gitignore al crearlo (ya vienen incluidos).
2. En la raíz local, después de probar `npm install` y `npm run build`:

```bash
git init -b main
git add .
git commit -m "feat: estructura inicial y home Royal Palace"
git remote add origin https://github.com/TU_USUARIO/gambling-palace.git
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu cuenta. Autentícate con GitHub cuando lo solicite. Si ya había un repositorio Git, omite `git init`.

3. Ve a **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. Abre la pestaña **Actions** y confirma que el despliegue pase exitosamente.
5. Tu enlace normalmente será `https://TU_USUARIO.github.io/gambling-palace/`.

La configuración de Vite detecta automáticamente el nombre del repositorio en GitHub Actions para configurar la ruta base. `HashRouter` evita errores de recarga en rutas internas de GitHub Pages.

## Enfoque de seguridad

- La versión actual es estática. **No existe autenticación real ni registro de progreso todavía.**
- Todos los enlaces a módulos no desarrollados muestran un mensaje de "Próxima etapa".
- El futuro backend se alojará en un servicio distinto; GitHub Pages no ejecuta Node.js ni protege secretos.
- Nunca subas archivos `.env` ni claves de servicios.
- Adaptar las condiciones de privacidad para jóvenes menores de 18 años antes de publicar un registro real.

## Rúbrica — pendientes de la entrega completa

- [x] Marca y Home.
- [ ] Catálogo funcional de actividades/servicios.
- [ ] Formulario de contacto real.
- [ ] Panel de administrador con login.
- [ ] IA personalizada conectada al emprendimiento.
- [ ] Backend y datos.
- [ ] Experiencia responsive (implementada; pendiente validarla en dispositivos).
- [ ] Publicación en GitHub Pages.
- [ ] Repositorio GitHub con **mínimo 15 commits auténticos**.

Los commits deben reflejar cambios reales. Plan sugerido:
1. estructura inicial
2. identidad de marca
3. navegación responsive
4. hero
5. secciones informativas
6. catálogo Games
7. juego 1
8. juego 2
9. juego 3
10. Academy
11. autenticación
12. panel admin CRUD
13. base de datos/progreso
14. Palace AI
15. pruebas y despliegue

## Créditos

Logo Royal Crown basado en el diseño 3 elegido por el equipo para Gambling Palace. La maqueta visual es un punto de partida que puede refinarse.
