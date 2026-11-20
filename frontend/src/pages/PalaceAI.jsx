
import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  ShieldCheck,
  Trash2
} from "lucide-react";

import "../styles/ai.css";

const suggestions = [
  "¿Qué es la probabilidad?",
  "¿Cómo organizo un presupuesto?",
  "¿Qué es el pensamiento crítico?"
];

export default function PalaceAI() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");

  function sendMessage(event) {
    event.preventDefault();

    const text = question.trim();

    if (!text) return;

    setMessages(previous => [
      ...previous,
      {
        id: previous.length + 1,
        content: text
      }
    ]);

    setQuestion("");
  }

  return (
    <main className="ai-page">
      <section className="section ai-section">
        <div className="container ai-container">

          <header className="ai-header">
            <span className="eyebrow">
              <Sparkles size={17} />
              APRENDE CON TECNOLOGÍA
            </span>

            <h1>
              PALACE <span>AI</span>
            </h1>

            <h2>Tu mentor educativo inteligente</h2>

            <p>
              Un espacio para explorar la probabilidad,
              las finanzas y el pensamiento crítico.
            </p>
          </header>

          <div className="ai-chat">

            <div className="ai-chat-top">
              <div className="ai-bot-icon">
                <Bot size={25} />
              </div>

              <div>
                <strong>Palace AI</strong>
                <small>
                  Interfaz de demostración
                </small>
              </div>

              <button
                type="button"
                className="ai-clear"
                onClick={() => setMessages([])}
                aria-label="Limpiar conversación"
                title="Limpiar conversación"
              >
                <Trash2 size={19} />
              </button>
            </div>

            <div
              className="ai-messages"
              aria-label="Conversación"
            >
              <div className="ai-message ai-message-bot">
                <Bot size={20} />

                <div className="ai-bubble">
                  <strong>¡Bienvenido a Palace AI!</strong>

                  <p>
                    Aquí podrás consultar dudas
                    relacionadas con los módulos
                    de Palace Academy.
                  </p>

                  <p>
                    Esta es una demostración visual.
                    Las respuestas automáticas se
                    activarán en una próxima etapa.
                  </p>
                </div>
              </div>

              {messages.map(message => (
                <div
                  className="ai-message ai-message-user"
                  key={message.id}
                >
                  <div className="ai-bubble">
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="ai-bottom">

              <p className="ai-suggestions-title">
                Puedes comenzar con:
              </p>

              <div className="ai-suggestions">
                {suggestions.map(item => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setQuestion(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <form
                className="ai-form"
                onSubmit={sendMessage}
              >
                <label htmlFor="ai-question">
                  Escribe tu pregunta
                </label>

                <div className="ai-input-row">
                  <input
                    id="ai-question"
                    type="text"
                    value={question}
                    onChange={event =>
                      setQuestion(event.target.value)
                    }
                    placeholder="Escribe tu pregunta..."
                    maxLength={500}
                  />

                  <button
                    type="submit"
                    aria-label="Enviar mensaje"
                    disabled={!question.trim()}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>

              <p className="ai-disclaimer">
                <ShieldCheck size={16} />
                Modo demostración: los mensajes
                permanecen en esta página y
                todavía no se envían a una IA.
              </p>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
