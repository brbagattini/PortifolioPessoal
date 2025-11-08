import SearchBar from "../components/Searchbar.jsx";
import projetos from "./data.js";
import { useState } from "react";

export default function Projetos() {
  const [busca, setBusca] = useState("");

  const filtrados = projetos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="secao projetos-secao">
      <h2 className="subtitulo texto-centro">Meus Projetos</h2>

      <SearchBar valor={busca} aoMudar={setBusca} />

      <div className="grade-projetos">
        {filtrados.map((proj) => (
          <div key={proj.id} className="card-projeto">
            <h3 className="titulo-projeto">{proj.nome}</h3>
            <p className="descricao-projeto">{proj.descricao}</p>

            <div className="lista-tecnologias">
              {proj.tecnologias.map((tec, i) => (
                <span key={i} className="tecnologia">
                  {tec}
                </span>
              ))}
            </div>

            <a href={proj.link} className="botao">
              Ver mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
