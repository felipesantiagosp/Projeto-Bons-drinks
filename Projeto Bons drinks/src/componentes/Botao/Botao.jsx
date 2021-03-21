import React, { Component } from "react";

function Botao({type, texto, aoClicar}) {

  return (
    <button
      onClick={(event)=>{
        event.preventDefault()
        aoClicar()

        }}
      type={type}
      className="botao1"
      value="enviar"
    >
      {texto}
    </button>
  );
}

export default Botao;
