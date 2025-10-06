vet = []
N = 30
vetNovo = []

for i in range(N):
    vet.append(int(input('Informe um número: ')))
    if i % 2 == 0:
        vetNovo.append(vet[i] * 2)
    else:
        vetNovo.append(vet[i] * 3)
print(vetNovo)
