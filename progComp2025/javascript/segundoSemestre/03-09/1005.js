var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

let MEDIA = ((A * 3.5) + (B * 7.5)) / 11;
console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
