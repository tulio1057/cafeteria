import React from "react";
import MenuItem from "./MenuItem";
import CardapioTitulo from "../assets/cardapio-titulo.png";
import { menuSections } from "../data/menuData";
import "./../styles/Menu.css";

const handleMenuDigitalClick = () => {
  window.open(
    "https://drive.google.com/file/d/1_VkHjWMsT5KdEPCS7Qzdu6bwPoneClzv/view?usp=sharing",
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
