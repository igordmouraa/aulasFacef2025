var lines = input.split('\n');

let name = lines[0];
let fixedSalary = parseFloat(lines[1]);
let totalSales = parseFloat(lines[2]);

let total = (fixedSalary + (totalSales * 0.15));

console.log(`TOTAL = R$ ${total.toFixed(2)}`);