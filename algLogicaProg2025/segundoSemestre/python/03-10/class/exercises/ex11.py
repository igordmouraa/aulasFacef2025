vet = []
N = 20
vetPares = []
vetImpares = []

for i in range(N):
    vet.append(int(input('Informe um número: ')))
    if vet[i] % 2 == 0:
        vetPares.append(vet[i])
    else:
        vetImpares.append(vet[i])

print('Números pares:', vetPares)
print('Números ímpares:', vetImpares)

