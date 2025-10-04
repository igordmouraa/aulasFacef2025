numero_secreto = int(input("Jogador 1, digite o número a ser adivinhado: "))

print("\n" * 30) 
print("Jogador 2, tente adivinhar o número!")

tentativas = 0
chute = 0

while chute != numero_secreto:
    chute = int(input("Qual o seu chute? "))
    tentativas += 1
    
    if chute > numero_secreto:
        print("Chute muito ALTO! Tente novamente.")
    elif chute < numero_secreto:
        print("Chute muito BAIXO! Tente novamente.")
    else:
        print(f"\nParabéns! Você acertou o número {numero_secreto}!")
        print(f"Você precisou de {tentativas} tentativa(s).")