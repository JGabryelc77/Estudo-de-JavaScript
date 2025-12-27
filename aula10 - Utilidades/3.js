// INVERTER VALORES DE VARIÁVEIS (FORMA COMPLICADA)
let a = 1;
let b = 2;

let c = a;
let d = b;
a = d;
b = c;

// INVERTER VALORES DE VARIÁVEIS (FORMA SIMPLES)
let x = 1;
let y = 2;

[x, y] = [y, x];
console.log(x, y);