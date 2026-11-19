import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceCard({ experience, index }) {
  const Icon = experience.icon;
  return <article className={`experience-card accent-${experience.accent}`}>
    <div className="card-top"><span className="card-ordinal">0{index+1}</span><ArrowUpRight size={21} className="card-arrow" aria-hidden="true" /></div>
    <div className="card-icon"><Icon size={30} strokeWidth={1.6}/></div>
    <span className="eyebrow tiny">{experience.tag}</span>
    <h3>{experience.title}</h3>
    <p>{experience.description}</p>
    <Link to={experience.link} className="card-link">Explorar módulo <ArrowUpRight size={16}/></Link>
  </article>;
}
