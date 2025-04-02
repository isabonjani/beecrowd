var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let X =  parseInt(lines[0]);
let Y =  parseFloat(lines[1]);
let consumoMedio = X/Y;
console.log (consumoMedio.toFixed(3)+' km/l');