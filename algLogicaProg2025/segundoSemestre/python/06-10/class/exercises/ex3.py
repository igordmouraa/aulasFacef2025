# Fazer uma função que calcule a média dos elementos de um vetor.

def media_vetor(vet): # função que calcula a média dos elementos de um vetor
    soma = 0
    for i in range(len(vet)): # percorre o vetor
        soma += vet[i] # acumula a soma
    if len(vet) == 0: # evita divisão por zero
        return 0
    return soma / len(vet) # retorna a média

vet = [] # vetor vazio
N = int(input('Entre com uma quantidade: ')) # lê a quantidade de elementos
for i in range(N): # lê os elementos do vetor
    vet.append(int(input('Informe um número: '))) # adiciona o elemento ao vetor
media = media_vetor(vet)
print(f'Média: {media}')