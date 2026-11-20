
import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Academy from "./pages/Academy.jsx";
import AcademyModule from "./pages/AcademyModule.jsx";
import { probabilityLessons } from "./data/probabilityLessons.js";
import { financeLessons } from "./data/financeLessons.js";
import ComingSoon from "./pages/ComingSoon.jsx";

const pending = {
  ai: [
    "Palace AI",
    "Mentor de IA personalizado para el aprendizaje."
  ],
  progress: [
    "Palace Progress",
    "Tu historial, indicadores y recomendaciones."
  ],
  impacto: [
    "Nuestro impacto social",
    "El propósito educativo y juvenil de Gambling Palace."
  ],
  contacto: [
    "Contacto",
    "Formulario de consultas y servicios educativos."
  ],
  login: [
    "Ingresar",
    "Acceso a estudiantes y administradores autorizados."
  ],
  register: [
    "Crear cuenta",
    "Registro seguro de estudiantes."
  ]
};

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/games" element={<Games />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy/probabilidad" element={<AcademyModule key="probabilidad" title="Probabilidad sin mitos" lessons={probabilityLessons} completionText="Terminaste las tres lecciones de Probabilidad sin mitos. Cada idea es una herramienta para pensar con más claridad sobre el azar." />} />
        <Route path="/academy/finanzas" element={<AcademyModule key="finanzas" title="Finanzas en acción" lessons={financeLessons} completionText="Terminaste las tres lecciones de Finanzas en acción. Ya tienes herramientas para planificar, priorizar y ahorrar con una meta." />} />

        {Object.entries(pending).map(
          ([path, [title, description]]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <ComingSoon
                  title={title}
                  description={description}
                />
              }
            />
          )
        )}

        <Route
          path="*"
          element={
            <ComingSoon
              title="Página no encontrada"
              description="Esta ruta todavía no existe."
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
