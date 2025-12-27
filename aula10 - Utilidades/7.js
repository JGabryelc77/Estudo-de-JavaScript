// REMOVER VALORES FALSOS DE UM ARRAY
const lista = [0, null, undefined, "", "JS", 42, false];

const limpa = lista.filter(Boolean);

console.log(limpa);
// Resultado: ["JS", 42]