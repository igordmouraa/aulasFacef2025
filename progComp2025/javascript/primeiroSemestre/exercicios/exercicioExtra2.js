//programa em js que receba 10 números
//calcular e exiba o vetor alterado da seguinte forma:
//nas posições pares, somar 10 no elemento
//nas posições impares, multiplicar o elemento por 3

function exercise() {

    let vetor = [];
    let totalNumeros = 10;

    for (let i = 0; i < totalNumeros; i++) {
        const num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
        if (isNaN(num)) {
            alert("Entrada inválida. Por favor, digite um número inteiro. Tente novamente para este número.");
            i--;
            continue;
        }
        vetor.push(num);
    }

    alert(`Vetor original: ${vetor.join(', ')}`);x

    for (let i = 0; i < vetor.length; i++) {
        if (i % 2 === 0) {
            vetor[i] += 10; 
        } else {
            vetor[i] *= 3;
        }
    }

    alert(`Vetor alterado: ${vetor.join(', ')}`);

}



