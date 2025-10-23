// src/components/Menu.js
import React from "react";
import MenuItem from "./MenuItem";
// Caminho corrigido: o arquivo menuData.js está em src/data, então o caminho é ../data/menuData
import { menuSections } from "../data/menuData";
import "../styles/Menu.css";

const Menu = () => {
  const handleMenuDigitalClick = () => {
    window.open(
      "https://drive.google.com/file/d/1_YR0UMe1Tsk4EPC57p6u68wufhmeClzV/view?fbclid=PAZXh0bgNhZW0CMTEAAaetNe7c-cEnnk1x6FAPDHVJRMf-o6-uNR0zpj8MYPFHiuHk7S22Fnt-SYy2Qg_aem_62_xY_2l5rmX97D-StgwwQ",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="menu-container">
      <h1 className="titulo">O Cardápio</h1>

      <div className="coffee-grid">
        {menuSections.map((section, index) => (
          <section
            key={index}
            className={`card section-${index % 2 === 0 ? "left" : "right"}`}
          >
            <h2 className="card-title">{section.title}</h2>
            <ul className="card-list">
              {section.data.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  nome={item.nome}
                  descricao={item.descricao}
                  preco={item.preco}
                />
              ))}
            </ul>
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
};

export default Menu;
