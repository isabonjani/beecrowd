var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

let a = lines[0];
let b = lines[1];
let x = parseInt(a) + parseInt(b);
console.log('X = '+x);