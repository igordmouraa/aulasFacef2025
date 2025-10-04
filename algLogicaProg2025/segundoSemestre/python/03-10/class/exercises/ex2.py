vet = []
N = int(input('Entre com uma quantidade: '))

for i in range(N):
    vet.append(int(input('Informe um número: ')))

soma = 0
for i in range(N):
    soma += vet[i]

media = soma / N
print(f'Média: {media}')    