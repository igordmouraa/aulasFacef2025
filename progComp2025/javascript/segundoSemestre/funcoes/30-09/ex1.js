// Função para mostrar o dobro de um número
function mostrarDobro(num) {
    return num * 2; // Retorna o dobro do número
}

// função para calcular o quadrado de um número
function calcularQuadrado(num) {
    return num * num; // Retorna o quadrado do número
}

// Função principal que executa o código
function main() {
    let number = Number(prompt("Digite um número:")); // Solicita ao usuário que insira um número
    console.log("Dobro:", mostrarDobro(number)); // Exibe o dobro do número
    console.log("Quadrado:", calcularQuadrado(number)); // Exibe o quadrado do número
}

main(); // Chama a função principal para iniciar o programa
