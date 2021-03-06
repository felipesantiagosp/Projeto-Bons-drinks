import React, { Component } from "react";
import imagemContato from "../../assets/contato.jpg";
import "./style.css"

export default class Formulario extends Component {
  constructor(props){
    super(props)
    this.botao = "Enviar"
  }

 
  render() {
    return (
      <div className="divmae">
        <h1 className="titulocontato">Contato</h1>
        <section className="principal">
          <div className="div2">
            <img className="imag1" src={imagemContato} width="433px" />
          </div>
          <div className="div1">
            <div className="divForms">
              <form className="formulario">
                <div className="inputs">
                  <div className="inputDisplay">
                    <label>Nome:</label>
                    <input
                      className="inputName configinput"
                      type="text"
                      placeholder="Nome"
                    ></input>
                  </div>
                  <div className="inputDisplay">
                    <label>Email:</label>
                    <input
                      className="inputEmail configinput"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className="inputDisplay">
                    <label>Mensagem:</label>
                    <textarea
                      className="inputText configinput"
                      placeholder="Escreva aqui sua mensagem"
                    ></textarea>
                  </div>
                </div>
                <button
                  className="botao1"

                >
                 Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
