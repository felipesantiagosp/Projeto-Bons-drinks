import React, { Component } from "react";
import "../Formulario/style.css";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.legendaNome = props.legendaNome;
    this.legendaEmail = props.legendaEmail;
    this.legendaTexto = props.legendaTexto;
  }

  render() {
    return (
      <div>
        <div className="inputDisplay">
          <label className="legendaInput">{this.legendaNome}</label>
          <input
            className="inputName configinput"
            type="text"
            placeholder={this.legendaNome}
          ></input>
        </div>
        <div className="inputDisplay">
          <label className="legendaInput">{this.legendaEmail}</label>
          <input
            className="inputEmail configinput"
            type="email"
            placeholder={this.legendaEmail}
          ></input>
        </div>
        <div className="inputDisplay">
          <label className="legendaInput">{this.legendaTexto}</label>
          <textarea
            className="inputText configinput"
            placeholder="Escreva aqui sua mensagem"
          ></textarea>
        </div>
      </div>
    );
  }
}
