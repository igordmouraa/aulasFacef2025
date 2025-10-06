def menor_ou_igual(a, b):
    if a < b:
        print(f"O menor número é: {a}")
    elif b < a:
        print(f"O menor número é: {b}")
    else:
        print("Os números são iguais.")

x = int(input("Digite o primeiro número: "))
y = int(input("Digite o segundo número: "))
menor_ou_igual(x, y)
