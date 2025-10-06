vet = []
N = 50
soma = 0
for i in range(N):
    vet.append(float(input('Informe uma nota: ')))
    soma += vet[i]
media = soma / N

countAcima = 0
countAbaixo = 0
for i in range(N):
    if vet[i] > media * 1.1:
        countAcima += 1
    elif vet[i] < media * 0.9:
        countAbaixo += 1

print(f'Notas acima de 10% da média: {countAcima}')
print(f'Notas abaixo de 10% da média: {countAbaixo}')

