import { React, useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header";
import Rodape from "../Rodape";
import "./style.css";
import { requisicao } from "../../Model/Url";
import ConteudoDrinks from "../ConteudoDrinks/ConteudoDrinks";
import {
  Link,
  useRouteMatch,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import BuscarDrink from "../BuscarDrink/BuscarDrink";

export default function Api() {
  let { url, path } = useRouteMatch();

  let [dadosApi, setDadosApi] = useState("Enviar");
  let [dadosApiConteudo, setDadosApiConteudo] = useState(0);

  let render = [
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[0].strDrink}
      categoriaDrink={dadosApi[0].strCategory}
      copoDrink={dadosApi[0].strGlass}
      ibaDrink={dadosApi[0].strIBA}
      ingredienteDrink={dadosApi[0].strIngredient1}
      instrucoesDrink={dadosApi[0].strInstructions}
    />,
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[1].strDrink}
      categoriaDrink={dadosApi[1].strCategory}
      copoDrink={dadosApi[1].strGlass}
      ibaDrink={dadosApi[1].strIBA}
      ingredienteDrink={[dadosApi[1].strIngredient1]}
      instrucoesDrink={dadosApi[1].strInstructions}
    />,
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[2].strDrink}
      categoriaDrink={dadosApi[2].strCategory}
      copoDrink={dadosApi[2].strGlass}
      ibaDrink={dadosApi[2].strIBA}
      ingredienteDrink={[dadosApi[2].strIngredient1]}
      instrucoesDrink={dadosApi[2].strInstructions}
    />,
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[3].strDrink}
      categoriaDrink={dadosApi[3].strCategory}
      copoDrink={dadosApi[3].strGlass}
      ibaDrink={dadosApi[3].strIBA}
      ingredienteDrink={[dadosApi[3].strIngredient1]}
      instrucoesDrink={dadosApi[3].strInstructions}
    />,
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[4].strDrink}
      categoriaDrink={dadosApi[4].strCategory}
      copoDrink={dadosApi[4].strGlass}
      ibaDrink={dadosApi[4].strIBA}
      ingredienteDrink={dadosApi[4].strIngredient1}
      instrucoesDrink={dadosApi[4].strInstructions}
    />,
    <ConteudoDrinks
      className="conteudoDrinks"
      nomeDrink={dadosApi[5].strDrink}
      categoriaDrink={dadosApi[5].strCategory}
      copoDrink={dadosApi[5].strGlass}
      ibaDrink={dadosApi[5].strIBA}
      ingredienteDrink={[dadosApi[5].strIngredient1]}
      instrucoesDrink={dadosApi[5].strInstructions}
    />,
  ];

  function dadosCategoria(number) {
    console.log();
    return render[number];
  }

  function card1() {
    setDadosApi(dadosApi);
    setDadosApiConteudo(0);
    console.log(dadosApi);
  }
  function card2() {
    setDadosApi(dadosApi);
    setDadosApiConteudo(1);
    console.log(dadosApi);
  }

  useEffect(async () => {
    const req = await requisicao();
    setDadosApi(req);
    console.log(req)
  }, []);

  let arrayQuant = [card1, card2, "card3", "card4", "card5", "card6"];

  return (
    <div className="divmae">
      <Header />
      <div className="alinhamentoApi"></div>
      <ul className="flex-api">
        <section className="cabecalho">
          <h1 className="tituloDrink">Drinks</h1>
          <div className="divBotao">
            <Link to={`${url}`}>
              <button className="botoes">Drinks Populares</button>
            </Link>
            <Link to="buscarDrink/">
              <button className="botoes">Buscar Drinks</button>
            </Link>
          </div>
        </section>
        <section className="secaoBebidas">
          {arrayQuant.map((valor, index) => {
            return (
              <li>
                <Card noClick={valor} url={dadosApi[index].strDrinkThumb} />
              </li>
            );
          })}
        </section>
        <section className="conteudoDrinks">
          {dadosCategoria(dadosApiConteudo)}
        </section>
        <section className="imgApiSecao">
          <img className="imgApi" src={dadosApi[2].strDrinkThumb} />
        </section>
      </ul>
      <Rodape />
    </div>
  );
}
