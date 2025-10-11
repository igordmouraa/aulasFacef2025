# Fazer, em python, o programa principal e dois subprogramas (funções):
# - Encontrar o maior valor de um vetor;
# - Encontra o segundo maior valor de um vetor.

def maior_valor(vet):
    maior = vet[0]
    for num in vet:
        if num > maior:
            maior = num
    return maior

def segundo_maior_valor(vet):
    maior = maior_valor(vet)
    segundo_maior = None
    for num in vet:
        if num != maior:
            if segundo_maior is None or num > segundo_maior:
                segundo_maior = num
    return segundo_maior

def main():
    vet = []
    N = int(input('Entre com uma quantidade: '))
    for i in range(N):
        vet.append(int(input('Informe um número: ')))
    maior = maior_valor(vet)
    segundo_maior = segundo_maior_valor(vet)
    print(f'Maior valor: {maior}')
    print(f'Segundo maior valor: {segundo_maior}')

