import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // <-- Importação do ToastContainer
import "react-toastify/dist/ReactToastify.css"; // <-- Importação dos estilos CSS

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Localizaçao from "./components/Localizacao";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/localizacao" element={<Localizaçao />} />
        </Routes>
        <Footer />
      </Router>

      {/* Adicione o ToastContainer no final do componente raiz (fora do Router, mas dentro do 'App') */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
