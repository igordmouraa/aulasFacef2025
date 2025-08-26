function exercicio3() {
  const idades = [];
  const totalPessoas = 8;

  for (let i = 0; i < totalPessoas; i++) {
    const idade = parseInt(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
    idades.push(idade);
  }

  const faixasEtarias = {
    "1ª (Até 15 anos)": 0,
    "2ª (De 16 a 30 anos)": 0,
    "3ª (De 31 a 45 anos)": 0,
    "4ª (De 46 a 60 anos)": 0,
    "5ª (Acima de 60 anos)": 0,
  };

  for (const idade of idades) {
    if (idade <= 15) {
      faixasEtarias["1ª (Até 15 anos)"]++;
    } else if (idade >= 16 && idade <= 30) {
      faixasEtarias["2ª (De 16 a 30 anos)"]++;
    } else if (idade >= 31 && idade <= 45) {
      faixasEtarias["3ª (De 31 a 45 anos)"]++;
    } else if (idade >= 46 && idade <= 60) {
      faixasEtarias["4ª (De 46 a 60 anos)"]++;
    } else {
      faixasEtarias["5ª (Acima de 60 anos)"]++;
    }
  }

  console.log("\na) Quantidade de pessoas em cada faixa etária:");
  for (const faixa in faixasEtarias) {
    console.log(`${faixa}: ${faixasEtarias[faixa]}`);
  }

  const porcentagemPrimeiraFaixa =
    (faixasEtarias["1ª (Até 15 anos)"] / totalPessoas) * 100;
  console.log(
    `\nb) Porcentagem de pessoas na primeira faixa etária: ${porcentagemPrimeiraFaixa.toFixed(
      2
    )}%`
  );

  const porcentagemUltimaFaixa =
    (faixasEtarias["5ª (Acima de 60 anos)"] / totalPessoas) * 100;
  console.log(
    `\nc) Porcentagem de pessoas na última faixa etária: ${porcentagemUltimaFaixa.toFixed(
      2
    )}%`
  );
}

exercicio3();
