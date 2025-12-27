// OBJETO COM DADOS DO USUÁRIO
const usuario = {
    nome: 'Gabryel',
    idade: 20,
    endereco: {
        complemento: {
            rua: 'AAAAAA',
            numero: 10
        }
    }
};

// ACESSO NORMAL (PODE QUEBRAR SE A PROPRIEDADE NÃO EXISTIR)
console.log(usuario.endereco.complemento.rua);

// ACESSO SEGURO COM OPTIONAL CHAINING (?.)
console.log(usuario?.endereco?.complemento?.rua);


// VARIÁVEL USADA COMO CHAVE DO OBJETO
const chave = "nome";

// USANDO CHAVE DINÂMICA COM COLCHETES
const pessoa = {
    [chave]: "Gabryel"
};

console.log(pessoa);

/*
Quando o valor é uma variável, basta usar normalmente.
Quando a chave for uma variável, é obrigatório usar colchetes.
*/