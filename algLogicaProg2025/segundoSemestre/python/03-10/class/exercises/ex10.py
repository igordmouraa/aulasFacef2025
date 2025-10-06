vet = []
N = 30
vetInvertido = []

for i in range(N):
    vet.append(int(input('Informe um número: ')))
    vetInvertido.insert(0, vet[i])
    
print(vetInvertido)
print(vet[::-1])