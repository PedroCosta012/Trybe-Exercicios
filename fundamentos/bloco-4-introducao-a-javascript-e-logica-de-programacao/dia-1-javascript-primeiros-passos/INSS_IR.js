const salario = 3000;
let salarioAjustado;

if (salario <= 1556.94) {
    salarioAjustado = salario * 0.92;
} else if (salario <= 2594.92) {
    salarioAjustado = salario * 0.91;
} else if (salario <= 5189.82) {
    salarioAjustado = salario * 0.89;
} else {
    salarioAjustado = salario - 570.88;
}

if (salarioAjustado <= 2826.65) {
    salarioAjustado -= salarioAjustado * 0.075 - 142.8;
} else if (salarioAjustado <= 3751.05) {
    salarioAjustado -= salarioAjustado * 0.15 - 354.8;
} else if (salarioAjustado <= 4664.68) {
    salarioAjustado -= salarioAjustado * 0.225 - 636.13;
} else {
    salarioAjustado -= salarioAjustado * 0.275 - 869.36;
}

console.log("Sue salario, após deduções, equivale a: R$", salarioAjustado);