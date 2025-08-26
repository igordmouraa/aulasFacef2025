const prompt = require('prompt-sync')();

function tabuada(numero) {
  console.log("-------------------------------------");
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

const input = prompt('Digite um número para ver sua tabuada: ');
const num = parseInt(input);

if (isNaN(num)) {
  console.log("Por favor, digite um número válido.");
} else {
  tabuada(num);
}