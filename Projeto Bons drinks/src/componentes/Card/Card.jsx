import React from "react";
import "./Style.css";

export default function Card({ url, noClick, titulo }) {
  return (
    <div className="div-mae-card">
      <div className="card">
        <img onClick={()=>{
            return noClick
        }} className="imagem-card" src={url} />
        <h3>{titulo}</h3>
      </div>
    </div>
  );
}
