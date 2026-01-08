/* O que são variáveis?
São com recipientes que podemos armazenar informações que podem
variar, tendo qualquer tipo de valor.
JAVASCRIPT tem três tipos:

VAR
podemos reatribuir valores

LET
não podemos reatribuir valores

CONST
não podemos reatribuir valores
*/

//Exemplo de criação de variável
var pote = "Valor";
alert(pote);

//Forma desorganizada Ex 1
var a = 1;
var b = 2;
var c = a + b;
alert(c);

//Forma organizada Ex 1
var a, b, c; //Criação das variáveis

a = 1; //Atribuição dos valores
b = 2;
c = a + b;




var nome, sobrenome, nomeCompleto;
nome = "Gabryel";
sobrenome = "Cardoso";
nomeCompleto = nome + " " + sobrenome;
document.getElementById("texto").innerHTML = nomeCompleto;