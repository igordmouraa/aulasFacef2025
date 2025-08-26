let numbers = [];

function addNumber() {
    for(let i = 0; i < 6; i++) {
        let num = parseInt(prompt("Digite um número:"));
        numbers.push(num);
    }
}

function isImparPar() {
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0) {
            numbers[i] += 10;
        } else {
            numbers[i] *= 3;
        }
    }
}

function calculaMediaPar(){
    let soma = 0;
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0) {
            soma += numbers[i];
            count++;
        }
    }
    let media = soma / count;
    alert(`A média dos números nas posições pares é: ${media}`);
}

function app() {
    addNumber();
    isImparPar();
    calculaMediaPar();

    alert(`Números alterados: ${numbers}`);
    alert(numbers);
}

