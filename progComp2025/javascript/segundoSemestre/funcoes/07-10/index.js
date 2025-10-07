let alunos = [
    { name: 'Igor', age: 29 },
    { name: 'Ana', age: 25 },
    { name: 'Júlia', age: 21 },
    { name: 'Carlos', age: 32 }
]; // Array de objetos

function listarPessoas(alunos) {
    for (let i = 0; i < alunos.length; i++) { // Percorre o array de objetos
        console.log(`Nome: ${alunos[i].name}, Idade: ${alunos[i].age}`);
    }
}

function aumentaIdade(alunos) {
    for (let aluno of alunos) { // Percorre cada objeto no array
        aluno.age += 1; // Aumenta a idade em 1
    }
}

