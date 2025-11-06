let precosUSD = [19.99, 5.49, 3.75, 12.00, 7.30, 15.99, 2.50];
const taxaConv = 5.00;

let precosBRL = precosUSD.map(function(preco){
    return preco.toFixed(2) * taxaConv;
})

function exibirPrecos(){
    console.log(`Preços em USD: ${precosUSD}`);
    console.log(`Preços em BRL: ${precosBRL}`);
    
}