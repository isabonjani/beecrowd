var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let valores = lines[0].split(" ");
let a =  parseInt(valores[0]);
let b =  parseInt(valores[1]);
let c =  parseInt(valores[2]);

let maior1= verificaMAior(a,b);
let resultadoFinal=verificaMAior(maior1,c);
console.log (resultadoFinal+' eh o maior');




function verificaMAior(p1,p2){
    let resposta=(p1+p2+Math.abs(p1-p2))/2;
    return resposta;
}