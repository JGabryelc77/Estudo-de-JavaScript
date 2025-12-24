/*
const numeros = [1,2,3,4,5,6,7,8,9,10]

const pares = numeros.filter(numero => {
  return numero % 2 === 0 
})

console.log(pares)
 */

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

// FILTRAR SOMENTE OS PRODUTOS EM PROMOÇÃO

const promocao = produtos.filter(produto => produto.temDesconto)

console.log(promocao)