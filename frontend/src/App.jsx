import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

const pending = {
  games: ['Palace Games', 'Desafíos de probabilidad, finanzas y lógica.'],
  academy: ['Palace Academy', 'Microlecciones, evaluaciones y refuerzo educativo.'],
  ai: ['Palace AI', 'Mentor de IA personalizado para el aprendizaje.'],
  progress: ['Palace Progress', 'Tu historial, indicadores y recomendaciones de aprendizaje.'],
  impacto: ['Nuestro impacto social', 'El propósito educativo y juvenil de Gambling Palace.'],
  contacto: ['Contacto', 'Formulario real de consultas y servicios educativos: pendiente de backend.'],
  login: ['Ingresar', 'Acceso a la cuenta de estudiante y al administrador autorizado.'],
  register: ['Crear cuenta', 'Registro seguro de estudiantes y preferencias educativas.'],
};

export default function App() {
  return <><Navbar/><Routes>
    <Route path="/" element={<Home/>}/>
    {Object.entries(pending).map(([path,[title,description]])=><Route key={path} path={`/${path}`} element={<ComingSoon title={title} description={description}/>}/>)}
    <Route path="*" element={<ComingSoon title="Página no encontrada" description="Esta ruta aún no existe. Puedes regresar al inicio."/>}/>
  </Routes><Footer/></>;
}
