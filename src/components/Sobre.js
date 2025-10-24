import Galeria from "./Galeria";
import "../styles/sobre.css";
import Residentes from "../assets/residentes.webp"

// A lista estática de gatinhos foi removida, pois o componente Galeria
// já carrega dados dinamicamente da The Cat API.

function Sobre() {
  return (
    <main className="sobre-container">
      <header className="sobre-header">
        <div className="tamanho">
        <img src={Residentes} alt="Titulo"/>
        </div>
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
