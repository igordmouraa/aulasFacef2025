def calcularMedia(notas):
    somaNotas       = 0
    quantidadeNotas = 0

    for nota in notas:
        quantidadeNotas += 1
        somaNotas       += nota

    if quantidadeNotas > 0:
        return somaNotas / quantidadeNotas
    else:
        return 0

notas = []
N = int(input('Informe a quantidade de alunos na turma: '))

for i in range(N):
    nota = float(input(f'Informe a nota do aluno {i + 1}: '))
    notas.append(nota)

media = calcularMedia(notas)
print(f'\nMédia da turma: {media:.2f}')

print(f'Notas acima da média:')

for nota in notas:
    if nota > media:
        print(f'{nota:.2f}')
