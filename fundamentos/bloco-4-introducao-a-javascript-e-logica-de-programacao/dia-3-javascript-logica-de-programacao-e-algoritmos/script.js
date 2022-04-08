let word = 'tryber';
let wordInvert = '';

for (let i = word.length - 1; i >= 0; i--) {
    wordInvert += word[i];
}

console.log(wordInvert);