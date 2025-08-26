function exercicio2() {
  const despesasFixas = 200.0;
  let precoIngresso = 5.0;
  let ingressosVendidos = 120;

  console.log("Tabela de Lucros Esperados:");
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log(
    "Preço Ingresso (R$) | Ingressos Vendidos | Receita Bruta (R$) | Lucro Esperado (R$)"
  );
  console.log(
    "------------------------------------------------------------------------------------"
  );

  while (precoIngresso >= 1.0) {
    const receitaBruta = precoIngresso * ingressosVendidos;
    const lucroEsperado = receitaBruta - despesasFixas;

    console.log(
      `${precoIngresso.toFixed(2).padStart(19)} | ${String(
        ingressosVendidos
      ).padStart(18)} | ${receitaBruta
        .toFixed(2)
        .padStart(18)} | ${lucroEsperado.toFixed(2).padStart(19)}`
    );

    console.log(`  ↳ Para o preço de R$ ${precoIngresso.toFixed(2)}:`);
    console.log(`    Lucro máximo esperado: R$ ${lucroEsperado.toFixed(2)}`);
    console.log(`    Preço do ingresso: R$ ${precoIngresso.toFixed(2)}`);
    console.log(`    Quantidade de ingressos vendidos: ${ingressosVendidos}`);
    console.log(
      "------------------------------------------------------------------------------------"
    );

    precoIngresso -= 0.5;
    precoIngresso = parseFloat(precoIngresso.toFixed(2));
    ingressosVendidos += 26;
  }
}

exercicio2();
