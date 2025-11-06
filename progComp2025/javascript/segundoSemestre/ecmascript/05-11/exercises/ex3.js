let vendas = [150, 300, 50, 450, 100];

let vendasDia = vendas.reduce((total, venda) => {
    return total + venda;
}, 0);

console.log(vendasDia);
