import { useState } from "react";
import { Link } from "react-router";
import { BookOpen, Brain, Compass, Sparkles, Wallet } from "lucide-react";
import { academyModules } from "../data/academy.js";
import "../styles/academy.css";

const categories = ["Todos", "Probabilidad", "Finanzas", "Decisiones"];
const icons = { Probabilidad: Brain, Finanzas: Wallet, Decisiones: Compass };

export default function Academy() {
  const [category, setCategory] = useState("Todos");
  const visibleModules = academyModules.filter(
    module => category === "Todos" || module.category === category
  );

  return (
    <main className="academy-page">
      <section className="section academy-section">
        <div className="container">
          <header className="academy-hero">
            <span className="eyebrow"><Sparkles size={16} aria-hidden="true" /> APRENDE A TU RITMO</span>
            <h1>PALACE <span>ACADEMY</span></h1>
            <h2>El conocimiento transforma tus decisiones.</h2>
            <p>Explora tres módulos educativos para comprender el azar, cuidar tus finanzas y pensar con criterio.</p>
          </header>

          <div className="academy-heading">
            <span className="eyebrow">TU CAMINO DE APRENDIZAJE</span>
            <h2>Explora los módulos</h2>
            <p>Elige el tema que más te interese conocer.</p>
          </div>

          <div className="academy-filters" role="group" aria-label="Filtrar módulos por tema">
            {categories.map(item => (
              <button type="button" key={item} className={`academy-filter ${category === item ? "active" : ""}`} onClick={() => setCategory(item)} aria-pressed={category === item}>
                {item}
              </button>
            ))}
          </div>

          <div className="academy-grid" aria-live="polite">
            {visibleModules.map(module => {
              const Icon = icons[module.category];
              return (
                <article className="academy-card" key={module.id}>
                  <div className="academy-card-top">
                    <div className="academy-icon"><Icon size={29} aria-hidden="true" /></div>
                    <span className="academy-status">Disponible</span>
                  </div>
                  <span className="academy-category">{module.category}</span>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <div className="academy-topics"><BookOpen size={16} aria-hidden="true" /> <span>{module.topics}</span></div>
                  <Link className="btn btn-primary academy-start" to={`/academy/${module.id}`}>Comenzar módulo</Link>
                </article>
              );
            })}
          </div>
          <p className="academy-note">Explora los tres módulos y aprende a tu ritmo.</p>
        </div>
      </section>
    </main>
  );
}
