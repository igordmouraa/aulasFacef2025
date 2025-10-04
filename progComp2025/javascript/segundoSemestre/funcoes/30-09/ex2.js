// Exemplo de passagem por valor e por referência em JavaScript

// Parâmetros por valor (tipos primitivos: number, string, boolean)
// Passa uma cópia do valor para a função, alterações dentro da função não afetam o valor original
function alterarNumero(x) {
    return x = 100;
}

// Parâmetros por referência (objetos, arrays)
// Passa uma referência ao objeto/array, alterações dentro da função afetam o valor original
function alterarVetor(vetor) {
    vetor[0] = 100;
}

// Função principal que demonstra o comportamento de parâmetros por valor e por referência
function main() {
    let a = 10; // Variável primitiva
    let number = [10, 20, 30]; // Array (objeto)

    alterarNumero(a); // Passa o valor de 'a' para a função alterarNumero
    console.log(a); // Saida: 10

    alterarVetor(number); // Passa o array 'number' para a função alterarVetor
    console.log(number); // Saida: [100, 20, 30]
}

// Chama a função principal para executar o código
main();