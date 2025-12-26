// SEPARAR APENAS NOME E EMAIL, DEFININDO VALOR PADRÃO
const user = {
    name: data.user.name ?? 'Anônimo',
    age: data.user.age,
    email: data.user.email,
};

/*
??  Executa o valor da direita se o da esquerda for null ou undefined
&&  Executa o valor da direita se o da esquerda for verdadeiro
*/