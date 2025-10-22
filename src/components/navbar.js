import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo da Cafeteria" className="logo-img" />
        <h1 className="logo-text">CAFETERIA</h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;