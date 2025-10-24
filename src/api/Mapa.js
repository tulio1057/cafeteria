import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importa o CSS do Leaflet

// O Leaflet precisa de uma configuração extra para os ícones
// em ambientes como o React, especialmente se usar o Webpack/Vite.
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Corrige o problema de caminhos dos ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// 1. Defina as coordenadas do local
const localizacao = [-10.923210594237144, -37.06710499898084]; // [Latitude, Longitude] - Exemplo: São Paulo

function OSMMapComponent() {
  return (
    // 2. MapContainer: Define o centro e o zoom inicial
    <MapContainer
      center={localizacao}
      zoom={20}
      scrollWheelZoom={false} // Desabilita o zoom com a rodinha do mouse
      style={{ height: "500px", width: "100%" }} // Estilo obrigatório
    >
      {/* 3. TileLayer: Define a camada de mapa (os "tiles" visuais). 
          Aqui usamos o OpenStreetMap padrão. */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* 4. Marker: Adiciona um marcador na localização */}
      <Marker position={localizacao}>
        {/* 5. Popup: Adiciona uma caixa de informação que aparece ao clicar no marcador */}
        <Popup>
          Venha nos visitar! <br /> Você não vai se arrepender.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default OSMMapComponent;
