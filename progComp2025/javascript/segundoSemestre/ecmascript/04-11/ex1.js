let notas = [7.5, 6.3, 8.0, 9.1, 5.4, 4.8, 7.9, 6.7, 8.5, 9.3];
let soma = 0;
let aprovados = 0;

notas.forEach(function(nota, index){
    console.log(`Nota ${index + 1}: ${nota}`);
     
    soma +=nota;

    if(nota >= 7){
        aprovados++;
    }

    if(index % 2 === 0){
        console.log(`Nota na posição par ${index}: ${nota}`);
    }
});

const media = soma / notas.length;
console.log(`Soma das notas: ${soma.toFixed(2)}`);
console.log(`Média das notas: ${media.toFixed(2)}`);
console.log(`Quantidade de alunos aprovados: ${aprovados}`);




