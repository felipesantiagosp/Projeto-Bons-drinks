import React, { Component } from "react";
import "../Input/style.css"
import Inputs from "../Inputs/Inputs";

export default function Input(props) {
  return (
    <div>
      <div className="inputDisplay">
        <Inputs titulo="Nome:" tipoInput="text" />
      </div>
      <div className="inputDisplay" tipoInput="email">
        <Inputs titulo="Email:" tipoInput="text-area" />
      </div>
      <div className="inputDisplay">
        <label className="legendaInput">{props.legendaTexto}</label>
        <textarea className="inputText"></textarea>
      </div>
    </div>
  );
}
