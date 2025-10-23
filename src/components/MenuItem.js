import React from "react";

const MenuItem = ({ nome, descricao, preco }) => {
  return (
    <li>
      <div className="item-row">
        <span className="item-name">{nome}</span>
        <span className="item-price">{preco}</span>
      </div>
      <div className="item-desc">{descricao}</div>
    </li>
  );
};

export default MenuItem;
