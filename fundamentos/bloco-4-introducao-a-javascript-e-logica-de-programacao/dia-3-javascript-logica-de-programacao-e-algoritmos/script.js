const numLimit = 50;
let primo = 1;
let analize = true;

for (var i = 1; i <= numLimit; i++) {
    for (var j = 2; j < i; j++) {
        let divisivel = i % j;
        if (divisivel === 0) {
            analize = false;
        }
    }
    if (analize) {
        primo = i;
    } else {
        analize = true;
    }
}
console.log('O maior número primo encontrado foi: ' + primo);