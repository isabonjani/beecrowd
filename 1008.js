var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let number = lines[0];
let horas = lines[1];
let valorHora = lines[2];
let salario = horas*valorHora;
console.log ('NUMBER = '+number);
console.log ('SALARY = U$ '+salario.toFixed(2));


