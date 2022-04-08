let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = ['', -1];
let menor = ['', 999999];

for (var i = 0; i < array.length; i++) {
    let analysis = array[i].length;
    if (analysis > maior[1]) {
        maior[0] = array[i];
        maior[1] = analysis;
    } else if (analysis < menor[1]) {
        menor[0] = array[i];
        menor[1] = analysis;
    }
}
console.log('A menor palavra encontrada foi ' + menor[0] + ' com ' + menor[1] + ' letras, e a maior palavra encontrada foi ' + maior[0] + ' com ' + maior[1] + ' letras.');