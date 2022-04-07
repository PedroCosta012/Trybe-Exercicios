const a = 12;

switch (a) {
    case (a > 0):
        console.log('Este número é positivo!');
        break;
    case (a < 0):
        console.log('Este número é negativo!');
        break;
    case (a === 0):
        console.log('Este número é igual a 0!');
        break;
    case (a == 0):
        console.log('Isto não é um número, mas é igual a 0!');
        break;
    default:
        console.log('Entrada inválida, tente novamente com outro valor!');
        break;
}