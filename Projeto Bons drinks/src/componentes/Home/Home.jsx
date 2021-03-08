import React, { Component } from "react";
import Header from "../Header";
import Rodape from "../Rodape";
import ImagemHome from "../../assets/home.jpg";
import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="divmae">
        <Header />
        <div className="divImagHome">
          <h1 className="bonsDrinksheader">Bons Drinks</h1>
        </div>
        <Rodape />
      </div>
    );
  }
}
