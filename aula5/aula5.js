const valorReais = document.querySelector("input")
document.querySelector("h1").style.color = "red";

function converter(){
    const valorDolar = valorReais.value / 5
    alert(`Valor em dólar: ${valorDolar}`)
}

