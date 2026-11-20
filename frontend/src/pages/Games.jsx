
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Wallet,
  KeyRound,
  Clock3,
  ShieldCheck,
  RotateCcw,
  Sparkles
} from "lucide-react";

import { games } from "../data/games.js";
import "../styles/games.css";

import BudgetGame from "./BudgetGame.jsx";

const categories = ["Todas", "Probabilidad", "Finanzas", "Lógica"];

const icons = {
  Probabilidad: Brain,
  Finanzas: Wallet,
  Lógica: KeyRound
};

export default function Games() {
  const [category, setCategory] = useState("Todas");
  const [playing, setPlaying] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentGame = games.find(
  game => game.id === selectedGameId
);
  const visibleGames = games.filter(
    game => category === "Todas" || game.category === category
  );

  const question = currentGame?.questions[questionIndex];

 function startGame(game) {
  setSelectedGameId(game.id);
  setPlaying(true);
  setQuestionIndex(0);
  setChoice(null);
  setAnswered(false);
  setScore(0);
  setFinished(false);
  window.scrollTo(0, 0);
}

  function checkAnswer() {
    if (choice === null || answered) return;

    if (choice === question.correctIndex) {
      setScore(previous => previous + 1);
    }

    setAnswered(true);
  }

  function nextQuestion() {
    if (questionIndex === currentGame.questions.length - 1) {
      setFinished(true);
      return;
    }

    setQuestionIndex(previous => previous + 1);
    setChoice(null);
    setAnswered(false);
  }

  function goToCatalog() {
    setPlaying(false);
    setFinished(false);
    window.scrollTo(0, 0);
  }

if (playing && currentGame?.id === "presupuesto") {
  return <BudgetGame onBack={goToCatalog} />;
}

  if (playing) {
    return (
      <main className="pg-page">
        <section className="section pg-section">
          <div className="container pg-play-layout">
            <button
              className="pg-back"
              onClick={goToCatalog}
            >
              <ArrowLeft size={18} />
              Volver al catálogo
            </button>

            {finished ? (
              <div className="pg-quiz-card pg-result">
                <Sparkles size={42} className="pg-gold" />

                <span className="eyebrow">
                  DESAFÍO COMPLETADO
                </span>

                <h1>¡Has terminado!</h1>

                <p className="pg-score">
                  {score} / {currentGame.questions.length}
                </p>

                <p>
                  Respondiste correctamente {score} de{" "}
                  {currentGame.questions.length} preguntas.
                </p>

                <p>
                  Cada explicación es una oportunidad para
                  comprender mejor las probabilidades.
                </p>

                <div className="pg-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => startGame(currentGame)}
                  >
                    <RotateCcw size={18} />
                    Volver a practicar
                  </button>

                  <button
                    className="btn btn-outline"
                    onClick={goToCatalog}
                  >
                    Ver otros juegos
                  </button>
                </div>

                <small>
                  Resultado de demostración: todavía no se
                  guarda en una cuenta.
                </small>
              </div>
            ) : (
              <div className="pg-quiz-card">
                <span className="eyebrow">
                  {`PALACE GAMES · ${currentGame.category.toUpperCase()}`}
                </span>

                <h1>{currentGame.title}</h1>

                <div className="pg-progress-info">
                  <span>
                    Pregunta {questionIndex + 1} de{" "}
                    {currentGame.questions.length}
                  </span>

                  <span>{score} aciertos</span>
                </div>

                <progress
                  className="pg-progress"
                  value={questionIndex + 1}
                  max={currentGame.questions.length}
                  aria-label="Avance del desafío"
                />

                <fieldset className="pg-fieldset">
                  <legend>{question.prompt}</legend>

                  <div className="pg-options">
                    {question.options.map((option, index) => (
                      <label
                        key={index}
                        className={`pg-option ${
                          choice === index ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${questionIndex}`}
                          checked={choice === index}
                          onChange={() => setChoice(index)}
                          disabled={answered}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {answered && (
                  <div
                    className="pg-feedback"
                    role="status"
                  >
                    <strong>
                      {choice === question.correctIndex
                        ? "¡Respuesta correcta!"
                        : "Aprendamos de esta respuesta"}
                    </strong>

                    <p>{question.explanation}</p>
                  </div>
                )}

                <div className="pg-actions">
                  {!answered ? (
                    <button
                      className="btn btn-primary"
                      disabled={choice === null}
                      onClick={checkAnswer}
                    >
                      Comprobar respuesta
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={nextQuestion}
                    >
                      {questionIndex ===
                      currentGame.questions.length - 1
                        ? "Ver resultados"
                        : "Siguiente pregunta"}
                      <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pg-page">
      <section className="section pg-section">
        <div className="container">
          <div className="pg-header">
            <span className="eyebrow">
              EXPERIENCIAS INTERACTIVAS
            </span>

            <h1>
              PALACE <span>GAMES</span>
            </h1>

            <h2>
              Desafía tu mente.
              <br />
              Descubre tu potencial.
            </h2>

            <p>
              Aprende probabilidad, finanzas y lógica
              mediante desafíos educativos diseñados
              para desarrollar tu pensamiento crítico.
            </p>

            <div className="pg-assurance">
              <ShieldCheck size={19} />
              Sin apuestas monetarias
            </div>
          </div>

          <div className="pg-heading">
            <div>
              <span className="eyebrow">
                EXPLORA NUESTRO UNIVERSO
              </span>
              <h2>Elige tu desafío</h2>
            </div>
          </div>

          <div className="pg-filters">
            {categories.map(item => (
              <button
                key={item}
                className={`pg-filter ${
                  category === item ? "active" : ""
                }`}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="pg-grid">
            {visibleGames.map(game => {
              const Icon = icons[game.category];

              return (
                <article className="pg-card" key={game.id}>
                  <div className="pg-card-top">
                    <div className="pg-icon">
                      <Icon size={30} />
                    </div>
                    <span className="pg-level">
                      {game.level}
                    </span>
                  </div>

                  <span className="pg-category">
                    {game.category}
                  </span>

                  <h3>{game.title}</h3>
                  <p>{game.description}</p>

                  <div className="pg-duration">
                    <Clock3 size={16} />
                    {game.duration}
                  </div>

                  {game.available ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => startGame(game)}
                    >
                      Comenzar desafío
                      <ArrowRight size={17} />
                    </button>
                  ) : (
                    <span className="pg-coming">
                      Próximamente
                    </span>
                  )}
                </article>
              );
            })}
          </div>

          <p className="pg-note">
            Cada desafío ofrece aprendizaje y
            explicaciones. No hay depósitos, apuestas
            ni premios monetarios.
          </p>
        </div>
      </section>
    </main>
  );
}
