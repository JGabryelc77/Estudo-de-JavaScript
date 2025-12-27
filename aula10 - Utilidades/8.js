// ARRAY COM VALORES REPETIDOS
const numeros = [1, 1, 9, 5, 6, 5, 6, 3, 3, 4, 2, 1];

// SET NÃO PERMITE VALORES REPETIDOS
const newArray = [...new Set(numeros)];

console.log(newArray);