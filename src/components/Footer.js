import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h4>Cafeteria</h4>
          <p>Delícias e aromas todos os dias.</p>
        </div>
        <nav className="footer-nav">
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
          <a href="/cardapio">Cardápio</a>
        </nav>
        <div className="footer-contact">
          <p>Email: contato@cafeteria.com</p>
          <p>Tel: (00) 0000-0000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© {year} Cafeteria. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
