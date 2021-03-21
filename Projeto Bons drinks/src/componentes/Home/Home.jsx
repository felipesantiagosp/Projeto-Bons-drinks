import React, { Component } from "react";
import Header from "../Header";
import Rodape from "../Rodape";
import "./style.css";

function Home() {
  
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
export default Home
