import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    if (savedTheme === "light" || (!savedTheme && prefersLight)) {
      document.body.classList.add("light");
      setLight(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    setLight(isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Falak</h2>

      {/* Desktop Links */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      {/* Right Controls */}
      <div className="nav-actions">
        {/* Theme Toggle */}
        <div className="theme-toggle" onClick={toggleTheme}>
          <span className={`icon ${!light ? "active" : ""}`}>🌙</span>
          <div className={`toggle ${light ? "active" : ""}`}>
            <div className="toggle-circle"></div>
          </div>
          <span className={`icon ${light ? "active" : ""}`}>☀️</span>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
