
import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  ShieldCheck,
  Trash2
} from "lucide-react";

import AIResponse from "../components/AIResponse.jsx";
import "../styles/ai.css";

const suggestions = [
  "¿Qué es la probabilidad?",
  "¿Cómo organizo un presupuesto?",
  "¿Qué es el pensamiento crítico?"
];

export default function PalaceAI() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function sendMessage(event) {
    event.preventDefault();
    const text = question.trim();
    if (!text || loading) return;
    setMessages(previous => [...previous, { id: crypto.randomUUID(), role: "user", content: text }]);
    setQuestion(""); setError(""); setLoading(true);
    try {
      const base = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
      const response = await fetch(base + "/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: text }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No se pudo responder.");
      setMessages(previous => [...previous, { id: crypto.randomUUID(), role: "bot", content: data.answer }]);
    } catch (err) { setError(err.message === "Failed to fetch" ? "No se pudo conectar con el servidor." : err.message); }
    finally { setLoading(false); }
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
                  Tutor educativo
                </small>
              </div>

              <button
                type="button"
                className="ai-clear"
                onClick={() => { setMessages([]); setError(""); }}
                disabled={loading}
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
                    Haz una pregunta para comenzar.
                  </p>
                </div>
              </div>

              {messages.map(message => (
                <div
                  className={`ai-message ai-message-${message.role}`}
                  key={message.id}
                >
                  <div className="ai-bubble">
                    {message.role === "bot" ? <AIResponse text={message.content} /> : message.content}
                  </div>
                </div>
              ))}
            </div>

            {loading && <p role="status">Palace AI está pensando…</p>}
            {error && <p role="alert">{error}</p>}
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
                    disabled={!question.trim() || loading}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>

              <p className="ai-disclaimer">
                <ShieldCheck size={16} />
                Tus preguntas se envían al servicio de IA para generar respuestas. No compartas datos personales. Cada pregunta se procesa por separado.
              </p>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
