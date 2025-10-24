import CafeCupSplash from "../assets/cafe.png";
import GuiaTitulo from "../assets/titulo-cafe.png";


function Cafe() {
  // 1. Estilo para o Contêiner Principal (a faixa marrom escura)

  const mainContainerStyle = {
    backgroundColor: "#54402f",
    width: "100%",
    height: "350px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    marginTop: "80px",
    zIndex: 10,
  };

  const arcStyle = {
    borderRadius: "0 50% 50% 0", // Arredondado à direita, reto à esquerda
    backgroundColor: "#FFFFFF",
    width: "350px",
    height: "400px", // Maior que o container principal
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "4px 0px 15px rgba(0, 0, 0, 0.3)",
    position: "absolute",
    left: "0",
    top: "50%",
    transform: "translateY(-50%)", // Centraliza verticalmente
    zIndex: 2,
  };

  const cupImageStyle = {
    width: "300px",
    height: "300px",
    objectFit: "contain",
    transform: "translateX(20px)",
    marginLeft: "-30px",
  };

  const titleContainerStyle = {
    position: "absolute",
    left: "350px",
    width: "calc(100% - 350px)",
    height: "100%",
    zIndex: 3,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: "0 50px",
  };

  const titleImageStyle = {
    maxHeight: "290px", // Ajuste este valor. O banner tem 350px de altura.
    width: "auto", // Ajuste o width para 'auto' para que o maxHeight funcione bem
    objectFit: "contain",
    marginBottom: "-20px",
  };

  return (
    <div style={mainContainerStyle}>
      {/* O Arco Branco */}
      <div style={arcStyle}>
        <img
          src={CafeCupSplash}
          alt="Copo de Café com Splash e Grãos"
          style={cupImageStyle}
        />
      </div>

      {/* O Novo Título (e qualquer outro texto que você queira) */}
      <div style={titleContainerStyle}>
        {/* A imagem do seu novo título */}
        <img
          src={GuiaTitulo}
          alt="Guia de Visita Perfeita na Miauteria"
          style={titleImageStyle}
        />

        {/* Adicione um parágrafo de texto se for necessário, seguindo o estilo da sua marca */}
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "1.1em",
            marginTop: "0px",
            fontFamily: "Lexend, sans-serif",
          }}
        >
          Bem-vindo(a) à Miauteria! Criamos este guia com dicas para uma
          <br></br>
          experiência incrível para você, segura e feliz para nossos gatinhos.
        </p>
      </div>
    </div>
  );
}

export default Cafe;
