function lerMatriz() {
    let matriz =[];
    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j< 7; j++) {
            matriz[i][j] = parseFloat(Math.random() * 1000).toFixed(2);
        }
    }
    return matriz;  
}

function lerNomes() {
    let nomes = [];
    for (let i = 0; i < 4; i++) {
        nomes[i] =  prompt(`Digite o nome do vendedor ${i + 1}:`);
    }
    return nomes;
}

function calcularValorTotalPorVendedor(matriz) {
    let totais = [];
    for (let i = 0; i < matriz.length; i++) {
        let total = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            total += matriz[i][j];
        }
        totais.push(total);
    }
    return totais;
}

function calculaValorTotalPorDiaSemana(matriz) {
    let totais = [];
    for (let i = 0; i < matriz.length; i++) {
        let total = 0;
        for (let j = 0; j< matriz[j].length; j++) {
            total += matriz[i][j];
        }
        totais.push(total);
    }
    return totais;
}

function exibeMaiorValorEPosicao(matriz) {
    let maiorValor = 0;
    let posicao = {linha: 0, coluna: 0};
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maiorValor) {
                maiorValor = matriz[i][j];
                posicao.linha = i;
                posicao.coluna = j;
            }
        } 
    }
    return {maiorValor, posicao};
}

function calcularMediaGeral(matriz) {
    let total = 0;
    let quantidade = 0;
    let media = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            total += matriz[i][j];
            quantidade++;
        }
    }
    media = total / quantidade;

    return media;
}


