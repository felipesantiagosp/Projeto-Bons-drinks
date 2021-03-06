import React, { Component } from 'react'
import "./style.css"

export default class Rodape extends Component {
    render() {
        const rodape = {
                        height: "40px",
                        fontSize: "18px", 
                        fontWeight: "bold", 
                        position: "fixed",
                        bottom: "0",
                        backgroundColor: "#FFFBEF"

                       }
        

        return (
            <footer className = "peStilo">
                <p className="pezinho">Resilia 2020 - Alguns direitos reservados</p> 
            </footer>
        )
    }
}
