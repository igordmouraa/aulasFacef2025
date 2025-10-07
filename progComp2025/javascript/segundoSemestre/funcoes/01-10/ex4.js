function main() {
  let cidades = [];
  carregarCidades(cidades); // Carrega a lista de cidades
  padronizarNomes(cidades); // Converte todos os nomes para maiúsculas
  marcarInterior(cidades); // Marca cidades que começam com 'C' como 'INTERIOR - NOME'
  exibirCidades(cidades); // Exibe a lista de cidades
}

function carregarCidades(lista) {
  lista.push("São Paulo", "Campinas", "Santos", 
             "Sorocaba", "Caraguatatuba", "Ribeirão Preto", 
             "Curitiba", "Cuiabá", "Caxias do Sul", "Cascavel"); // Adiciona cidades à lista
}

function padronizarNomes(lista) {
  for (let i = 0; i < lista.length; i++) { // Percorre a lista
    lista[i] = lista[i].toUpperCase(); // Converte o nome para maiúsculas
  }
}

function marcarInterior(lista) { 
  for (let i = 0; i < lista.length; i++) { // Percorre a lista
    if (lista[i].startsWith("C")) { // Verifica se o nome começa com 'C'
      lista[i] = "INTERIOR - " + lista[i]; // Marca o nome como 'INTERIOR - NOME'
    }
  }
}

function exibirCidades(lista) {
  console.log(lista); // Exibe a lista de cidades
}

main() // Executa o programa