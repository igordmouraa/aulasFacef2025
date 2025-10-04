var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseFloat(lines[0]);

let Area = 3.14159 * (N * N);
console.log(`A=${Area.toFixed(4)}`);