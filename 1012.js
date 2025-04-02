var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let valores = lines[0].split(" ");
let a =  parseFloat(valores[0]);
let b =  parseFloat(valores[1]);
let c =  parseFloat(valores[2]);
const pi=3.14159;
let resolucaoLetraA = (a*c)/2;
let resolucaoLetraB = pi*(c^2)
let resolucaoLetraC = (a+b)*c/2
let resolucaoLetraD = b*b
let resolucaoLetraE = a*b
console.log ('TRIANGULO: '+resolucaoLetraA.toFixed(3));
console.log ('CIRCULO: '+resolucaoLetraB.toFixed(3));
console.log ('TRAPEZIO: '+resolucaoLetraC.toFixed(3));
console.log ('QUADRADO: '+resolucaoLetraD.toFixed(3));
console.log ('RETANGULO: '+resolucaoLetraE.toFixed(3));
