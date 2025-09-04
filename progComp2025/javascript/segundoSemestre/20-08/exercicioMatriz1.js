//faça uma função que leia os valores de uma matriz 3x3 usando prompt e exiba: a soma de todos os elementos, a quantidade de numeros pares, os valores da diagonal secundaria ([0][2], [1][1], [2][0])

function lerMatriz() {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = parseInt(prompt(`Digite o valor para a posição [${i}][${j}]:`));
    }
  }
  return matriz;
}

function calcularSoma(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

function contarPares(matriz) {
  let contador = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        contador++;
      }
    }
  }
  return contador;
}

function obterDiagonalSecundaria(matriz) {
  let diagonalSecundaria = [];
  for (let i = 0; i < matriz.length; i++) {
    diagonalSecundaria.push(matriz[i][matriz.length - 1 - i]);
  }
  return diagonalSecundaria;
}

function exibirResultados(matriz) {
  const soma = calcularSoma(matriz);
  const quantidadePares = contarPares(matriz);
  const diagonalSecundaria = obterDiagonalSecundaria(matriz);

  console.log(`Soma de todos os elementos: ${soma}`);
  console.log(`Quantidade de números pares: ${quantidadePares}`);
  console.log(`Valores da diagonal secundária: ${diagonalSecundaria.join(', ')}`);
}

function main() {
  const matriz = lerMatriz();
  exibirResultados(matriz);
}