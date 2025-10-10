# Calcular a média dos valores das posições ímpares de um vetor.

def media_impares(vet): # função que calcula a média dos elementos em posições ímpares
    soma = 0
    count = 0
    for i in range(1, len(vet), 2): # percorre o vetor nas posições ímpares
        soma += vet[i] # acumula a soma dos elementos em posições ímpares
        count += 1 # conta quantos elementos foram somados
    if count == 0: # evita divisão por zero
        return 0
    return soma / count # retorna a média dos elementos em posições ímpares

vet = [] # vetor vazio
N = int(input('Entre com uma quantidade: ')) # lê a quantidade de elementos
for i in range(N): # lê os elementos do vetor
    vet.append(int(input('Informe um número: '))) # adiciona o elemento ao vetor
media = media_impares(vet) # chama a função para calcular a média dos elementos em posições ímpares
print(f'Média dos elementos em posições ímpares: {media}') # imprime a média
