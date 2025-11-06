// Arrow Function
const soma = (a, b) => {
    a = 5;
    b = 19;

    result = a + b;

    return result;
};

const message = () => {
    
};

const main = () => {
    setTimeout(() => {
        message = 'Olá Mundo!'
        console.log(message);
    }, 2000);
}