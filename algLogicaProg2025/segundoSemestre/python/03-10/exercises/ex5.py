soma_pares = 0
quantidade_pares = 0

print("Digite números inteiros (digite 0 para finalizar).")

while True:
    numero = int(input("Digite um número: "))

    if numero == 0:
        break

    if numero % 2 == 0:
        soma_pares += numero
        quantidade_pares += 1

if quantidade_pares > 0:
    media = soma_pares / quantidade_pares
    print(f"\nA média dos números pares digitados é: {media:.2f}")
else:
    print("\nNenhum número par foi digitado (além do 0).")