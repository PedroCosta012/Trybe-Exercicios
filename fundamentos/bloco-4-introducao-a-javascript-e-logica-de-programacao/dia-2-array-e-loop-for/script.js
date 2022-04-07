let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let number of numbers) {
    if (number % 2 !== 0) {
        impares += 1;
    }
}

if (impares === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log('Foram encontrados ' + impares + ' números impares.');
}