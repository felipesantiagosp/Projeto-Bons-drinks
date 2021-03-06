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

/*   const precos = mario.map(pegarProduto).map(pegarPreco);
 */  
const produtosLuana = pegarProduto(luana);
const precosLuana = produtosLuana.map(arr => arr.preco)
const precos = precosLuana.map(numero => parseInt(numero));
const soma = precos.reduce((acum, atual) => {
  return acum + atual
})
console.log(soma);