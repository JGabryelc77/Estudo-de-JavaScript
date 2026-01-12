/* Operadores Js:
São os sinais que usamos durante o a criação do código
São usados para:
• Atribuir valores, comparar valores, executar aritméticas e muito mais.

Sinais mais usados:
+ - * 
++ -- += -= &&

Categorias:
1) Operadores aritméticos (matemáticos)
2) Operadores de atribuição (Ex: x = 5; / n1 += n2; / n1 -= n2;)
3) Operadores de sequência
4) Operadores de comparação
5) Operadores Condicional (Ternário)
6) Operadores lógicos

*/

let a, b, total
a = 10;
b = 10;
soma = a + b;
mult = a * b;
subt = a - b;
divis = a / b;

console.log(soma)
console.log(mult)
console.log(subt)
console.log(divis)
console.log("***************")

//incremento
totaSoma = ++a;
console.log(totaSoma);
console.log(`o valor total é: `+totaSoma); //Operador de sequência

//decremento
totalMenos = --b;
console.log(totalMenos)
console.log(`o valor total é: `+totalMenos);


//Concatenação

let texto1, texto2, juntos;
texto1 = "Gabryel"
texto2 = "Cardoso"

juntos = texto1 + texto2;
console.log(juntos)


//Operadores de comparação TRUE OU FALSE
let val1, val2, igual;
val1 = 2;
val2 = "2";

//"===" Compara o tipo e o valor
//a !== b => A é DIFERENTE o valor e o tipo de b ?
//< menor / > maior / <= menor ou igual / >= maior ou igual
igual = (val1 === val2);
console.log(`O valor 1 é IGUAL ao valor 2? ${igual}`)


//operador ternário
let idade, eleitor, resultado, resultadoOU;
idade = 65;
eleitor = (idade < 16)? "Não eleitor":"Eleitor ativo!"
console.log(eleitor)

resultado = (idade > 60 && idade < 70); //TRUE OU FALSE
console.log(resultado)

resultadoOU = (idade === 65 || idade === 72); //TRUE OU FALSE
console.log(resultadoOU)