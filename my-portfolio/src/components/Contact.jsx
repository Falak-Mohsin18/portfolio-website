import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const email = "falak.mohsin18@gmail.com";
  const github = "https://github.com/Falak-Mohsin18";
  const linkedin = "https://www.linkedin.com/in/falak-mohsin-b33a02299/";

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      <p className="contact-text">
        Feel free to reach out for collaborations, internships, or just a
        friendly chat.
      </p>

      <div className="contact-card">
        {/* Email */}
        <button className="contact-item" onClick={copyEmail}>
          📧 {email}
          <span className={`copy-status ${copied ? "show" : ""}`}>
            Copied!
          </span>
        </button>

        {/* GitHub */}
        <a
          className="contact-item"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          💻 GitHub
        </a>

        {/* LinkedIn */}
        <a
          className="contact-item"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}
