import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Logo.png";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo + título */}
      <div className="logo-container">
        <img src={logo} alt="Logo da Cafeteria" className="logo-img" />
        <h1 className="logo-text">Miauteria</h1>
      </div>

      {/* Ícone hambúrguer (mobile) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Links de navegação */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <div className="nav-action">
            <Button />
          </div>
        </li>
        <li>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Cardápio
          </Link>
        </li>
        <li>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>
            Residentes
          </Link>
        </li>
        <li>
          <Link to="/contato" onClick={() => setMenuOpen(false)}>
            Contato
          </Link>
        </li>
        <li>
          <Link to="/localizacao" onClick={() => setMenuOpen(false)}>
            Localização
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
