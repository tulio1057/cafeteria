import React from "react";
import MenuItem from "./MenuItem";
import CardapioTitulo from "../assets/cardapio-titulo.png";
import { menuSections } from "../data/menuData";
import "./../styles/Menu.css";

const handleMenuDigitalClick = () => {
  window.open(
    "https://l.instagram.com/?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1_YR0UMe1Tsk4EPC57p6u68wufhmeClzV%2Fview%3Fusp%3Dsharing%26fbclid%3DPAZXh0bgNhZW0CMTEAAafvanum1Fefzo0D8gnmYfUTQR4V7WYRNa2jwuyIUtLTDpe8cbHh7UG0OLil2g_aem_iqYa5DzFdQ9iLcQkmwLMIg&e=AT3Jp91ehR2-THRYKthaUzEG_jCVuu-XpOfnkY9EwHtG30XSsj513BWRLEP7nqXQr5adMy5S3FkqZkQO6j67k76bS83lDPIuAE1Y-uQDiQ",
    "_blank",
    "noopener,noreferrer"
  );
};

function Menu() {
  return (
    <div className="menu-container">
      <div className="titulo-cardapio-container">
        <img
          src={CardapioTitulo}
          alt="O Cardápio"
          className="titulo-cardapio-imagem"
        />
      </div>

      <div className="coffee-grid">
        {Array.isArray(menuSections) &&
          menuSections.map((section, index) => (
            <section key={index} className={section.id}>
              <div className={index % 2 === 0 ? "left" : "right"}>
                <h2 className="card-title">{section.title}</h2>
                <ul className="card-list">
                  {Array.isArray(section.data) &&
                    section.data.map((item, itemIndex) => (
                      <MenuItem
                        key={itemIndex}
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                      />
                    ))}
                </ul>
              </div>
            </section>
          ))}
      </div>

      <p className="pdf">
        <button
          type="button"
          className="pdf-btn"
          onClick={handleMenuDigitalClick}
        >
          Menu digital
        </button>
      </p>
    </div>
  );
}

export default Menu;
