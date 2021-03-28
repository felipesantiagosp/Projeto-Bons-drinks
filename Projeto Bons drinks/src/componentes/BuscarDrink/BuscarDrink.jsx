import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function BuscarDrink() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <section className="cabecalho">
        <h1 className="tituloDrink">Drinks</h1>
        <div className="divBotao">
          <button className="botoes">Drinks Populares</button>
          <button className="botoes">Buscar Drinks</button>
        </div>
      </section>
    </div>
  );
}
