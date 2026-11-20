import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, BookOpen, RotateCcw } from "lucide-react";
import "../styles/academy.css";

export default function AcademyModule({ title, lessons, completionText }) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const lesson = lessons[index];

  function next() {
    if (index === lessons.length - 1) {
      setCompleted(true);
    } else {
      setIndex(index + 1);
      setChoice(null);
      setChecked(false);
      window.scrollTo(0, 0);
    }
  }

  function restart() {
    setIndex(0);
    setChoice(null);
    setChecked(false);
    setCompleted(false);
    window.scrollTo(0, 0);
  }

  return (
    <main className="academy-page">
      <section className="section academy-section">
        <div className="container academy-lesson-wrap">
          <Link className="academy-back" to="/academy"><ArrowLeft size={18} /> Volver al catálogo</Link>
          {completed ? (
            <div className="academy-lesson-card academy-complete">
              <BookOpen size={40} aria-hidden="true" />
              <span className="eyebrow">MÓDULO COMPLETADO</span>
              <h1>¡Buen trabajo!</h1>
              <p>{completionText}</p>
              <p className="academy-disclaimer">Tu avance es temporal y todavía no se guarda en una cuenta.</p>
              <div className="academy-lesson-actions">
                <button type="button" className="btn btn-primary" onClick={restart}><RotateCcw size={17} /> Repasar módulo</button>
                <Link className="btn btn-outline" to="/academy">Volver al catálogo</Link>
              </div>
            </div>
          ) : (
            <article className="academy-lesson-card">
              <span className="eyebrow">PALACE ACADEMY · {title.toUpperCase()}</span>
              <h1>{lesson.title}</h1>
              <div className="academy-progress-label">Lección {index + 1} de {lessons.length}</div>
              <progress className="academy-progress" value={index + 1} max={lessons.length} aria-label="Lección actual" />
              <div className="academy-lesson-text">{lesson.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              <fieldset className="academy-question">
                <legend>Comprueba lo aprendido</legend>
                <p>{lesson.question}</p>
                {lesson.options.map((option, optionIndex) => (
                  <label className={`academy-option ${choice === optionIndex ? "selected" : ""}`} key={option}>
                    <input type="radio" name={`lesson-${index}`} checked={choice === optionIndex} onChange={() => setChoice(optionIndex)} disabled={checked} />
                    <span>{option}</span>
                  </label>
                ))}
              </fieldset>
              {checked && <div className="academy-feedback" role="status"><strong>{choice === lesson.correct ? "¡Respuesta correcta!" : "Sigamos aprendiendo"}</strong><p>{lesson.explanation}</p></div>}
              <div className="academy-lesson-actions">
                {!checked ? <button type="button" className="btn btn-primary" disabled={choice === null} onClick={() => setChecked(true)}>Comprobar respuesta</button> : <button type="button" className="btn btn-primary" onClick={next}>{index === lessons.length - 1 ? "Finalizar módulo" : "Siguiente lección"} <ArrowRight size={17} /></button>}
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
