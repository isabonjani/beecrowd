var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let raio = parseFloat(lines[0]);
const pi=3.14159;
let resultado= pi*(raio*raio);
console.log ('A='+resultado.toFixed(4));
