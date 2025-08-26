function ehPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;
  if (numero % 2 === 0 || numero % 3 === 0) return false;
  for (let i = 5; i * i <= numero; i = i + 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }
  return true;
}

function exercicio10() {
  const numeros = [];
  const totalNumeros = 10;

  console.log("--- Leitura de Números ---");
  for (let i = 0; i < totalNumeros; i++) {
    const num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
    if (isNaN(num)) {
      alert(
        "Entrada inválida. Por favor, digite um número inteiro. Tente novamente para este número."
      );
      i--;
      continue;
    }
    numeros.push(num);
  }

  let somaPares = 0;
  let somaPrimos = 0;

  for (const numero of numeros) {
    if (numero % 2 === 0) {
      somaPares += numero;
    }

    if (ehPrimo(numero)) {
      somaPrimos += numero;
    }
  }

  console.log("\n--- Resultados ---");
  console.log(`Soma dos números pares: ${somaPares}`);
  console.log(`Soma dos números primos: ${somaPrimos}`);
}

exercicio10();
