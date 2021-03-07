import React, { Component } from "react";

export default class Botao extends Component {
  constructor(props) {
    super(props);
    /* this.textoBotao = props.texto; */
    this.state = {
      value: "x",
      action: "Enviado",
    };
    this.state.value = props.texto;
  }
  _handleEnviado(event) {
    event.preventDefault();
    this.setState({ value: "Enviado" });
    
    setTimeout(() => {
      this.setState({value:"Enviar"})
    }, 3000);



  }
  render() {
    return (
      <button
        onClick={this._handleEnviado.bind(this)}
        className="botao1"
        value="enviar"
      >
        {this.state.value}
      </button>
    );
  }
}
