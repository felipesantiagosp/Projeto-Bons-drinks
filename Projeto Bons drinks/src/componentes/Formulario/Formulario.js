import React, { Component, useState } from "react";
import imagemContato from "../../assets/contato.jpg";
import Botao from "../Botao/Botao";
import Header from "../Header";
import Rodape from "../Rodape";
import "./style.css";
import Input from "../Input/Input";

export default function Formulario({titulo}) {
  const [texto, setTexto] = useState("Enviar");

  function handleClick() {
    setTexto("Enviando");
    setTimeout(() => {
      setTexto("Enviar");
    }, 3000);
  }
  return (
    <div className="divmae">
      <Header />
      <h1 className="titulocontato">{titulo}</h1>
      <section className="principal">
        <div className="div2">
          <img className="imag1" src={imagemContato} width="433px" />
        </div>
        <div className="div1">
          <div className="divForms">
            <form className="formulario">
              <Input legendaTexto="Mensagem:" />
              <Botao
                type="submit"
                texto={texto}
                aoClicar={handleClick}
                className="botaoForms"
              />
            </form>
          </div>
        </div>
      </section>
      <Rodape />
    </div>
  );
}
