import { Link } from 'react-router';
import { Crown, Instagram, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return <footer className="site-footer" id="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="footer-crown"><Crown size={26}/></div>
        <h2>Gambling Palace</h2>
        <p className="gold-copy">Más allá del azar</p>
        <p>Un espacio donde la curiosidad se convierte en conocimiento y las decisiones en oportunidades de aprendizaje.</p>
      </div>
      <div className="footer-links"><h3>EXPLORA</h3><Link to="/games">Palace Games</Link><Link to="/academy">Palace Academy</Link><Link to="/ai">Palace AI</Link><Link to="/progress">Palace Progress</Link></div>
      <div className="footer-links"><h3>PROYECTO</h3><Link to="/impacto">Impacto social</Link><Link to="/contacto">Contacto</Link><Link to="/login">Iniciar sesión</Link><span className="footer-notice">Sin apuestas ni premios monetarios</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Gambling Palace · Proyecto Jóvenes Creativos</span><span>Educación · Tecnología · Impacto social</span></div>
  </footer>;
}
