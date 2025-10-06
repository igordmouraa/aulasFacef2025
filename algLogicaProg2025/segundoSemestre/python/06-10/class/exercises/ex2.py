# Fazer uma função que calcule a média dos números pares de um vetor.

def media_pares(vet): # função que calcula a média dos números pares de um vetor
    soma = 0
    cont = 0
    for i in range(len(vet)): # percorre o vetor
        if vet[i] % 2 == 0: # verifica se o número é par
            soma += vet[i] # acumula a soma
            cont += 1 # conta os números pares
    if cont == 0: # evita divisão por zero
        return 0
    return soma / cont # retorna a média

vet = [] # vetor vazio
N = int(input('Entre com uma quantidade: ')) # lê a quantidade de elementos
for i in range(N): # lê os elementos do vetor
    vet.append(int(input('Informe um número: '))) # adiciona o elemento ao vetor
    
media = media_pares(vet)
print(f'Média dos números pares: {media}')