import CafeCupSplash from "../assets/cafe.png";
import GuiaTitulo from "../assets/titulo-cafe.png";
import "../styles/Cafe.css";



function Cafe() {
  return (
    <div className="cafe-container">
      <div className="cafe-arc">
        <img
          src={CafeCupSplash}
          alt="Copo de Café com Splash e Grãos"
          className="cafe-cup"
        />
      </div>

      <div className="cafe-title-container">
        <img
          src={GuiaTitulo}
          alt="Guia de Visita Perfeita na Miauteria"
          className="cafe-title-image"
        />
        <p className="cafe-paragraph">
          Bem-vindo(a) à Miauteria! Criamos este guia com dicas para uma
          experiência incrível para você, segura e feliz para nossos gatinhos.
        </p>
      </div>
    </div>
  );
}

export default Cafe;
