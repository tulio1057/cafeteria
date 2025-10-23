import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route
            path="/"
            element={
              <>
                <Home />
                <Menu />
              </>
            }
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
