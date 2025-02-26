const message = () => {
    alert("Você vai ser redirecionado")
    setTimeout(() => {
        webPage();
    }, 1000);
}

const webPage = () => {
    window.open("https://github.com/igordmouraa");
}

let salary = ("1000 + vale refeicao")

const womanSalary = () => {
    return salary * 0.8;
}