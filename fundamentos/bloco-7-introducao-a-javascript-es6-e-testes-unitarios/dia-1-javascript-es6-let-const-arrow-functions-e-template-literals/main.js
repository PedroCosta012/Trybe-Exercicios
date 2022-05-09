// Parte 1
// Exercício 1

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Parte 2
// Exercício 1

const fatorial = num => {
    let resp = 1
    for (let i = 1; i <= num; i += 1) {
        resp *= i;
    }
    return resp;
}


// Exercício 2

const biggestWord = frase => {
    frase.replace(/,/g, '');
    let arrayFrase = frase.split(' ');
    let biggest = arrayFrase[0];
    for (let word of arrayFrase) {
        if (word.length > biggest.length) {
            biggest = word;
        }
    }
    return biggest;
}
