var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [cod1, qtd1, val1] = lines[0].trim().split(' ').map(Number);
let [cod2, qtd2, val2] = lines[1].trim().split(' ').map(Number);

let total = (qtd1 * val1) + (qtd2 * val2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);