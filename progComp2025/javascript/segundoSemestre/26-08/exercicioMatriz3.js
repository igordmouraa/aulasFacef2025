function lerMatriz() {
  let matriz = [];
  for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
      let valor;
      do {
        valor = parseInt(
          prompt(`Digite o valor para a posição [${i}][${j}] (0–500):`)
        );
      } while (isNaN(valor) || valor < 0 || valor > 500);
      matriz[i][j] = valor;
    }
  }
  return matriz;
}

function calcularMedia(array) {
  const soma = array.reduce((acc, val) => acc + val, 0);
  return soma / array.length;
}

function exibirResultados(matriz) {
  let diagonalPrincipal = [];
  let diagonalSecundaria = [];
  let maiorIndice = -1;
  let diaMaiorIndice = -1;
  let regiaoMaiorIndice = -1;
  let contadorCritico = 0;
  let mediasRegioes = [];

  for (let i = 0; i < matriz.length; i++) {
    let somaRegiao = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      // Diagonal Principal
      if (i === j) {
        diagonalPrincipal.push(matriz[i][j]);
      }
      // Diagonal Secundária
      if (i + j === matriz.length - 1) {
        diagonalSecundaria.push(matriz[i][j]);
      }
      // Maior Índice
      if (matriz[i][j] > maiorIndice) {
        maiorIndice = matriz[i][j];
        diaMaiorIndice = j;
        regiaoMaiorIndice = i;
      }
      // Contador Crítico
      if (matriz[i][j] > 300) {
        contadorCritico++;
      }
      // Soma para Média da Região
      somaRegiao += matriz[i][j];
    }
    mediasRegioes.push(somaRegiao / matriz[i].length);
  }

  const mediaDiagonalPrincipal = calcularMedia(diagonalPrincipal);
  const mediaDiagonalSecundaria = calcularMedia(diagonalSecundaria);
  const regiaoMenorMedia = mediasRegioes.indexOf(Math.min(...mediasRegioes));

  console.log(`Valores da diagonal principal: ${diagonalPrincipal.join(", ")}`);
  console.log(
    `Média da diagonal principal: ${mediaDiagonalPrincipal.toFixed(2)}`
  );
  console.log(
    `Valores da diagonal secundária: ${diagonalSecundaria.join(", ")}`
  );
  console.log(
    `Média da diagonal secundária: ${mediaDiagonalSecundaria.toFixed(2)}`
  );
  console.log(
    `Maior índice de poluição: ${maiorIndice} na região ${regiaoMaiorIndice} no dia ${diaMaiorIndice}`
  );
  console.log(
    `Número de vezes que o índice foi superior a 300: ${contadorCritico}`
  );
  console.log(
    `Região com menor média de poluição: Região ${regiaoMenorMedia} com média ${mediasRegioes[
      regiaoMenorMedia
    ].toFixed(2)}`
  );
}
