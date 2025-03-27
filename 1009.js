var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');
let salarioFixo = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);
const comissao=0.15;
let salarioComComissao = totalVendas*comissao;
let salarioTotal = salarioComComissao+salarioFixo;
console.log ('TOTAL = R$ '+salarioTotal.toFixed(2));