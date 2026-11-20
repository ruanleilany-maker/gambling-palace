
import { useState } from "react";
import {
  ArrowLeft,
  RotateCcw,
  Wallet,
  ShieldCheck
} from "lucide-react";

import "../styles/budget.css";

const TOTAL = 60;

const initialValues = {
  transport: 0,
  food: 0,
  savings: 0,
  leisure: 0
};

const categories = [
  {
    key: "transport",
    label: "Transporte",
    hint: "Necesitas al menos $15"
  },
  {
    key: "food",
    label: "Alimentación",
    hint: "Necesitas al menos $20"
  },
  {
    key: "savings",
    label: "Ahorro",
    hint: "Tu meta es ahorrar $10"
  },
  {
    key: "leisure",
    label: "Entretenimiento",
    hint: "Gasto opcional"
  }
];

export default function BudgetGame({ onBack }) {
  const [values, setValues] = useState({
    ...initialValues
  });

  const [evaluated, setEvaluated] = useState(false);

  const allocated = Object.values(values).reduce(
    (total, amount) => total + amount,
    0
  );

  const remaining = TOTAL - allocated;
  const overBudget = remaining < 0;

  const needsCovered =
    values.transport >= 15 &&
    values.food >= 20;

  const savingsReached = values.savings >= 10;

  const success =
    !overBudget &&
    needsCovered &&
    savingsReached;

  function updateAmount(key, amount) {
    setValues(previous => ({
      ...previous,
      [key]: Number(amount)
    }));

    setEvaluated(false);
  }

  function resetBudget() {
    setValues({ ...initialValues });
    setEvaluated(false);
  }

  return (
    <main className="pg-page">
      <section className="section pg-section">
        <div className="container pg-play-layout">

          <button
            type="button"
            className="pg-back"
            onClick={onBack}
          >
            <ArrowLeft size={18} />
            Volver a Palace Games
          </button>

          <div className="pg-quiz-card bg-layout">

            <div className="bg-intro">
              <Wallet size={40} className="pg-gold" />

              <span className="eyebrow">
                PALACE GAMES · FINANZAS
              </span>

              <h1>Presupuesto inteligente</h1>

              <p>
                Tienes $60 ficticios para organizar
                tus gastos durante una semana.
                Decide cómo distribuirlos.
              </p>
            </div>

            <div className="bg-objective">
              <ShieldCheck size={22} />

              <div>
                <strong>Tu misión</strong>
                <p>
                  Cubre transporte y alimentación,
                  alcanza tu meta de ahorro y evita
                  gastar más de lo disponible.
                </p>
              </div>
            </div>

            <div className="bg-summary">
              <div>
                <span>Presupuesto total</span>
                <strong>$60</strong>
              </div>

              <div>
                <span>Dinero asignado</span>
                <strong>${allocated}</strong>
              </div>

              <div>
                <span>Disponible</span>
                <strong
                  className={
                    overBudget ? "bg-negative" : ""
                  }
                >
                  ${remaining}
                </strong>
              </div>
            </div>

            <progress
              className="pg-progress"
              max={TOTAL}
              value={Math.min(allocated, TOTAL)}
              aria-label="Presupuesto asignado"
            />

            {overBudget && (
              <p className="bg-warning" role="status">
                ¡Atención! Superaste tu presupuesto
                por ${Math.abs(remaining)}.
              </p>
            )}

            <div className="bg-controls">
              {categories.map(item => (
                <div
                  className="bg-control"
                  key={item.key}
                >
                  <div className="bg-control-heading">
                    <label htmlFor={`budget-${item.key}`}>
                      {item.label}
                    </label>

                    <strong>
                      ${values[item.key]}
                    </strong>
                  </div>

                  <input
                    id={`budget-${item.key}`}
                    type="range"
                    min="0"
                    max="40"
                    step="5"
                    value={values[item.key]}
                    onChange={event =>
                      updateAmount(
                        item.key,
                        event.target.value
                      )
                    }
                  />

                  <small>{item.hint}</small>
                </div>
              ))}
            </div>

            <div className="pg-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setEvaluated(true)}
              >
                Evaluar mi presupuesto
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={resetBudget}
              >
                <RotateCcw size={17} />
                Reiniciar
              </button>
            </div>

            {evaluated && (
              <div
                className="bg-feedback"
                role="status"
              >
                <h2>
                  {success
                    ? "¡Excelente decisión!"
                    : "Puedes mejorar tu presupuesto"}
                </h2>

                {overBudget ? (
                  <p>
                    Estás asignando más dinero del
                    disponible. Revisa los gastos
                    opcionales o ajusta tu distribución.
                  </p>
                ) : !needsCovered ? (
                  <p>
                    Primero debes cubrir tus necesidades:
                    al menos $15 para transporte y
                    $20 para alimentación.
                  </p>
                ) : !savingsReached ? (
                  <p>
                    Ya cubriste tus necesidades.
                    Ahora intenta reservar al menos
                    $10 para tu meta de ahorro.
                  </p>
                ) : (
                  <p>
                    Cubriste tus necesidades, alcanzaste
                    tu meta de ahorro y respetaste
                    el presupuesto disponible.
                    ¡Has tomado decisiones financieras
                    responsables!
                  </p>
                )}

                <p className="bg-lesson">
                  Recuerda: un buen presupuesto
                  comienza por las necesidades,
                  incorpora objetivos de ahorro
                  y reserva los gastos opcionales
                  para lo que realmente puedes pagar.
                </p>
              </div>
            )}

            <p className="pg-note">
              Simulación educativa. No utiliza dinero
              real ni guarda información financiera.
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
