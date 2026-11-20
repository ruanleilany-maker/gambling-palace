# Guía rápida de presentación — Gambling Palace

Esta guía es para preparar una demostración local. Las actividades son educativas y no incluyen apuestas ni dinero real.

## Antes de presentar

1. Abre el proyecto en VS Code y verifica que tengas Node.js 24 y las dependencias instaladas.
2. En una terminal, abre `backend` y ejecuta `npm run dev`. En otra, abre `frontend` y ejecuta `npm run dev`.
3. Entra en la dirección que indique Vite, normalmente `http://localhost:5173`. La dirección `http://localhost:3001/api/health` permite revisar si el servidor responde.
4. Comprueba la conexión a internet y prueba Palace AI antes de la presentación. Revisa el nivel de uso y la facturación de Gemini en tu cuenta. La clave va solo en `backend/.env`; no muestres este archivo durante la presentación ni lo subas a GitHub.
5. Prepara datos ficticios y preguntas sin datos personales. No uses contraseñas reales en diapositivas o ejemplos. No actives servicios de pago sin revisarlos primero.

## Recorrido sugerido

1. **Inicio:** explica que el objetivo es aprender sobre probabilidad, finanzas y pensamiento crítico, sin apuestas monetarias.
2. **Palace Games:** abre La ilusión del patrón y resuelve una pregunta; explica por qué cada lanzamiento de moneda es independiente.
3. **Palace Academy:** muestra un módulo y una pregunta de comprensión.
4. **Palace Progress:** muestra el resultado guardado. Sin cuenta el progreso permanece en ese navegador; con cuenta se guarda en el servidor local. El progreso previo sin cuenta no se importa automáticamente.
5. **Palace AI:** si procede conforme a las condiciones de Google y al público de la demostración, realiza una pregunta sin datos personales, por ejemplo: «¿Qué es la probabilidad?». La respuesta puede tardar o no estar disponible si falla la red, la clave o la cuota.
6. **Contacto e impacto:** explica que el formulario abre una aplicación de correo y que el proyecto es una propuesta educativa.

## Límites que conviene explicar

- La versión local solo funciona mientras las terminales estén abiertas. No es una publicación en internet.
- Las respuestas de la IA pueden contener errores y deben revisarse; no son asesoría financiera personalizada. La disponibilidad depende de Gemini y su nivel de uso.
- El proyecto se dirige a jóvenes desde los 15 años. Las condiciones de Gemini API restringen su uso en aplicaciones dirigidas a menores de 18 años o que probablemente sean usadas por ellos: https://ai.google.dev/gemini-api/terms. Una presentación de prueba o una casilla de consentimiento no cambia por sí sola estas condiciones. Revisa el formato de la demostración con la institución y el proveedor antes de poner la IA a disposición de menores.
- Si se recogen datos personales de menores, consulta los requisitos aplicables con la institución o una persona cualificada. En Panamá, la reglamentación contempla autorización previa del representante y esfuerzos razonables para verificarla; pueden existir excepciones según el caso: https://www.antai.gob.pa/wp-content/uploads/2021/05/Reglamentacio%CC%81n-de-Ley-81-de-Proteccio%CC%81n-de-Datos-Personales.pdf.
- El registro aún no ofrece recuperación de contraseña ni verificación de correo. El sistema y el tratamiento de datos requieren revisión adicional antes de abrirse públicamente.
- El repositorio tiene una rama de revisión: no se ha fusionado ni publicado como versión final. GitHub Pages no ejecuta el servidor.

Si la demostración es solo académica, confirma con la persona docente qué se espera que funcione y si basta con presentarla localmente. No recopiles nombres o correos de compañeros solo para la prueba.
