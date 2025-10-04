vet = [] # Inicializa um vetor vazio
N = int(input('Entre com uma quantidade: ')) # Define o tamanho do vetor
 
for i in range(N): # O programa vai pedir exatamente N números
    vet.append(int(input('Informe um número: ')))

print('\nVetor:')
for i in range(N): # Acessa cada elemento do vetor individualmente
    print(vet[i])

print('\nVetor')
print(vet)
