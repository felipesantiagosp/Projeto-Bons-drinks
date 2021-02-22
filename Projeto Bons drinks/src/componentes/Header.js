import React, { Component } from 'react'

export default class Header extends Component {
    render() {

        const cabeca = {
            height: "60px", 
            fontSize: "24px", 
            fontWeight: "bold",
            backgroundColor: "#FFFBEF"
            
        }
        return (
            <header style = {cabeca}>
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
