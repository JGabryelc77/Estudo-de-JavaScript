const usuario = {
    nome: 'Alexandre',
    idade: 28,
    cidade: "São paulo"
}

// usuario.nome -> Alexandre
// usuario['nome'] -> Alexandre

for(let key in usuario){
    console.log(`${key} : ${usuario[key]}`)
}