import { React, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Header from "../Header/Header";
import Rodape from "../Rodape/Rodape";
import "./style.css";
import { requisicaoBuscar } from "../../Model/Url";
import logo from "../../assets/logo.png"
export default function Teste() {
  let { url } = useRouteMatch();
  const [nomeBebida, setNomeBebida] = useState("");
  const [nomeEncontado, setNomeEncontrado] = useState("Titulo Bebida");
  const [imagem, setImagem] = useState(
    logo
  );
  const [descricao, setDescricao] = useState("");

  const req = requisicaoBuscar(nomeBebida);

  /*     useEffect(async () => {
    const req = await requisicaoBuscar(nomeBebida);
    console.log(req[0]);
  }, []); */

  return (
    <div className="divmae">
      <Header />
      <div className="alinhamentoApi"></div>
      <ul className="flex-api">
        <section className="cabecalho">
          <h1 className="tituloDrink">Drinks</h1>
          <div className="divBotao">
            <Link to="../DrinksPopulares">
              <button className="botoes">Drinks Populares</button>
            </Link>
            <Link to={url}>
              <button className="botoes">Buscar Drinks</button>
            </Link>
          </div>
        </section>
        <section className="corpo-buscarBebida">
          <div className="buscar-bebida">
            <input
              className="inputBuscar"
              type="text"
              placeholder="Buscar Drink"
              onBlur={(e) => {
                setNomeBebida(e.target.value);
                const drinkBebida = e.target.value;
              }}
            ></input>
            <button
              onClick={async () => {
                const requisicao = await requisicaoBuscar(nomeBebida);
                setNomeEncontrado(requisicao[0].strDrink);
                setImagem(requisicao[0].strDrinkThumb);
                setDescricao(requisicao[0].strInstructions);
                console.log(requisicao);
              }}
              className="botaoBuscar"
            >
              Buscar 🔍
            </button>
          </div>
          <div className="infoDrink">
            <h1 className="tituloDrinks">{nomeEncontado}</h1>
            <img
              src={imagem}
              className="estiloImg"
              alt="Imagem da bebida escolhida"
              width="150px"
            />
            <p>{descricao}</p>
          </div>
        </section>
      </ul>
      <Rodape />
    </div>
  );
}
