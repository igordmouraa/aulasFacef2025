vet1 = []
vet2 = []
N = 50
vetSoma = []

for i in range(N):
    vet1.append(int(input('Informe um número para o vetor 1: ')))
for i in range(N):
    vet2.append(int(input('Informe um número para o vetor 2: ')))
for i in range(N):
    vetSoma.append(vet1[i] + vet2[i])
print(vetSoma)

