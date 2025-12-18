/*
If - Se
Else - Senão

Operadores de Comparação
> Maior que
< Menor que
>= Maior ou igual que
<= Menor ou igual que
= Atribuir um valor a variável
== Igual (Comparando somente o valor)
=== Igual (Comparar o valor e o TIPO)
!= Diferente (compara só o valor)
!== Diferente (valor ou tipo diferente)


const notaAluno = 4

if(notaAluno >= 5){
    console.log('Aluno Nota')
} else {
    console.log('Aluno REPROVADO')
}



const notaAluno = "10"
if(notaAluno === 10){
    console.log("Aluno NOTA 10")
} else {
    console.log("Aluno Meia Boca")
}


Desafio - Utilizando IF / ELSE, Crie um código que:
=> Verifica se uma cidade é grande ou pequena
=>Cidade grande possui mais de 300 mil habitantes
*/

const BoaVista = 413486
const EmbudasArtes = 250691
const Dourados = 243367
const Itajaí = 264054
const Palmas = 302692
const JuazeirodoNorte = 286120
const TaboãodaSerra = 273542

if(BoaVista>=300000){
    console.log("Cidade Grande pois tem mais de 300 Mil habitantes!")
} else {
    console.log("Cidade Pequena! menos de 300 Mil Habitantes");
    
}