// OBJETO COM DADOS DA PESSOA
const pessoa = {
    nome: 'Gabryel',
    idade: 20,
    sexo: 'Masculino',
    cidade: 'Brasília',
    estado: 'DF'
};

// FORMA MAIS COMPLICADA DE SEPARAR DADOS
const nome = pessoa.nome;
const idade = pessoa.idade;
console.log(nome, idade);

// FORMA MAIS SIMPLES (DESESTRUTURAÇÃO)
const { nome, sexo } = pessoa;
console.log(nome, sexo);

// RENOMEANDO VARIÁVEIS NA DESESTRUTURAÇÃO
const { nome: nomeTeste, cidade: cidadeTeste } = pessoa;
console.log(nomeTeste, cidadeTeste);