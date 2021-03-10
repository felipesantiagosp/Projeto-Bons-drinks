import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  
    return (
      <header className="cabeca">
        <ul className="menu">
          <li>
            <Link className="headerMenu" to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link className="headerMenu" to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link  className="headerprincipal" to="/">Bons Drinks</Link>
          </li>
          <li>
            <Link  className="headerMenu" to="/Nosso-Time">Nosso Time</Link>
          </li>
          <li>
            <Link  className="headerMenu" to="/contato">Contato</Link>
          </li>
        </ul>
      </header>
    );
  }

export default Header