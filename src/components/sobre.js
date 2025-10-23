import React from "react";
import Galeria from "./Galeria";
import "../styles/sobre.css";

// Dados de exemplo dos gatinhos (ajuste conforme necessário)
const gatinhos = [
  { nome: "Mimi", foto: "caminho/para/mimi.jpg" }, // Use os caminhos reais das suas imagens
  { nome: "Tobias", foto: "caminho/para/tobias.jpg" },
  { nome: "Luna", foto: "caminho/para/luna.jpg" },
  { nome: "Chico", foto: "caminho/para/chico.jpg" },
  { nome: "Mel", foto: "caminho/para/mel.jpg" },
  { nome: "Flora", foto: "caminho/para/flora.jpg" },
  { nome: "Nino", foto: "caminho/para/nino.jpg" },
  { nome: "Pinto", foto: "caminho/para/pinto.jpg" },
];

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

      <Galeria gatinhos={gatinhos} />
    </main>
  );
}

export default Sobre;
