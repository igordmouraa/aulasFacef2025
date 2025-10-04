a = int(input("Digite o comprimento do primeiro lado: "))
b = int(input("Digite o comprimento do segundo lado: "))
c = int(input("Digite o comprimento do terceiro lado: "))

if a < b + c and b < a + c and c < a + b:
    print("Os valores podem formar um triângulo.")
    if a == b == c:
        print("É um triângulo EQUILÁTERO.")
    elif a == b or a == c or b == c:
        print("É um triângulo ISÓSCELES.")
    else:
        print("É um triângulo ESCALENO.")
else:
    print("Os valores fornecidos NÃO PODEM formar um triângulo.")