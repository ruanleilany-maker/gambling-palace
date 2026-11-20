# Palace AI: configuración

El servidor conserva `/api/health` y ofrece `POST /api/ai`. Usa Node 24 y npm.

1. En `backend`, ejecuta `npm install`. Copia `.env.example` como `.env` y coloca tu clave propia en `GEMINI_API_KEY`. Nunca subas `.env` ni pegues la clave en el frontend. La clave se crea en Google AI Studio; no se ha creado ninguna por ti.
2. En `backend`, ejecuta `npm run dev`. En otra terminal, en `frontend`, ejecuta `npm install` y `npm run dev`. Vite redirige `/api` al servidor local en el puerto 3001. Abre la dirección que indique Vite y entra en Palace AI.
3. `npm run build` en `frontend` verifica el compilado.

El modelo configurable por defecto es `gemini-3.5-flash-lite`. Google ofrece un nivel gratuito sujeto a disponibilidad y límites; revisa tu proyecto en Google AI Studio y los precios actuales en https://ai.google.dev/gemini-api/docs/pricing. No actives facturación de pago si no deseas cargos. Si habilitas un plan de pago, el uso puede generar cargos. Google indica que el contenido del nivel gratuito puede utilizarse para mejorar sus productos; no envíes datos personales. No se ha efectuado ninguna llamada a Gemini.

GitHub Pages solo aloja el frontend: para publicar la IA necesitas alojar Node en otro servicio HTTPS, con la clave configurada en las variables privadas del servicio. Define `HOST=0.0.0.0`, usa el puerto que proporcione el servicio y establece `ALLOWED_ORIGINS` con el origen exacto de Pages, por ejemplo `https://usuario.github.io`. En el frontend define `VITE_API_BASE_URL` con la URL HTTPS del backend antes de compilar; esta URL es pública, no pongas claves allí. Revisa también los costos del alojamiento.

La protección de cinco solicitudes por minuto por dirección es básica, en memoria y por proceso; se reinicia y no sirve como límite global en múltiples instancias. Si se publica, añade autenticación, cuotas compartidas y límites de gasto; CORS no impide llamadas directas. Tras un proxy, configura la identificación de IP de forma segura según el proveedor. Las instrucciones al modelo reducen respuestas inapropiadas, pero no garantizan bloquearlas: se requieren pruebas y controles adicionales antes del uso público por menores. No introduzcas datos personales; el proveedor procesa las preguntas. Las preguntas se envían individualmente, sin historial de conversación.

## Cuentas, progreso y administración

El backend crea una base SQLite en `backend/palace.sqlite`; está excluida de Git. En un alojamiento, configura `DB_PATH` en un disco persistente con copias de seguridad: si el sistema de archivos es temporal, se perderán las cuentas y el progreso. No subas ni compartas la base de datos.

Para crear la primera cuenta administradora, configura `ADMIN_EMAIL` y `ADMIN_INITIAL_PASSWORD` en `backend/.env` antes de arrancar el servidor. Usa una contraseña única de al menos 12 caracteres. El servidor crea la cuenta si ese correo todavía no existe; después, retira ambas variables y reinicia. Una cuenta ya existente no se convierte automáticamente en administradora. Inicia sesión y abre `/admin` para crear, editar o eliminar avisos visibles en Academy. Las lecciones y juegos siguen en archivos del proyecto.

El registro pide correo y contraseña; las contraseñas se guardan con scrypt y una sal aleatoria. Las sesiones duran hasta ocho horas, se mantienen en la pestaña del navegador y se invalidan al cerrar sesión o reiniciar el servidor. El progreso de una cuenta se guarda en el servidor; el progreso de invitado queda separado en el navegador.

**Antes de abrir cuentas al público:** faltan recuperación de contraseña, verificación de correo, administración de cuentas y tratamiento del consentimiento y la privacidad de menores. El límite de acceso y las sesiones están en memoria de un solo proceso; no son adecuados para múltiples instancias ni ofrecen protección completa contra abuso. Revisa la seguridad, protección de datos, HTTPS, copias de seguridad y límites de gasto; usa almacenamiento de sesiones y límites compartidos antes de un despliegue real. El correo y los avances se almacenan en el servidor.
