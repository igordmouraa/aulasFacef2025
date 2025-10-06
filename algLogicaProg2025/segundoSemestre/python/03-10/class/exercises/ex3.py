vet = []
N = int(input('Entre com uma quantidade: '))

soma = 0
for i in range(N):
    soma += vet[i]
media = soma / N

count = 0
for i in range(N):
    vet.append(int(input('Informe um número: ')))
    if vet[i] > 0:
        count += 1

print(f'Média Geral: {media}')
print(f'Quantidade de notas acima da média: {count}')
