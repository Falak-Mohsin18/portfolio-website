import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Hi, I’m <span>Falak</span>
        </h1>

        <p>Frontend & Blockchain Developer</p>

        <div className="hero-buttons">
          <button className="primary">View Projects</button>
          <a href="/Falak-Resume.pdf" target="_blank" rel="noreferrer">
  <button className="secondary">Download Resume</button>
</a>

        </div>
      </div>
    </section>
  );
}
