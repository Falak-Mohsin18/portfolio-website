import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "TrustPay – Escrow DApp",
      description:
        "A decentralized escrow platform that securely locks and releases payments using smart contracts, ensuring trustless transactions between clients and freelancers.",
      tech: ["React", "Solidity", "Ethereum"],
      type: "Blockchain",
      github: "https://github.com/Falak-Mohsin18/Trustpay",
      live: "https://lnkd.in/gVZj4yuC",
    },
    {
      title: "Finance Fusion",
      description:
        "A finance management application that aggregates financial data and provides insights through APIs.",
      tech: ["React", "Flask", "API"],
      type: "Finance App",
      github: "https://github.com/Falak-Mohsin18/finance-fussion",
      live: "https://finance-fussion-8o7l.onrender.com",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-type">{project.type}</span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
