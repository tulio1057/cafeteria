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
          <a href="/sobre">Residentes</a>
          <a href="/contato">Contato</a>
          <a href="/menu">Cardápio</a>
          <a href="/localizacao">Localização</a>
        </nav>
        <div className="footer-contact">
          <p>Email: jejejessicamaria@gmailcom</p>
          <p>Tel: (79) 98126-7894</p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© {year} Cafeteria. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
