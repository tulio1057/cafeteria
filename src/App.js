import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Corrigido para capitalização correta (PascalCase) após renomeação dos arquivos
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Rota principal corrigida */}
          <Route path="/" element={<Home />} />

          {/* Nova rota para o Menu */}
          <Route path="/menu" element={<Menu />} />

          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
