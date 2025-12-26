//é um trecho de código que só é executado quando for chamado

// Função Void - Vazia
// Função com parâmetro(s)
// Função Return
// Função Arrow / Arrow Function

/*
let valor = 10
function incrementar(){
    console.log("Estou executando a função!")
}

incrementar()
console.log(valor)
*/

// Função VOID
/*
let valor = 10
function incrementar(){
    valor = valor  + 10
}

incrementar()
console.log(valor)
*/


// Função com parâmetro(s)
/*
function mostrarNome(nomeDaPessoa){
    console.log(nomeDaPessoa)
}

mostrarNome("Gabryel")
mostrarNome("Segundo Nome")



function soma(n1,n2) {
    const resultado = n1 + n2
    const multiplicação = n1 * n2

    console.log(`Soma dos números ${resultado}`)
    console.log(`Multiplicação dos números ${multiplicação}`)
}

soma(5,2)
*/

/*
function soma(n1,n2){
    const resultado = n1 + n2
    return resultado
}

const somaNumeros = soma(5,3)
const somaNumeros2 = soma(5,12)

console.log(somaNumeros)
console.log(somaNumeros2)
*/

//Arrow Function
const multiplicacao = (n1,n2) => {
    const multi = n1 * n2
    return multi
}

const resultado = multiplicacao(5,7)
console.log(`Resultado da mutiplicação: ${resultado}`)