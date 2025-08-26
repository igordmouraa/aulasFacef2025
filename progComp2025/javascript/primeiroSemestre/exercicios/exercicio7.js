function exercicio7() {
  const pessoas = [];
  const totalPessoas = 5;

  console.log("--- Cadastro de Pessoas ---");
  for (let i = 0; i < totalPessoas; i++) {
    console.log(`\n--- Pessoa ${i + 1} ---`);
    const idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));
    const altura = parseFloat(
      prompt(`Digite a altura (em metros) da pessoa ${i + 1} (ex: 1.75):`)
    );
    const peso = parseFloat(
      prompt(`Digite o peso (em kg) da pessoa ${i + 1} (ex: 70.5):`)
    );

    if (
      isNaN(idade) ||
      isNaN(altura) ||
      isNaN(peso) ||
      idade <= 0 ||
      altura <= 0 ||
      peso <= 0
    ) {
      alert(
        "Dados inválidos para uma pessoa. Por favor, insira números positivos. Tente novamente do início para esta pessoa."
      );
      i--; 
      continue;
    }
    pessoas.push({ idade, altura, peso });
  }

  let qtdPessoasMais50Anos = 0;
  let somaAlturas10a20Anos = 0;
  let qtdPessoas10a20Anos = 0;
  let qtdPessoasMenos40Kg = 0;

  for (const pessoa of pessoas) {
    if (pessoa.idade > 50) {
      qtdPessoasMais50Anos++;
    }

    if (pessoa.idade >= 10 && pessoa.idade <= 20) {
      somaAlturas10a20Anos += pessoa.altura;
      qtdPessoas10a20Anos++;
    }

    if (pessoa.peso < 40) {
      qtdPessoasMenos40Kg++;
    }
  }

  console.log("\n--- Resultados ---");
  console.log(
    `a) Quantidade de pessoas com idade superior a 50 anos: ${qtdPessoasMais50Anos}`
  );

  if (qtdPessoas10a20Anos > 0) {
    const mediaAlturas10a20Anos = somaAlturas10a20Anos / qtdPessoas10a20Anos;
    console.log(
      `b) Média das alturas das pessoas com idade entre 10 e 20 anos: ${mediaAlturas10a20Anos.toFixed(
        2
      )} m`
    );
  } else {
    console.log(
      "b) Nenhuma pessoa com idade entre 10 e 20 anos foi registrada."
    );
  }

  const porcentagemMenos40Kg = (qtdPessoasMenos40Kg / totalPessoas) * 100;
  console.log(
    `c) Porcentagem de pessoas com peso inferior a 40 kg: ${porcentagemMenos40Kg.toFixed(
      2
    )}%`
  );
}

exercicio7();
