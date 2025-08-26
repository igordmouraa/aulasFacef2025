class Funcionarios {
  constructor(nome, cargo, salario, tempoServico) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.tempoServico = tempoServico;
  }

  static colectarDados(qtd = 5) {
    let lista = [];
    for (let i = 0; i < qtd; i++) {
      let nome = prompt("Digite o nome do funcionário:");
      let cargo = prompt("Digite o cargo do funcionário:");
      let salario = parseFloat(prompt("Digite o salário do funcionário:"));
      let tempoServico = parseInt(
        prompt("Digite o tempo de serviço do funcionário (em anos):")
      );
      lista.push(new Funcionarios(nome, cargo, salario, tempoServico));
    }
    return lista;
  }

  static funcionarioComMaiorSalario(funcionarios) {
    let maiorSalario = funcionarios[0];
    for (let i = 1; i < funcionarios.length; i++) {
      if (funcionarios[i].salario > maiorSalario.salario) {
        maiorSalario = funcionarios[i];
      }
    }
    return maiorSalario;
  }

  static funcionariosComMaisDeCincoAnosESalarioMaiorQue5000(funcionarios) {
    let resultado = [];
    for (let i = 0; i < funcionarios.length; i++) {
      if (funcionarios[i].tempoServico > 5 && funcionarios[i].salario > 5000) {
        resultado.push(funcionarios[i]);
      }
    }
    return resultado;
  }

  static calculoMediaSalario(funcionarios) {
    let somaSalarios = 0;
    for (let i = 0; i < funcionarios.length; i++) {
      somaSalarios += funcionarios[i].salario;
    }
    return somaSalarios / funcionarios.length;
  }

  static funcionairosQueSaoGerentes(funcionarios) {
    let gerentes = [];
    for (let i = 0; i < funcionarios.length; i++) {
      if (funcionarios[i].cargo.toLowerCase() === "gerente") {
        gerentes.push(funcionarios[i]);
      }
    }
    return gerentes;
  }
}

// Para executar no console do Google:
// let funcionarios = Funcionarios.colectarDados(6);
// console.log(Funcionarios.funcionarioComMaiorSalario(funcionarios));
// console.log(Funcionarios.funcionariosComMaisDeCincoAnosESalarioMaiorQue5000(funcionarios));
// console.log(Funcionarios.calculoMediaSalario(funcionarios));
// console.log(Funcionarios.funcionairosQueSaoGerentes(funcionarios));
