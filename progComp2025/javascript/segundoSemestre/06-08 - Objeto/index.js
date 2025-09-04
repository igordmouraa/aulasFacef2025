const carros = [
    {
        ano: 1975,
        modelo: "Opala",
        versao: "De Luxo",
        motor: "2.5 4 Cilindros",
    },
    {
        ano: 1985,
        modelo: "Caravan",
        versao: "Comodoro",
        motor: "2.5 4 Cilindros",
    },
    {
        ano: 1988,
        modelo: "Opala Coupê",
        versao: "Diplomata",
        motor: "4.1 6 Cilindros",
    },
]

// console.log(carros);

for (let i = 0; i < carros[i].length; i++) {
    const carro = carros[i];
    console.log('===================================================');
    console.log(`Carro ${i + 1}`);
    console.log(`Ano: ${carro.ano}`);
    console.log(`Modelo: ${carro.modelo}`);
    console.log(`Versão: ${carro.modelo}`);
    console.log(`Motor: ${carro.motor}`);
}
