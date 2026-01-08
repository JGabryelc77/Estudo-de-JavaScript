/*
let pessoa = "Gabryel"
let pessoa = "Cardoso"
let não pdoe ser redeclararada */

var x = 20; //Valor inicial

{
    var x = 2; //redeclarada
}

//Aqui também será 2 pois foi redeclarada
document.getElementById("texto").innerHTML = x;




let y = 20; //Valor inicial

{
    let y = 2; //redeclarada
}

//Pode ser redeclarado mas só vale dentro do bloco
//o LET do bloco só funciona dentro do bloco, o geral continuará o valor inicial
document.getElementById("texto_let").innerHTML = y;




//Const não aceita mudanças em local nenhum! é para variáveis que semrpe  dentro do código, o valor dela será aquele durtante todo o código
const z = 100;

{
    const z = 101;
}

document.getElementById("texto_const").innerHTML = z