let biblioteca = [];

function colectData() {
  let titulo = prompt(`Digite o título do livro: ${biblioteca.length + 1}`);
  let autor = prompt(`Digite o autor do livro: ${biblioteca.length + 1}`);
  let ano = Number(
    prompt(`Digite o ano de publicação do livro: ${biblioteca.length + 1}`)
  );
  let paginas = Number(
    prompt(`Digite o número de páginas do livro: ${biblioteca.length + 1}`)
  );

  biblioteca.push({
    titulo: titulo,
    autor: autor,
    ano: ano,
    paginas: paginas,
  });
}

function maiorPaginas() {
  let maior = biblioteca[0];
  let soma = 0;
  for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].paginas > 300) {
      console.log(
        `O livro "${biblioteca[i].titulo}" possui mais de 300 páginas.`
      );
    }
    if (biblioteca[i].paginas > maior.paginas) {
      maior = biblioteca[i];
    }
    soma += biblioteca[i].paginas;
  }
}

console.log(`O livro com mais páginas é "${maior.titulo}" com ${maior.paginas} páginas.`);
console.log(`A soma total de páginas dos livros é ${soma}.`);
