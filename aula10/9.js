// GERAR NÚMERO ALEATÓRIO
console.log(Math.random()); // Gera número entre 0 e 1

// GERAR NÚMERO ALEATÓRIO ENTRE MIN E MAX
function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(gerarNumero(100, 500));
