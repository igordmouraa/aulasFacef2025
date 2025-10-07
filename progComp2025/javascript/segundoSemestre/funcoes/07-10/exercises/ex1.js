function cadastrarAlunos(alunos){
    alunos.push({ name: 'Mariana', age: 28 , curso: 'ES'});
    alunos.push({ name: 'Pedro', age: 22 , curso: 'DS'});
    alunos.push({ name: 'Beatriz', age: 19 , curso: 'ES'});
    alunos.push({ name: 'Thiago', age: 35 , curso: 'DS'});
    alunos.push({ name: 'Carla', age: 26 , curso: 'ES'});
}

function listarPessoas(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(`Nome: ${alunos[i].name}, Idade: ${alunos[i].age}, Curso: ${alunos[i].curso}`);
    }
}

function aumentaIdade(alunos) {
    for (let aluno of alunos) {
        aluno.age += 1;
    }
}

function cadastraNovo(alunos, name, age, curso) {
    alunos.push({ name: name, age: age, curso: curso });
}

function removeAluno(alunos, name) {
    const index = alunos.findIndex(aluno => aluno.name === name);
    if (index !== -1) {
        alunos.splice(index, 1);
        console.log(`Aluno ${name} removido.`);
    } else {    
        console.log(`Aluno ${name} não encontrado.`);
    }
}

function main() {
    let alunos = [];
    cadastrarAlunos(alunos);

    let opcao = '';
    while (opcao !== '5') {
        opcao = prompt('Escolha uma opção:\n1 - Listar pessoas\n2 - Aumentar idade\n3 - Cadastrar novo aluno\n4 - Remover aluno\n5 - Sair');
        switch (opcao) {
            case '1':
                listarPessoas(alunos);
                break;
            case '2':
                aumentaIdade(alunos);
                console.log('Idades aumentadas em 1 ano.');
                break;
            case '3':
                cadastraNovo(alunos, prompt('Nome:'), parseInt(prompt('Idade:')), prompt('Curso (ES/DS):'));
                console.log('Novo aluno cadastrado.');
                break;
            case '4':
                removeAluno(alunos, prompt('Nome do aluno a ser removido:'));
                break;
            case '5':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}
