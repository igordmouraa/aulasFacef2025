var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0]);
let hours = parseInt(lines[1]);
let hourValue = parseFloat(lines[2]);

let salary = (hours * hourValue);

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);