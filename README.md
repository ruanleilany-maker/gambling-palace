# 👑 Gambling Palace — Más allá del azar

Gambling Palace es un proyecto educativo dirigido a jóvenes de 15 a 24 años. Combina actividades interactivas, lecciones y herramientas digitales para desarrollar conocimientos de probabilidad, finanzas personales y pensamiento crítico. La plataforma no incluye apuestas, depósitos ni premios monetarios.

**Sitio web:** [Gambling Palace](https://ruanleilany-maker.github.io/gambling-palace/)

## Experiencias

- **Palace Games:** tres retos interactivos sobre probabilidad, presupuesto y lógica.
- **Palace Academy:** módulos educativos con lecciones y preguntas de comprensión.
- **Palace Progress:** registro de retos y módulos completados, disponible en el navegador o en la cuenta de la persona usuaria.
- **Palace AI:** tutor digital para consultas educativas, conectado a Gemini a través del servidor.
- **Mi cuenta:** registro e inicio de sesión, cambio de contraseña y eliminación de la cuenta y su progreso.
- **Impacto y contacto:** información sobre el propósito del proyecto y un formulario que prepara un correo en la aplicación de la persona usuaria.

## Tecnologías

| Área | Tecnología |
| --- | --- |
| Interfaz | React y Vite |
| Servidor | Node.js y Express |
| Datos | SQLite |
| Tutor digital | API de Gemini |
| Publicación | GitHub Pages y Render |

La clave de la API se configura como una variable privada en el servidor. Las preguntas enviadas al tutor se procesan mediante Gemini y se describen en la página de privacidad del sitio.

## Ejecución local

El proyecto utiliza Node.js 24. El servidor y la interfaz se ejecutan en terminales independientes:

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

La interfaz está disponible normalmente en `http://localhost:5173` y el estado del servidor en `http://localhost:3001/api/health`. La configuración y los detalles del servidor se encuentran en [backend/README.md](backend/README.md). Los archivos de entorno privados y la base de datos no forman parte del repositorio.

## Alcance y consideraciones

Las respuestas del tutor pueden contener errores y no constituyen asesoría financiera profesional. El formulario de contacto prepara el mensaje en la aplicación de correo; la persona usuaria realiza el envío. Las cuentas todavía no incluyen recuperación de contraseña ni verificación de correo.

El servidor gratuito usa almacenamiento temporal, por lo que las cuentas y los avances pueden perderse al reiniciarse. Para conservar esos datos se necesita almacenamiento persistente.

Las condiciones de Gemini API restringen su uso en aplicaciones dirigidas a menores de 18 años o que probablemente sean usadas por ellos. El uso público de Palace AI para el público objetivo del proyecto requiere revisar esa restricción y una alternativa compatible. También es necesaria una revisión de privacidad y de los requisitos aplicables al tratamiento de datos de menores. [Condiciones de Gemini](https://ai.google.dev/gemini-api/terms).
