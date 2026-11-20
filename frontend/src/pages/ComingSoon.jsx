import { Link } from 'react-router';
import { ArrowLeft, Crown, Sparkles } from 'lucide-react';

export default function ComingSoon({ title, description }) {
  return <main className="pending-page"><div className="container pending-wrap"><Crown size={50} className="pending-crown"/><span className="eyebrow centered-eyebrow"><Sparkles size={15}/> GAMBLING PALACE</span><h1>{title}</h1><p>{description}</p><Link className="btn btn-primary" to="/"><ArrowLeft size={17}/> Volver al inicio</Link></div></main>;
}
