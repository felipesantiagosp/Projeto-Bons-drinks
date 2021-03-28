import React from "react";
import Header from "../Header";
import Rodape from "../Rodape";
import logo from "../../assets/logo.png";
import drink from "../../assets/drink.png";
import "./estilo.css"

export default function SobreNos() {
  return (
    <div className="divmae">
      <Header />
      <section className="diplaySobre">
        <h1 className="tituloSobreNos">Sobre Nós</h1>
        <div className="conteudoSobreNos">
          <img className="fotoDrink" src={drink} alt="" width="150px" />
          <p className="paragSobre">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
            et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut
            adipiscing.
          </p>
        </div>
      </section>
      <Rodape />
    </div>
  );
}
