var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ledMap = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
};

let N = parseInt(lines[0]);
for (let i = 1; i <= N; i++) {
    let numStr = lines[i].trim();
    let totalLeds = 0;
    for (let digit of numStr) {
        totalLeds += ledMap[digit];
    }
    console.log(`${totalLeds} leds`);
}