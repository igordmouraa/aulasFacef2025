function main() {
  let nomes = ["João", "Maria", "Joana", "Igor", "Zeca", "Ana", "Clara", "Amanda", "Bruna", "Carla"] // Vetor de nomes
  minusculas(nomes)  // Converte todos os nomes para minúsculas
  anonimo(nomes)  // Substitui nomes que começam com 'a' por 'Anônimo'
  console.log(nomes);
}

function minusculas(vet) {
  for (let i = 0; i < vet.length; i++) { // Percorre o vetor
  vet[i] = vet[i].toLowerCase() // Converte o nome para minúsculas
  }
}

function anonimo(vet) { 
  for (let i = 0; i < vet.length; i++) { // Percorre o vetor
    if (vet[i].startsWith("a")) { // Verifica se o nome começa com 'a'
      vet[i] = "Anônimo" // Substitui o nome por 'Anônimo'
    }    
  }
}

main()