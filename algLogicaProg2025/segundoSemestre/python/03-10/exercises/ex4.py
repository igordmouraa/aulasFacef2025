soma_pares = 0
quantidade_pares = 0

print("Digite 10 números inteiros.")

for i in range(10):
    numero = int(input(f"Digite o {i+1}º número: "))
    
    if numero % 2 == 0:
        soma_pares += numero
        quantidade_pares += 1

if quantidade_pares > 0:
    media = soma_pares / quantidade_pares
    print(f"\nA média dos números pares digitados é: {media:.2f}")
else:
    print("\nNenhum número par foi digitado.")