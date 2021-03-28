import React from 'react'
import Header from '../Header'
import Rodape from '../Rodape'
import fotoMinha from "../../assets/fotoEu.jpg"
import "./style.css"

export default function NossoTime() {
    return (
        <div className="divmae">
            <Header/>
            <section className="meuTime">
                <h1 className="tituloMeuNome">
                    Felipe Santiago
                </h1>
                <img className="fotoMinha" src={fotoMinha} width="300px" alt="Uma foto minha"/>
                <p className="paragEquipe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
            </section>
            <Rodape/>
        </div>
    )
}
