import React from "react";
import "./style.css";

export default function ConteudoDrinks({
  nomeDrink,
  categoriaDrink,
  copoDrink,
  ibaDrink,
  ingredienteDrink,
  instrucoesDrink,
}) {
  return (
    <ul className="ulConteudo">
      <li className="ilConteudo">
        <h4>Nome:</h4> <p> {nomeDrink}</p>
      </li>
      <li className="ilConteudo">
        <h4>Categoria:</h4>
        <p> {categoriaDrink}</p>
      </li>
      <li className="ilConteudo">
        <h4>Copo:</h4>
        <p> {copoDrink}</p>
      </li>
      <li className="ilConteudo">
        <h4>IBA:</h4>
        <p> {ibaDrink}</p>
      </li>
      <li className="ilConteudo">
        <h4>Ingredientes:</h4>
        <p> {ingredienteDrink}</p>
      </li>
      <li className="ilConteudo">
        <h4>Instruções:</h4>
        <p> {instrucoesDrink}</p>
      </li>
    </ul>
  );
}
