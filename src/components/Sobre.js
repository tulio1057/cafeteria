import React from "react";
import Galeria from "./Galeria";
import "../styles/sobre.css";

// A lista estática de gatinhos foi removida, pois o componente Galeria
// já carrega dados dinamicamente da The Cat API.

function Sobre() {
  return (
    <main className="sobre-container">
      {/* 1. Cabeçalho Principal */}
      <header className="sobre-header">
        {/* Patinhas como destaque visual (pode ser um ícone ou emoji) */}
        <span className="icone-patinhas">🐾🐾</span>
        <h1>Sobre a Miauteria Café</h1>
        <p>
          Um espaço aconchegante onde gatos e café se encontram em perfeita
          harmonia. Venha relaxar, tomar um café e fazer novos amigos felinos!
        </p>
      </header>

      {/* O componente Galeria agora é responsável por carregar e exibir as imagens */}
      <Galeria />
    </main>
  );
}

export default Sobre;
