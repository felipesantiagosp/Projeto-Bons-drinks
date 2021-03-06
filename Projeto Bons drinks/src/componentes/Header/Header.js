import React, { Component } from 'react'
import "./style.css"

export default class Header extends Component {
    render() {

        return (
            <header className = "cabeca">
                <ul className = "menu">
                    <li>Drinks</li>
                    <li>Sobre</li>
                    <li>Bons Drinks</li>
                    <li>Nosso Time</li>
                    <li>Contato</li>
                </ul>
            </header>
        )
    }
}
