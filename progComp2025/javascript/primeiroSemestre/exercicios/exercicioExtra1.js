//programa em js que receba 6 números
//calcular e exibir:
//os números pares e a qtd de pares
//os números impares e a qtd de impares

function exercise(){
    let vetor = [];
    let pares = [];
    let impares = [];

    for(let i = 0; i < 6; i++){
        let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
        if(isNaN(num)){
            alert("Entrada inválida. Por favor, digite um número inteiro.");
            i--;
            continue;
        }
        vetor.push(num);
    }
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 === 0){
            pares.push(vetor[i]);
        } else {
            impares.push(vetor[i]);
        }
    }
    alert(`Números pares: ${pares.join(', ')}\nQuantidade de pares: ${pares.length}\n\nNúmeros ímpares: ${impares.join(', ')}\nQuantidade de ímpares: ${impares.length}`);
    
}