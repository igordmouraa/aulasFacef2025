# Fazer uma função que retorne o maior elemento de um vetor.

def maior_vetor(vet): # função que retorna o maior elemento de um vetor
    if len(vet) == 0: # verifica se o vetor está vazio
        return None # retorna None se estiver vazio
    maior = vet[0] # assume que o primeiro elemento é o maior
    for i in range(1, len(vet)): # percorre o vetor a partir do segundo elemento
        if vet[i] > maior: # se encontrar um elemento maior
            maior = vet[i] # atualiza o maior
    return maior # retorna o maior elemento
vet = [] # vetor vazio
N = int(input('Entre com uma quantidade: ')) # lê a quantidade de elementos
for i in range(N): # lê os elementos do vetor
    vet.append(int(input('Informe um número: '))) # adiciona o elemento ao vetor
maior = maior_vetor(vet) # chama a função para encontrar o maior elemento
print(f'Maior: {maior}') # imprime o maior elemento