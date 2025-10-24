import Localizacao from "../api/Mapa";
import "../styles/Local.css";

function Mapa() {
  return (
    <div className="localizacao-page">
      <h1>Nossa Localização</h1>
      <div className="mapa-container">
        <Localizacao />
      </div>
    </div>
  );
}
    
export default Mapa;
