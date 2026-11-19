import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, BookOpenText, GraduationCap, Compass, Mail, Crown } from 'lucide-react';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { experiences, pillars, steps, highlights } from '../data/content.js';

const logoUrl = `${import.meta.env.BASE_URL}assets/royal-crown-emblem.webp`;
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function Home() {
  return <main>
    <section className="hero section" id="inicio">
      <div className="hero-glow" aria-hidden="true"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line"/> UNA NUEVA EXPERIENCIA DIGITAL</span>
          <h1>Gambling<br/><span>Palace</span></h1>
          <p className="hero-subtitle">Más allá del azar</p>
          <div className="hero-rule"/>
          <p className="hero-description">Un universo donde la curiosidad se transforma en conocimiento, la estrategia en aprendizaje y cada decisión abre nuevas posibilidades.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={()=>scrollTo('experiencias')}>Explorar experiencias <ArrowUpRight size={18}/></button>
            <button className="btn btn-outline" onClick={()=>scrollTo('proposito')}>Conoce nuestra misión <ArrowRight size={17}/></button>
          </div>
          <div className="hero-assurance"><ShieldCheck size={18} /><span>Educación interactiva · Sin apuestas monetarias</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-arch" aria-hidden="true"/>
          <div className="hero-image-wrap"><img src={logoUrl} className="hero-logo" alt="Emblema Royal Crown de Gambling Palace, corona dorada sobre el monograma GP en violeta" fetchPriority="high" /></div>
          <div className="hero-art-caption"><Crown size={15}/><span>EL CONOCIMIENTO ES TU MAYOR PODER</span></div>
          <span className="art-star art-star-1" aria-hidden="true">✦</span><span className="art-star art-star-2" aria-hidden="true">✦</span>
        </div>
      </div>
      <div className="container hero-scroll"><span>DESCUBRE MÁS</span><span className="scroll-line"/></div>
    </section>

    <section className="section statement-section" id="proposito">
      <div className="container centered narrow">
        <span className="eyebrow centered-eyebrow"><Sparkles size={15}/> NUESTRA ESENCIA</span>
        <h2 className="statement-title">NO VINISTE A APOSTAR.<br/><span>VINISTE A DESCUBRIR.</span></h2>
        <p className="lead">Transformamos la curiosidad por el azar en experiencias de aprendizaje, pensamiento crítico y decisiones responsables para jóvenes de <strong>15 a 24 años</strong>.</p>
        <div className="pillars">
          {pillars.map(p=> <article className="pillar" key={p.title}><p.icon size={25} strokeWidth={1.5}/><h3>{p.title}</h3><p>{p.text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section experiences-section" id="experiencias">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">CUATRO CAMINOS · UNA MISIÓN</span><h2>Nuestro <span>universo</span></h2></div>
          <p>Explora los espacios que forman Gambling Palace. Cada experiencia está diseñada para ayudarte a pensar, aprender y crecer.</p>
        </div>
        <div className="experience-grid">{experiences.map((e,i)=><ExperienceCard key={e.title} experience={e} index={i}/>)}</div>
      </div>
    </section>

    <section className="section challenges-section" id="retos">
      <div className="container challenge-layout">
        <div className="challenge-heading"><span className="eyebrow">EXPERIENCIAS DESTACADAS</span><h2>Tu primer <span>desafío</span></h2><p>Descubre actividades que despiertan la curiosidad y transforman cada pregunta en un nuevo descubrimiento.</p><Link to="/games" className="btn btn-outline">Ver Palace Games <ArrowUpRight size={17}/></Link></div>
        <div className="challenge-list">{highlights.map(h=><Link to="/games" className="challenge-item" key={h.title}><span className="challenge-number">{h.number}</span><span className="challenge-body"><small>{h.category}</small><strong>{h.title}</strong><span>{h.detail}</span></span><ArrowUpRight size={23}/></Link>)}</div>
      </div>
    </section>

    <section className="section impact-section" id="impacto">
      <div className="container impact-layout">
        <div className="impact-art" aria-hidden="true"><span className="impact-ring ring-1"/><span className="impact-ring ring-2"/><span className="impact-ring ring-3"/><GraduationCap size={72} strokeWidth={1.15}/><span className="impact-art-small">EDUCACIÓN CON PROPÓSITO</span></div>
        <div className="impact-copy"><span className="eyebrow">NUESTRO COMPROMISO</span><h2>Un palacio <span>con propósito</span></h2><p>Creemos que el entretenimiento también puede educar. Gambling Palace transforma dinámicas de juego en oportunidades para comprender probabilidades, reconocer riesgos y tomar decisiones informadas.</p><div className="impact-features"><span><ShieldCheck size={18}/> Sin apuestas reales</span><span><BookOpenText size={18}/> Aprendizaje práctico</span><span><Sparkles size={18}/> Impacto social juvenil</span></div><Link className="text-link" to="/impacto">Conocer nuestro impacto <ArrowUpRight size={17}/></Link></div>
      </div>
    </section>

    <section className="section how-section">
      <div className="container"><div className="centered"><span className="eyebrow centered-eyebrow"><Compass size={15}/> TU RECORRIDO</span><h2>¿Cómo <span>funciona?</span></h2><p className="lead small">Cuatro pasos para descubrir lo que puedes aprender.</p></div><div className="step-grid">{steps.map(s=><div className="step" key={s.number}><span className="step-number">{s.number}</span><div className="step-divider"/><h3>{s.title}</h3><p>{s.description}</p></div>)}</div></div>
    </section>

    <section className="section contact-strip">
      <div className="container contact-panel"><div className="contact-icon"><Mail size={32}/></div><div><span className="eyebrow">COLABOREMOS</span><h2>Conectemos ideas</h2><p>¿Tienes una propuesta educativa o representas a una institución? Queremos escucharte.</p></div><Link to="/contacto" className="btn btn-outline">Contactar <ArrowUpRight size={17}/></Link></div>
    </section>

    <section className="section final-cta"><div className="container centered narrow"><Crown className="cta-crown" size={38} strokeWidth={1.2}/><span className="eyebrow centered-eyebrow">TU PRÓXIMO DESCUBRIMIENTO</span><h2>El conocimiento es <span>tu mayor poder.</span></h2><p className="lead">Una nueva forma de explorar, aprender y crecer comienza aquí.</p><Link to="/games" className="btn btn-primary">Comenzar mi experiencia <ArrowUpRight size={17}/></Link><p className="disclaimer">Plataforma educativa · Sin depósitos, apuestas ni premios monetarios</p></div></section>
  </main>;
}
