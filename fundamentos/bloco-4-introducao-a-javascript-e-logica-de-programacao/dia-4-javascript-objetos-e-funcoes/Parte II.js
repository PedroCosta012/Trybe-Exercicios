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

// Exercício 3
function menorNum(array) {
    let menor = 0;

    for (let i in array) {
        if (array[i] < array[menor]) {
            menor = i;
        }
    }
    return menor;
}

// Exercício 4
function biggestName(array) {
    let maiorNome = array[0];
    for (let name of array) {
        if (name.length > maiorNome.length) {
            maiorNome = name;
        }
    }
    return maiorNome;
}

// Exercício 5
function mostRepeated(arrayRepeticoes) {
    let dataFull = [];
    
    for (let num of arrayRepeticoes) {
        dataFull.push([num, 0]);
        for (let num2 of arrayRepeticoes) {
            dataFull[dataFull.length - 1][1] += 1;
        }
    }
    let maiorRep = dataFull[0][1];
    let maiorNum = dataFull[0][0];

    for (let biggest of dataFull) {
        if (biggest[1] > maiorRep) {
            maiorNum = biggest[0];
        }
    }
    return maiorNum;
}

// Exercício 6
function somaCascata(repetidor) {
    let soma = 0;
    for (let i = 0; i <= repetidor; i++) {
        soma += i;
    }
    return soma;
}

// Exercício 7
function confereFinal(word, endWord) {
    for (let i = 0; i < endWord.length; i++) {
        if (word[word.length - i] !== endWord[endWord.length - i]) {
            return false;
        }
    }
    return true;
}
