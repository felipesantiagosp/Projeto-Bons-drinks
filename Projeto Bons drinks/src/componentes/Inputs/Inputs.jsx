import React from "react";
import "./style.css"

export default function Inputs(props) {
  return (
    <div className="inputsDisplay">
      <label className="labelEspacamento">{props.titulo}</label>
      <input type={props.tipoInput} className="inputEspacamento"></input>
    </div>
  );
}
