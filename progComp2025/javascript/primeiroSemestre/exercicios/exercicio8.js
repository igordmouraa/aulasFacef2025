function exercicio8() {
  const pessoas = [];
  const totalPessoas = 6;

  console.log("--- Cadastro Detalhado de Pessoas ---");
  for (let i = 0; i < totalPessoas; i++) {
    console.log(`\n--- Pessoa ${i + 1} ---`);
    const idade = parseInt(prompt(`Pessoa ${i + 1}: Digite a idade:`));
    const peso = parseFloat(prompt(`Pessoa ${i + 1}: Digite o peso (em kg):`));
    const altura = parseFloat(
      prompt(`Pessoa ${i + 1}: Digite a altura (em metros):`)
    );

    let corOlhos = "";
    while (!["A", "P", "V", "C"].includes(corOlhos)) {
      corOlhos = prompt(
        `Pessoa ${
          i + 1
        }: Digite a cor dos olhos (A-azul, P-preto, V-verde, C-castanho):`
      )?.toUpperCase();
      if (!["A", "P", "V", "C"].includes(corOlhos))
        alert("Cor dos olhos inválida!");
    }

    let corCabelos = "";
    while (!["P", "C", "L", "R"].includes(corCabelos)) {
      corCabelos = prompt(
        `Pessoa ${
          i + 1
        }: Digite a cor dos cabelos (P-preto, C-castanho, L-louro, R-ruivo):`
      )?.toUpperCase();
      if (!["P", "C", "L", "R"].includes(corCabelos))
        alert("Cor dos cabelos inválida!");
    }

    if (
      isNaN(idade) ||
      isNaN(peso) ||
      isNaN(altura) ||
      idade <= 0 ||
      peso <= 0 ||
      altura <= 0
    ) {
      alert(
        "Dados numéricos inválidos para uma pessoa. Por favor, insira números positivos. Tente novamente para esta pessoa."
      );
      i--;
      continue;
    }

    pessoas.push({ idade, peso, altura, corOlhos, corCabelos });
  }

  let qtdMais50AnosMenos60Kg = 0;
  let somaIdadesAlturaInferior150 = 0;
  let qtdAlturaInferior150 = 0;
  let qtdOlhosAzuis = 0;
  let qtdRuivasNaoOlhosAzuis = 0;

  for (const pessoa of pessoas) {
    if (pessoa.idade > 50 && pessoa.peso < 60) {
      qtdMais50AnosMenos60Kg++;
    }

    if (pessoa.altura < 1.5) {
      somaIdadesAlturaInferior150 += pessoa.idade;
      qtdAlturaInferior150++;
    }

    if (pessoa.corOlhos === "A") {
      qtdOlhosAzuis++;
    }

    if (pessoa.corCabelos === "R" && pessoa.corOlhos !== "A") {
      qtdRuivasNaoOlhosAzuis++;
    }
  }

  console.log("\n--- Resultados ---");
  console.log(
    `a) Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg: ${qtdMais50AnosMenos60Kg}`
  );

  if (qtdAlturaInferior150 > 0) {
    const mediaIdadesAlturaInferior150 =
      somaIdadesAlturaInferior150 / qtdAlturaInferior150;
    console.log(
      `b) Média das idades das pessoas com altura inferior a 1,50 m: ${mediaIdadesAlturaInferior150.toFixed(
        2
      )} anos`
    );
  } else {
    console.log(
      "b) Nenhuma pessoa com altura inferior a 1,50 m foi registrada."
    );
  }

  const porcentagemOlhosAzuis = (qtdOlhosAzuis / totalPessoas) * 100;
  console.log(
    `c) Porcentagem de pessoas com olhos azuis: ${porcentagemOlhosAzuis.toFixed(
      2
    )}%`
  );

  console.log(
    `d) Quantidade de pessoas ruivas que não possuem olhos azuis: ${qtdRuivasNaoOlhosAzuis}`
  );
}

exercicio8();
