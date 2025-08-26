function exercicio9() {
  const pessoas = [];
  const totalPessoas = 10;

  console.log("--- Cadastro de Idades, Pesos e Alturas ---");
  for (let i = 0; i < totalPessoas; i++) {
    console.log(`\n--- Dados da Pessoa ${i + 1} ---`);
    const idade = parseInt(prompt(`Pessoa ${i + 1}: Digite a idade:`));
    const peso = parseFloat(prompt(`Pessoa ${i + 1}: Digite o peso (em kg):`));
    const altura = parseFloat(
      prompt(`Pessoa ${i + 1}: Digite a altura (em metros):`)
    );

    if (
      isNaN(idade) ||
      isNaN(peso) ||
      isNaN(altura) ||
      idade <= 0 ||
      peso <= 0 ||
      altura <= 0
    ) {
      alert(
        "Dados numéricos inválidos. Por favor, insira números positivos. Tente novamente para esta pessoa."
      );
      i--;
      continue;
    }
    pessoas.push({ idade, peso, altura });
  }

  let somaIdades = 0;
  let qtdPesoMais90AlturaMenos150 = 0;
  let qtdIdade10a30AlturaMais190 = 0;
  let qtdAlturaMais190 = 0;

  for (const pessoa of pessoas) {
    somaIdades += pessoa.idade;

    if (pessoa.peso > 90 && pessoa.altura < 1.5) {
      qtdPesoMais90AlturaMenos150++;
    }

    if (pessoa.altura > 1.9) {
      qtdAlturaMais190++;
      if (pessoa.idade >= 10 && pessoa.idade <= 30) {
        qtdIdade10a30AlturaMais190++;
      }
    }
  }

  console.log("\n--- Resultados ---");
  const mediaIdades = somaIdades / totalPessoas;
  console.log(
    `a) Média das idades das dez pessoas: ${mediaIdades.toFixed(2)} anos`
  );

  console.log(
    `b) Quantidade de pessoas com peso superior a 90 kg e altura inferior a 1,50 metro: ${qtdPesoMais90AlturaMenos150}`
  );

  if (qtdAlturaMais190 > 0) {
    const porcentagem10a30EntreMais190 =
      (qtdIdade10a30AlturaMais190 / qtdAlturaMais190) * 100;
    console.log(
      `c) Porcentagem de pessoas com idade entre 10 e 30 anos entre as que medem mais de 1,90 m: ${porcentagem10a30EntreMais190.toFixed(
        2
      )}%`
    );
  } else {
    console.log(
      "c) Nenhuma pessoa com mais de 1,90 m foi registrada para calcular a porcentagem."
    );
  }
}

exercicio9();
