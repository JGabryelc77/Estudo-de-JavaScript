/*const numeros = [1,2,3,4,5]

const dobro = numeros.map((numero, index, arrayCompleto) => {
    return numero * 4
})

console.log(dobro)*/

const produtos = [
  { id: 1, nome: "Galaxy A3", preco: 2599.99, temDesconto: true, quantidade: 1 },
  { id: 2, nome: "iPhone 11", preco: 3899.90, temDesconto: false, quantidade: 2 },
  { id: 3, nome: "Redmi Note 12", preco: 1499.99, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Motorola G54", preco: 1799.00, temDesconto: false, quantidade: 3 },
  { id: 5, nome: "Galaxy S21", preco: 3299.50, temDesconto: true, quantidade: 1 },
  { id: 6, nome: "iPhone XR", preco: 2999.99, temDesconto: false, quantidade: 4 },
  { id: 7, nome: "Poco X5", preco: 1699.90, temDesconto: true, quantidade: 6 },
  { id: 8, nome: "Galaxy A14", preco: 999.99, temDesconto: true, quantidade: 10 },
  { id: 9, nome: "Motorola Edge 30", preco: 2499.00, temDesconto: false, quantidade: 2 },
  { id: 10, nome: "iPhone 13", preco: 4599.90, temDesconto: true, quantidade: 1 }
];

/*Quero colocar R$ em todos os valores */

const novosProdutos = produtos.map(produto => {
    //Ternário de if e else - ? = if / : = else
    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
        quantidade: produto.quantidade
    }
})

console.log(novosProdutos)