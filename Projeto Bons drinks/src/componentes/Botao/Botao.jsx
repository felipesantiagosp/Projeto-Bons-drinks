import React, { Component } from "react";
import { useState } from "react";

function Botao(props) {
  const [texto, setTexto] = useState("Enviar");

  function handleClick(event) {
    event.preventDefault();
    setTexto("Enviado");
    setTimeout(() => {
      setTexto("Enviar");
    }, 3000);
  }
  return (
    <button onClick={handleClick} className="botao1" value="enviar">
      {texto}
    </button>
  );
}

export default Botao;
