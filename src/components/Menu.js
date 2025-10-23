import "../styles/Menu.css";

const cafesQuentes = [
  {
    nome: "ESPRESSO",
    descricao: "Café espresso (30ml).",
    preco: "R$ 7,00",
  },
  {
    nome: "CARIOCA",
    descricao: "Café espresso (30ml), completado com água quente (150ml).",
    preco: "R$ 7,00",
  },
  {
    nome: "DOPPIO",
    descricao: "Duas extrações de espresso em uma única xícara (60ml).",
    preco: "R$ 12,00",
  },
  {
    nome: "MACCHIATO",
    descricao: "Espresso completado com a crema do leite (80ml).",
    preco: "R$ 9,00",
  },
  {
    nome: "DULCE MACCHIATO",
    descricao: "Espresso completado com crema do leite e doce de leite (80ml).",
    preco: "R$ 11,00",
  },
  {
    nome: "CAFÉ COADO",
    descricao: "Extraído de forma artesanal, notas aromáticas especiais.",
    preco: "R$ 15,00",
  },
];

const cafesGelados = [
  {
    nome: "MOCHA GELADO",
    descricao: "Sorvete de creme, ovomaltine, espresso e chantilly (300ml).",
    preco: "R$ 25,00",
  },
  {
    nome: "AFFOGATO",
    descricao: "2 bolas de sorvete, flor de chantilly, cacau em pó por cima.",
    preco: "R$ 23,00",
  },
  {
    nome: "COLDBREW",
    descricao: "Café gelado infusionado por 24h (200ml).",
    preco: "R$ 20,00",
  },
  {
    nome: "COLDBREW TANGERINA",
    descricao: "Café gelado com xarope de tangerina e hortelã (300ml).",
    preco: "R$ 25,00",
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="titulo">O Café</h1>

      <div className="coffee-grid">
        <section className="card left">
          <h2 className="card-title">Cafés quentes</h2>
          <ul className="card-list">
            {cafesQuentes.map((c, i) => (
              <li key={i}>
                <div className="item-row">
                  <span className="item-name">{c.nome}</span>
                  <span className="item-price">{c.preco}</span>
                </div>
                <div className="item-desc">{c.descricao}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="card right">
          <h2 className="card-title">Cafés gelados</h2>
          <ul className="card-list">
            {cafesGelados.map((c, i) => (
              <li key={i}>
                <div className="item-row">
                  <span className="item-name">{c.nome}</span>
                  <span className="item-price">{c.preco}</span>
                </div>
                <div className="item-desc">{c.descricao}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="pdf">
        <button
          type="button"
          className="pdf-btn"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1_YR0UMe1Tsk4EPC57p6u68wufhmeClzV/view?fbclid=PAZXh0bgNhZW0CMTEAAaetNe7c-cEnnk1x6FAPDHVJRMf-o6-uNR0zpj8MYPFHiuHk7S22Fnt-SYy2Qg_aem_62_xY_2l5rmX97D-StgwwQ",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Menu digital
        </button>
      </p>
    </div>
  );
};

export default Menu;
