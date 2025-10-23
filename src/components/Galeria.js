import React, { useEffect, useState } from "react";
import api from "../api/api";
import "../styles/Galeria.css";

function Galeria() {
  const [cats, setCats] = useState([]);

  const nomesFofos = [
    "Mimi",
    "Tobias",
    "Luna",
    "Chico",
    "Mel",
    "Fred",
    "Nina",
    "Bento",
    "Amora",
    "Theo",
  ];

  const carregarGatos = () => {
    api
      .get("/images/search?limit=8")
      .then((response) => setCats(response.data))
      .catch(() => console.error("Erro ao carregar gatinhos 😿"));
  };

  useEffect(() => {
    carregarGatos();
  }, []);

  return (
    <section className="galeria-container">
      <h2 className="galeria-titulo">🐾 Gatinhos da Miauteria</h2>
      <div className="galeria-grid">
        {cats.map((cat, index) => (
          <div className="galeria-card" key={cat.id}>
            <img
              src={cat.url}
              alt={`Gatinho ${nomesFofos[index % nomesFofos.length]}`}
              className="galeria-imagem"
            />
            <p className="galeria-legenda">
              {nomesFofos[index % nomesFofos.length]}
            </p>
          </div>
        ))}
      </div>
      <button onClick={carregarGatos} className="galeria-botao">
        Ver mais gatinhos 😺
      </button>
    </section>
  );
}

export default Galeria;
