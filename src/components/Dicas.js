import React from "react";
import DicasTitulo from "../assets/dicas-gerais.png"; // Importe a imagem do novo título

// Você pode criar um arquivo CSS (ex: DicasGerais.css) ou usar o App.css
// para estilizar este componente, mas usaremos estilos inline por simplicidade.

function DicasGerais() {
  const sectionStyle = {
    // Esta seção ficará no fundo bege com gatinhos (do componente pai)
    // Definimos padding para dar um respiro visual
    padding: "120px 0",
    maxWidth: "1200px", // Limita a largura do conteúdo (igual ao banner)
    margin: "0 auto", // Centraliza na página
    textAlign: "center",
  };

  const titleImageStyle = {
    width: "400px", // Ajuste o tamanho da imagem do título conforme necessário
    height: "auto",
    marginBottom: "40px", // Espaço após o título
  };

  const contentContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px", // Espaçamento entre as colunas
    textAlign: "left",
    padding: "0 50px", // Padding lateral
  };

  const dicaStyle = {
    flex: "1", // Faz as colunas ocuparem espaço igual
    minWidth: "300px",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Fundo semi-transparente para as caixas
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#3F251A", // Cor do texto marrom escuro
    fontSize: "1.1em",
    lineHeight: "1.6",
    fontWeight: "500", // Semibrilho
    border: "1px solid #EBE0CC", // Borda sutil
  };

  const titleDicaStyle = {
    fontWeight: "bold",
    fontSize: "1.2em",
    marginBottom: "10px",
    borderBottom: "2px solid #3F251A",
    paddingBottom: "5px",
  };

  return (
    <section style={sectionStyle}>
      {/* 1. Título Dicas Gerais */}
      <img src={DicasTitulo} alt="Dicas Gerais" style={titleImageStyle} />

      {/* 2. Conteúdo das Dicas */}
      <div style={contentContainerStyle}>
        {/* Dica 1: Acesso */}
        <div style={dicaStyle}>
          <div style={titleDicaStyle}>Acesso à Cafeteria e ao Gatil</div>
          <p>
            A entrada em nosso café é livre e você paga apenas o que consumir do
            nosso cardápio. A única taxa cobrada é para o acesso à área de
            interação com os gatinhos (o gatil).
          </p>
        </div>

        {/* Dica 2: Reservas */}
        <div style={dicaStyle}>
          <div style={titleDicaStyle}>Reservas de Horário</div>
          <p>
            Quer garantir seu momento com os gatinhos? As reservas de horário
            são confirmadas mediante pagamento antecipado. Recomendamos a
            reserva para evitar filas!
          </p>
        </div>

        {/* Dica 3: Resgates */}
        <div style={dicaStyle}>
          <div style={titleDicaStyle}>Nossa Política sobre Resgates</div>
          <p>
            Admiramos o amor que todos têm pelos animais, mas é importante
            esclarecer que não somos uma ONG e não realizamos resgates. Nosso
            foco é cuidar dos gatinhos residentes e encontrar lares para os que
            estão para adoção.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DicasGerais;
