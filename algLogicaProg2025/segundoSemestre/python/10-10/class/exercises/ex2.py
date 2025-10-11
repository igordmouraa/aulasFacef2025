# Fazer uma função que receba o valor de N como parâmetro, calcular e retorne o valor do somatório S: 
# S = 1 + 2/4 + 3/9 + 4/16 + ... + N/N2

def somatorio(N):
    S = 0
    for i in range(1, N + 1):
        S += i / (i ** 2)
    return S

def main():
    N = int(input('Entre com um valor para N: '))
    resultado = somatorio(N)
    print(f'O somatório S é: {resultado}')

    
