import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Corrigido para minúsculas para corresponder ao disco do usuário
import Home from "./components/home";
import Sobre from "./components/sobre";
import Contato from "./components/contato";
import Navbar from "./components/navbar";
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
