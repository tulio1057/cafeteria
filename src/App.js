import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Sobre from "./components/sobre";
import Contato from "./components/contato";
import Navbar from "./components/navbar";
import './styles/App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
