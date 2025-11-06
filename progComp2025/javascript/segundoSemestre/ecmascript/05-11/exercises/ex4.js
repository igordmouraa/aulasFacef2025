let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];

const vendasCategoria = () => {
    let totalCategoria = {}

    vendas.forEach(venda => {
        if(!totalCategoria[venda.categoria]) {
            totalCategoria[venda.categoria] = 0;
        }

        totalCategoria[venda.categoria] += venda.valor * venda.quantidade;
    });

    return totalCategoria;
}

const categoriaMaiorVenda = () => {
    const totais = vendasCategoria();
    let maiorCategoria = '';
    let maiorValor = 0;

    for(let categoria in totais){
        if(totais[categoria] > maiorValor) {
            maiorValor = totais[categoria];
            maiorCategoria = categoria;   
        }
    }

    return {
        categoria: maiorCategoria,
        valor: maiorValor
    };
}

const exibirResultados = () => {
    const totais = vendasCategoria();
    console.log(`Total de venda por categoria: ${totais}`);

    console.log('-------------------------------------------------------');
    

    const {categoria, valor} = categoriaMaiorVenda();   
    console.log(`A categoria campeã é: ${categoria} com um total de vendas de: R$ ${valor}`);    
}

exibirResultados();