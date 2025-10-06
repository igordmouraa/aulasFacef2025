vet = []
N = int(input('Informe a quantidade de elementos: '))
a, b = 1, 1

for i in range(N):
    if i < 2:
        vet.append(1)
    else:
        a, b = b, a + b
        vet.append(b)
print(vet)
