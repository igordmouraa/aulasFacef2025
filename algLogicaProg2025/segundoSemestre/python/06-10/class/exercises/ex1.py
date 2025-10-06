def soma_vetor(vet): # função que soma os elementos de um vetor
    soma = 0
    for i in range(len(vet)): # percorre o vetor
        soma += vet[i] # acumula a soma
    return soma # retorna a soma

vet = [] # vetor vazio
N = int(input('Entre com uma quantidade: ')) # lê a quantidade de elementos
for i in range(N): # lê os elementos do vetor
    vet.append(int(input('Informe um número: '))) # adiciona o elemento ao vetor
soma = soma_vetor(vet)
print(f'Soma: {soma}')