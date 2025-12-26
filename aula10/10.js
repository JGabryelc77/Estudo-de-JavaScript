// EVITAR MUTAR DADOS (IMUTABILIDADE)
const usuario = { nome: "Gabryel", idade: 21 };

// CRIA UM NOVO OBJETO SEM ALTERAR O ORIGINAL
const usuarioAtualizado = {
    ...usuario,
    idade: 22
};

console.log(usuario);
console.log(usuarioAtualizado);