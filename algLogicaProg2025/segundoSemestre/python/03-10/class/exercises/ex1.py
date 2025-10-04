vet = []
N = int(input('Entre com uma quantidade: '))

for i in range(N):
    vet.append(int(input('Informe um número: ')))

# somar todos os elementos do vetor
soma = 0
for i in range(N):
    soma += vet[i]
print(f'Soma: {soma}') # 