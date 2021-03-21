import React, { Component } from "react";
import "../Input/style.css";
import Inputs from "../Inputs/Inputs";

export default function Input({legendaTexto}) {
  return (
    <div>
      <div className="inputDisplay">
        <Inputs titulo="Nome:" tipoInput="text" focando={true} />
      </div>
      <div className="inputDisplay" tipoInput="email">
        <Inputs titulo="Email:" tipoInput="text-area" />
      </div>
      <div className="inputDisplay">
        <label className="legendaInput">{legendaTexto}</label>
        <textarea className="inputText"></textarea>
      </div>
    </div>
  );
}
