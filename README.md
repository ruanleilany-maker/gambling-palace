# 👑 Gambling Palace — Más allá del azar

Gambling Palace es un proyecto educativo que invita a jóvenes de 15 a 24 años a explorar la probabilidad, las finanzas personales y el pensamiento crítico. Sus actividades no incluyen apuestas, depósitos ni premios monetarios.

## Experiencias

- **Palace Games:** tres retos de probabilidad, presupuesto y lógica.
- **Palace Academy:** lecciones y preguntas sobre probabilidad, finanzas y decisiones.
- **Palace Progress:** muestra los retos y módulos completados. El progreso se guarda en el navegador sin cuenta o en el servidor al iniciar sesión.
- **Palace AI:** tutor que responde preguntas educativas mediante Gemini, cuando el servidor y la clave están configurados.
- **Cuenta:** permite registrarse, iniciar sesión, cambiar la contraseña y eliminar la cuenta con su progreso.
- **Contacto e impacto:** información sobre el proyecto y un formulario que abre la aplicación de correo de la persona usuaria.

## Tecnologías

El frontend está construido con React y Vite. El backend utiliza Node.js y Express; SQLite almacena las cuentas y el progreso en el servidor. Palace AI se conecta a la API de Gemini desde el backend: la clave no se coloca en el navegador.

## Ejecutar localmente

Se recomienda Node.js 24. Abre dos terminales en la carpeta del proyecto:

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

Abre la dirección que indique Vite, normalmente `http://localhost:5173`. Para comprobar el servidor, visita `http://localhost:3001/api/health`. La configuración de Palace AI se explica en [backend/README.md](backend/README.md). Nunca compartas ni subas el archivo `backend/.env` o la base de datos.

Para comprobar la compilación del frontend:

```bash
cd frontend
npm run build
```

## Enlace y despliegue

El frontend se publica mediante GitHub Pages. El servidor requiere un alojamiento independiente, con HTTPS y la clave configurada como variable privada. La base de datos necesita almacenamiento persistente para conservar cuentas y progreso. La configuración está descrita en [backend/README.md](backend/README.md).

El enlace público existente es [Gambling Palace](https://ruanleilany-maker.github.io/gambling-palace/). Las actualizaciones se preparan en una rama de revisión y se publican desde la rama principal.

## Consideraciones para la presentación

- La aplicación tiene fines educativos. Las respuestas de Palace AI pueden contener errores y no sustituyen asesoría financiera profesional.
- Las preguntas enviadas a Palace AI se procesan mediante Gemini; no se deben escribir datos personales. El tratamiento de datos se describe en la sección Privacidad de la página.
- Las condiciones de Gemini API restringen su uso en aplicaciones dirigidas a menores de 18 años o que probablemente sean usadas por ellos. Antes de poner Palace AI a disposición del público objetivo del proyecto, se debe revisar esta restricción y definir una alternativa compatible. Consulta las [condiciones de Gemini](https://ai.google.dev/gemini-api/terms).
- Las cuentas aún no ofrecen recuperación de contraseña ni verificación de correo. Antes de abrir el registro al público, es necesaria una revisión de seguridad y de la privacidad y el consentimiento aplicables a menores.
- El contacto prepara un mensaje en la aplicación de correo: el envío lo realiza la persona usuaria.

Para el recorrido de demostración, consulta [GUIA_PRESENTACION.md](GUIA_PRESENTACION.md).
