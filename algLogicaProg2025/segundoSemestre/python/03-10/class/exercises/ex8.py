vet = []
N = 20

for i in range(N):
    vet.append(int(input('Informe um número: ')))

maior = vet[0]
menor = vet[0]

for i in range(1, N):
    if vet[i] > maior:
        maior = vet[i]
    if vet[i] < menor:
        menor = vet[i]
        
print(f'Maior número: {maior}')
print(f'Menor número: {menor}')