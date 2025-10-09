function main() {
    let funcionarios = [];
    cadastroInicial(funcionarios);

    let opcao = '';
    while (opcao !== '10') {
        opcao = prompt(`Escolha uma opção:\n1 - Cadastrar novo funcionario`
                        + `\n2 - Listar todos os funcionarios`
                        + `\n3 - Aumentar salário de todos em 10%`
                        + `\n4 - Buscar salário por nome`
                        + `\n5 - Atualizar cargo de um funcionário`
                        + `\n6 - Remover funcionário`
                        + `\n7 - Calcular média salarial`
                        + `\n8 - (Desafio 1) Promover funcionários com salário abaixo da média em 15%`
                        + `\n9 - (Desafio 2) Funcionário com maior salário`
                        + `\n10 - Sair`
                        );
        switch (opcao) {
            case '1':
                newFuncionario(funcionarios, prompt('Nome:'), prompt('Cargo:'), parseFloat(prompt('Salário:')));
                console.log('Novo funcionário cadastrado.');
                break;
            case '2':
                listaFuncionarios(funcionarios);
                break;
            case '3':
                aumentaSalario(funcionarios);
                break;
            case '4':
                buscaSalarioPNome(funcionarios, prompt('Nome do funcionário:'));
                break;
            case '5':
                atualizaCargo(funcionarios, prompt('Nome do funcionário:'), prompt('Novo cargo:'));
                break;
            case '6':
                removerFuncionario(funcionarios, prompt('Nome do funcionário a ser removido:'));
                break;
            case '7':
                mediaSalarial(funcionarios);
                break;
            case '8':
                promoveFuncSalarioAbaixoDaMediaEm15(funcionarios);
                break;
            case '9':
                funcionarioMaiorSalario(funcionarios);
                break;
            case '10':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');

        }
    }
}

function cadastroInicial(funcionarios) {
    funcionarios.push({ name: 'Joseph', position: 'Estágiario', salary: 1000 });
    funcionarios.push({ name: 'Ana', position: 'Dev Júnior', salary: 2000 }); 
    funcionarios.push({ name: 'Júlia', position: 'Dev Pleno', salary: 3000 });
    funcionarios.push({ name: 'Carlos', position: 'Dev Sênior', salary: 4000 });
    funcionarios.push({ name: 'Mariana', position: 'Tech Lead', salary: 5000 });
}

function newFuncionario(funcionarios, name, position, salary) {
    funcionarios.push({ name: name, position: position, salary: salary });
}

function listaFuncionarios(funcionarios) {
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(`Nome: ${funcionarios[i].name}, Cargo: ${funcionarios[i].position}, Salário: R$${funcionarios[i].salary.toFixed(2)}`);
    }
}

function aumentaSalario(funcionarios) {
    for (let aluno of funcionarios) {
        aluno.salary *= 1.10;
    }
    alert('Salários aumentados em 10%.');
}

function buscaSalarioPNome(funcionarios, name) {
    const funcionario = funcionarios.find(aluno => aluno.name === name);
    if (funcionario) {
        alert(`Salário de ${name}: R$${funcionario.salary.toFixed(2)}`);
    } else {
        alert(`Funcionário ${name} não encontrado.`);
    }
}

function atualizaCargo(funcionarios, name, newPosition) {
    const funcionario = funcionarios.find(aluno => aluno.name === name);
    if (funcionario) {
        funcionario.position = newPosition;
        alert(`Cargo de ${name} atualizado para ${newPosition}.`);
    } else {
        alert(`Funcionário ${name} não encontrado.`);
    }
}

function removerFuncionario(funcionarios, name) {
    const index = funcionarios.findIndex(aluno => aluno.name === name);
    if (index !== -1) {
        funcionarios.splice(index, 1);
        alert(`Funcionário ${name} removido.`);
    } else {
        alert(`Funcionário ${name} não encontrado.`);
    }
}

function mediaSalarial(funcionarios) {
    if (funcionarios.length === 0) {
        alert('Nenhum funcionário cadastrado.');
        return;
    }
    const total = funcionarios.reduce((acc, curr) => acc + curr.salary, 0);
    const media = total / funcionarios.length;
    alert(`Média salarial: R$${media.toFixed(2)}`);
}

// Desafio 1:
function promoveFuncSalarioAbaixoDaMediaEm15(funcionarios, mediaSalario) {
    if (funcionarios.length === 0) {
        alert('Nenhum funcionário cadastrado.');
        return;
    };
    
    mediaSalario = funcionarios.reduce((acc, f) => acc + f.salary, 0) / funcionarios.length;

    for (let func of funcionarios) {
        if (func.salary < mediaSalario) {
            func.salary *= 1.15;
            func.position = 'Analista Júnior';
        }
    }
    alert('Funcionários com salário abaixo da média receberam aumento de 15%.');
}

// Desafio 2:
function funcionarioMaiorSalario(funcionarios) {
    if (funcionarios.length === 0) {
        alert('Nenhum funcionário cadastrado.');
        return;
    }

    let maiorSalario = funcionarios[0];
    for (let func of funcionarios) {
        if (func.salary > maiorSalario.salary) {
            maiorSalario = func;
        }
    }
    alert(`Funcionário com maior salário: ${maiorSalario.name}, Cargo: ${maiorSalario.position}, Salário: R$${maiorSalario.salary.toFixed(2)}`);
}
main();