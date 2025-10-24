import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Logo.png";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo da Cafeteria" className="logo-img" />
        <h1 className="logo-text">Miauteria</h1>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
          <div className="nav-action">
            <Button />
          </div>
        </li>
        <li>
          <Link to="/menu">Cardápio</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;