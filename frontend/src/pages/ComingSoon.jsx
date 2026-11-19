import { Link } from 'react-router';
import { ArrowLeft, Crown, Sparkles } from 'lucide-react';

export default function ComingSoon({ title, description }) {
  return <main className="pending-page"><div className="container pending-wrap"><Crown size={50} className="pending-crown"/><span className="eyebrow centered-eyebrow"><Sparkles size={15}/> PRÓXIMA ETAPA</span><h1>{title}</h1><p>{description}</p><div className="pending-box"><strong>Diseño aprobado · Programación pendiente</strong><span>Estamos construyendo la experiencia de forma progresiva. Esta pantalla es una ruta real, pero su funcionalidad se implementará más adelante.</span></div><Link className="btn btn-primary" to="/"><ArrowLeft size={17}/> Volver al Home</Link></div></main>;
}
