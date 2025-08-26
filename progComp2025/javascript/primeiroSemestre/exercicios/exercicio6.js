function exercicio6() {
    let totalAVista = 0;
    let totalAPrazo = 0;
    const numeroTransacoes = 15;
  
    console.log("Por favor, insira os dados das transações:");
  
    for (let i = 0; i < numeroTransacoes; i++) {
      let codigoValido = false;
      let codigo = '';
      let valor = 0;
  
      console.log(`\n--- Transação ${i + 1} ---`);
  
      while (!codigoValido) {
        codigo = prompt(`Digite o código da ${i + 1}ª transação (V para à vista, P para a prazo):`)?.toUpperCase();
        if (codigo === 'V' || codigo === 'P') {
          codigoValido = true;
        } else {
          alert("Código inválido! Por favor, digite 'V' ou 'P'.");
        }
      }
  
      let valorValido = false;
      while(!valorValido){
          const valorInput = prompt(`Digite o valor da ${i + 1}ª transação:`);
          valor = parseFloat(valorInput);
  
          if (isNaN(valor) || valor < 0) {
              alert("Valor inválido! Por favor, digite um número positivo.");
          } else {
              valorValido = true;
          }
      }
  
  
      if (codigo === 'V') {
        totalAVista += valor;
      } else if (codigo === 'P') {
        totalAPrazo += valor;
      }
    }
  
    const totalGeral = totalAVista + totalAPrazo;
    const valorPrimeiraPrestacaoAPrazo = totalAPrazo / 3;
  
    console.log("\n--- Resultados Finais ---");
    console.log(`Valor total das compras à vista: R$ ${totalAVista.toFixed(2)}`);
    console.log(`Valor total das compras a prazo: R$ ${totalAPrazo.toFixed(2)}`);
    console.log(`Valor total das compras efetuadas: R$ ${totalGeral.toFixed(2)}`);
    if (totalAPrazo > 0) {
      console.log(`Valor da primeira prestação das compras a prazo juntas: R$ ${valorPrimeiraPrestacaoAPrazo.toFixed(2)}`);
    } else {
      console.log("Não houve compras a prazo para calcular a primeira prestação.");
    }
  }
  
  exercicio6();