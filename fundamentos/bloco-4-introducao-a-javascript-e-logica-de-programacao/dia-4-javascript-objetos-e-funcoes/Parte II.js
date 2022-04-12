const frase = 'A base do teto desaba';

function palindrome(texto) {
    let manip = [];
    let original = [];
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != ' ') {
            manip.push(texto[i].toLowerCase());
            original.unshift(texto[i].toLowerCase());
        }
    }

    let deuCerto = true;

    for (let j = 0; j < manip.length; j++) {
        if (original[j] !== manip[j]) {
            return false;
        }
    }

    if (deuCerto) {
        return true;
    }
}

// console.log(palindrome(frase));

// Exercício 2
const arrayNum = [10, 90, 23, 56, 53, 45, 46];

function maiorNum(array) {
    let maior = 0;

    for (let i in array) {
        if (array[i] > array[maior]) {
            maior = i;
        }
    }
    return maior;
}

// console.log(maiorNum(arrayNum));

// Exercício 3
const arrayNumero = [10, 3, 23, 56, 53, 45, 46];

function menorNum(array) {
    let menor = 0;

    for (let i in array) {
        if (array[i] < array[menor]) {
            menor = i;
        }
    }
    return menor;
}

console.log(menorNum(arrayNumero));

// Exercício 4
const names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(array) {
    let maiorNome = array[0];
    for (let name of names) {
        if (name.length > maiorNome.length) {
            maiorNome = name;
        }
    }
    return maiorNome;
}