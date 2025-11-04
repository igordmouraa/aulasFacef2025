def calculaTabuada(num):

    if num < 1 or num > 9:
        print(f"O número {num} não está entre 1 e 9.")
    else:
        print(f"-- Tabuada do {num} --")

        for i in range(1, 11):
            result = num * i
            print(f"{num} x {i} = {result}")

def calculaIMC(peso, altura):

    imc = peso / (altura ** 2)
    return imc

def calculaFatorial(num):
    if num == 0:
        return 1

    if num < 0:
        return "Indefinido (número negativo)"

    result = 1
    for i in range(1, num + 1):
        result = result * i
        
    return result

while True:
    print("\n-- Selecione a Opção desejada --")
    print("1: Calcular Tabuada")
    print("2: Calcular IMC")
    print("3: Calcular Fatorial")
    print("-1: Sair do programa")
    
    opcao = input("Digite a opção desejada: ")
    
    if opcao == "1":
    
        print("\nOpção 1: Tabuada")
        num_tab = int(input("Digite um número (entre 1 e 9): "))
        calculaTabuada(num_tab)
        
    elif opcao == "2":
        print("\nOpção 2: IMC")
        
        peso_usr = float(input("Digite seu peso: "))
        altura_usr = float(input("Digite sua altura: "))
        result_imc = calculaIMC(peso_usr, altura_usr)

        print(f"O seu IMC é: {result_imc:.2f}")
        
    elif opcao == "3":
        print("\nOpção 3: Fatorial")
        num_fat = int(input("Digite um número para calcular o fatorial: "))
        
        result_fat = calculaFatorial(num_fat)
        print(f"O fatorial de {num_fat} é: {result_fat}")
        
    elif opcao == "-1":
        print("Encerrando!!")
        break
    else:
        print("\nOpção inválida!")