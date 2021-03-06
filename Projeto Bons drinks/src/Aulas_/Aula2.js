import React, { Component } from 'react'

export default class Aula2 extends Component {
    render() {
        const luana = {
            cliente: 'Luana',
            idade: 27,
            compras: [
              { nome: 'Notebook', preco: '2500' },
              { nome: 'Geladeira', preco: '3000' },
              { nome: 'Smartphone', preco: '1500' },
            ],
            ativa: true,
          };
          
          const mario = {
            cliente: 'Mario',
            idade: 31,
            compras: [
              { nome: 'Notebook', preco: '2500' },
              { nome: 'Geladeira', preco: '3000' },
              { nome: 'Smartphone', preco: '1500' },
              { nome: 'Guitarra', preco: '3500' },
            ],
            ativa: false,
          };
          const pegarProduto = cliente => cliente.compras;
          const produtosLuana = pegarProduto(luana);
          const precosLuana = produtosLuana.map(arr => arr.preco)
          const precos = precosLuana.map(numero => parseInt(numero));
          const soma = precos.reduce((acum, atual) => {
            return acum + atual
          })
        
        return (
            <div>
                <h1>Devedor:</h1>
                <ul>
                    <li>Nome do cliente: {luana.cliente}</li>
                    <li>Idade do cliente: {luana.idade}</li>
                    <li style={{color: soma > 10000 ? 'red' : "green"}}>preco total: {soma}</li>
                </ul>
            </div>
        )
    }
}

//o render desenha na tela