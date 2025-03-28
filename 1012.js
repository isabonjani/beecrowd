var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let valores = lines[0].split(" ");
let a =  parseFloat(valores[1]);
let b =  parseFloat(valores[1]);
let c =  parseFloat(valores[1]);
let resolucaoLetraA = (a*c)/2;
console.log ('VOLUME = '+resolucaoLetraA.toFixed(3));
