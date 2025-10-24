import Localizacao from "../api/Mapa";
import "../styles/Local.css";
import Loc from "../assets/localizacao.webp"

function Mapa() {
  return (
    <div className="localizacao-page">
       <img src={Loc} alt="localizacao"/>
      <div className="mapa-container">
        <Localizacao />
      </div>
    </div>
  );
}
    
export default Mapa;
