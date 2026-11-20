# 👑 Gambling Palace — Más allá del azar

Proyecto educativo para jóvenes de 15 a 24 años. No incluye apuestas, depósitos ni premios monetarios.

## Lo que incluye

- Tres juegos educativos de probabilidad, presupuesto y lógica.
- Tres módulos de Academy, con lecciones y preguntas.
- Palace Progress guarda módulos y retos en la cuenta al iniciar sesión, o en el navegador si se usa sin cuenta. El progreso anterior sin cuenta no se importa automáticamente.
- Registro, acceso y panel de administración de avisos mediante el servidor y SQLite.
- Página de impacto y formulario que prepara un correo a ruanleilany@gmail.com para que la persona lo revise y envíe desde su aplicación de correo.
- Palace AI conectado por medio de un servidor Express configurable. Necesita una clave API y acceso habilitado; consulta [backend/README.md](backend/README.md).

## Ejecutar en tu computadora

Se recomienda Node 24. Abre dos terminales en la carpeta del proyecto:

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

Abre la dirección que indique Vite. Para verificar el compilado, ejecuta `npm run build` dentro de `frontend`. El servidor puede responder en `http://localhost:3001/api/health`. Configura primero `backend/.env` para usar la IA; nunca subas tu clave a GitHub.

## Publicación y pendientes

El flujo de GitHub Actions publica el frontend en GitHub Pages cuando se sube a la rama principal y Pages está configurado para usar Actions. GitHub Pages no ejecuta el backend. Necesitas alojar Express por separado con HTTPS y configurar sus variables privadas. Para conectar Pages, añade en GitHub la variable de repositorio `VITE_API_BASE_URL` con la URL pública del backend y configura en el servidor `ALLOWED_ORIGINS` con el origen exacto del sitio. Consulta el README del backend para seguridad, costos y límites.

Las cuentas y el panel requieren el backend y una base de datos persistente. La recuperación de contraseñas, verificación de correo y gestión de consentimiento para menores todavía no están implementadas; no usar cuentas públicamente hasta completar y revisar esas funciones. El formulario de contacto depende de una aplicación de correo instalada y no envía por sí solo. El sistema de IA necesita pruebas con una clave y controles adicionales antes de publicarse para menores. La publicación, disponibilidad de servicios y cantidad de commits deben verificarse en GitHub; no se asumen completadas.
