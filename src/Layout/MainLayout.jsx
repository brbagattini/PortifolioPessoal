import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import GithubImg from "../assets/github.svg";
import LinkedinImg from "../assets/linkedin.svg";
import "../App.css";

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="layout">
      <header className="cabecalho">
        <div className="logo">
          <h1>Meu Portfólio</h1>
        </div>

        <nav className={`menu ${menuOpen ? "ativo" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </Link>
          <Link to="/projetos" onClick={() => setMenuOpen(false)}>
            Projetos
          </Link>
        </nav>

        <div className="acoes">
          <button
            className="botao-tema"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Alternar tema"
          >
            {darkMode ? "🌑" : "☀️"}
          </button>

          <div className="redes">
            <a href="https://github.com/brbagattini" target="_blank" rel="noreferrer">
              <img src={GithubImg} alt="GitHub" className="icone-social" />
            </a>
            <a href="https://www.linkedin.com/in/bruno-bagattini-fernandes-5129442b1" target="_blank" rel="noreferrer">
              <img src={LinkedinImg} alt="LinkedIn" className="icone-social" />
            </a>
          </div>

          <button
            className="hamburguer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
