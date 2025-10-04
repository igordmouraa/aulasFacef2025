// Funções são blocos de código que podem ser reutilizados e executam uma tarefa específica
// podem receber parâmetros e retornar valores

// Conceito de reutilização de código com funções
// Manter o código organizado e modular por funções, facilita a manutenção e a leitura do código
// Evita repetição de código e cada função resikve uma tarefa específica

// Declaração da função que passa saudacao como parâmetro e exibe no console uma mensagem
// Função sem valor de retorno (void/vazio)
function message(saudacao) {
    console.log(saudacao)
}


// Função que recebe dois parâmetros e retorna a soma dos valores
// Função com valor de retorno
function soma (a, b) {
    return a + b
}

// Função principal
// Declara a função main que chama a função message com diferentes saudações
function main () {
    message('Bom dia!')
    message('Boa tarde!')
    message('Boa noite!')

    // Chama a função soma e exibe o resultado no console
    console.log(soma(10, 20));
}
 
// Faz o chamado da função principal que executa o código linha por linha em ordem de execução
main()


//////////////////////////////////////////////////////

// Parâmetros por valor e por referência
// Parâmetros por valor (tipos primitivos: number, string, boolean)
// Passa uma cópia do valor para a função, alterações dentro da função não afetam o valor original
// Exemplo:
function alterar(x) {
    x = 10
}

// Função principal que demonstra o comportamento de parâmetros por valor

function alterada () {
    let a = 5
    alterar(a) // Passa o valor de 'a' para a função alterar
    console.log(a) // Saida: 5
}

function alterar2(vetor) {
    vetor[0] = 99;
}

function alterada2() {
    let numeros = [1, 2, 3];
    alterar2(numeros);
    console.log(numeros); // Saida: [99, 2, 3]
}