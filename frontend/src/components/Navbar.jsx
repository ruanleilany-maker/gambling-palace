import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Crown, Menu, X, ArrowUpRight } from 'lucide-react';

const routes = [
  ['/', 'Inicio'],
  ['/games', 'Games'],
  ['/academy', 'Academy'],
  ['/ai', 'Palace AI'],
  ['/impacto', 'Impacto'],
  ['/contacto', 'Contacto'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Gambling Palace, ir al inicio">
          <span className="brand-icon"><Crown size={17} strokeWidth={1.7} /><span>GP</span></span>
          <span className="brand-text"><strong>GAMBLING PALACE</strong><small>MÁS ALLÁ DEL AZAR</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {routes.map(([to, name]) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{name}</NavLink>)}
        </nav>
        <Link className="btn btn-primary nav-action" to="/login">Ingresar <ArrowUpRight size={16}/></Link>
        <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Navegación móvil">
          {routes.map(([to,name]) => <NavLink key={to} to={to} end={to === '/'}>{name}</NavLink>)}
          <Link className="mobile-login" to="/login">Iniciar sesión <ArrowUpRight size={16}/></Link>
        </nav>
      )}
    </header>
  );
}
