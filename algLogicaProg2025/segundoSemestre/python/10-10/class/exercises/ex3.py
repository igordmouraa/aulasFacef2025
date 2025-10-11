def calcular_digitos_verificadores(cpf):
    soma1 = sum(int(cpf[i]) * (10 - i) for i in range(9))
    resto1 = soma1 % 11
    if resto1 == 0 or resto1 == 1:
        digito1 = 0
    else:
        digito1 = 11 - resto1

    soma2 = sum(int(cpf[i]) * (11 - i) for i in range(9)) + digito1 * 2
    resto2 = soma2 % 11
    if resto2 == 0 or resto2 == 1:
        digito2 = 0
    else:
        digito2 = 11 - resto2

    return digito1, digito2
def cpf_valido(cpf):
    if len(cpf) != 11 or not cpf.isdigit():
        return False

    digito1, digito2 = calcular_digitos_verificadores(cpf)
    return int(cpf[9]) == digito1 and int(cpf[10]) == digito2
def main():
    cpf = input('Digite o número do CPF (apenas números): ')
    if cpf_valido(cpf):
        print('CPF válido.')
    else:
        print('CPF inválido.')