var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let dis =  parseInt(lines[0]);
const vel = 0.5;
let resultadoFinal= dis/vel;
console.log (resultadoFinal+' minutos');

