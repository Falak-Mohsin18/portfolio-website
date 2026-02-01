import { useState } from "react";
import "./AIAssistant.css";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const askAI = async () => {
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setQuestion("");

    const res = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { role: "ai", text: data.answer }]);
  };

  return (
    <>
      <button className="ai-float" onClick={() => setOpen(!open)}>
        🤖
      </button>

      {open && (
        <div className="ai-box">
          <h4>Ask My AI Assistant</h4>

          <div className="ai-messages">
            {messages.map((m, i) => (
              <div key={i} className={`ai-msg ${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="ai-input">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about my projects..."
            />
            <button onClick={askAI}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
