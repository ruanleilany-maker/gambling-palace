
import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Academy from "./pages/Academy.jsx";
import PalaceAI from "./pages/PalaceAI.jsx";
import AcademyModule from "./pages/AcademyModule.jsx";
import { probabilityLessons } from "./data/probabilityLessons.js";
import { financeLessons } from "./data/financeLessons.js";
import { decisionLessons } from "./data/decisionLessons.js";
import ComingSoon from "./pages/ComingSoon.jsx";
import { Progress, Impact, Contact } from "./pages/ProjectPages.jsx";
import { Account, Admin } from "./pages/Account.jsx";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/games" element={<Games />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/ai" element={<PalaceAI />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/impacto" element={<Impact />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/academy/probabilidad" element={<AcademyModule key="probabilidad" title="Probabilidad sin mitos" lessons={probabilityLessons} completionText="Terminaste las tres lecciones de Probabilidad sin mitos. Cada idea es una herramienta para pensar con más claridad sobre el azar." />} />
        <Route path="/academy/finanzas" element={<AcademyModule key="finanzas" title="Finanzas en acción" lessons={financeLessons} completionText="Terminaste las tres lecciones de Finanzas en acción. Ya tienes herramientas para planificar, priorizar y ahorrar con una meta." />} />

        <Route path="/academy/decisiones" element={<AcademyModule key="decisiones" title="Decisiones con criterio" lessons={decisionLessons} completionText="Terminaste las tres lecciones de Decisiones con criterio. Practica comparar opciones, examinar información y reconocer riesgos en tus decisiones cotidianas." />} />

        <Route path="/login" element={<Account key="login" />} />
        <Route path="/register" element={<Account key="register" register />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<ComingSoon title="Página no encontrada" description="Esta ruta todavía no existe." />} />
      </Routes>
      <Footer />
    </>
  );
}
