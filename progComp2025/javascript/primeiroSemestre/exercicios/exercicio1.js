function exercicio1() {
  const valores = [];
  for (let i = 0; i < 4; i++) {
    const valor = parseFloat(
      prompt(`Digite o ${i + 1}º valor (A, B, C ou D):`)
    );
    valores.push(valor);
  }

  console.log("Valores na ordem lida:", valores.join(", "));

  const crescente = [...valores].sort((a, b) => a - b);
  console.log("Valores em ordem crescente:", crescente.join(", "));

  const decrescente = [...valores].sort((a, b) => b - a);
  console.log("Valores em ordem decrescente:", decrescente.join(", "));
}

exercicio1();
