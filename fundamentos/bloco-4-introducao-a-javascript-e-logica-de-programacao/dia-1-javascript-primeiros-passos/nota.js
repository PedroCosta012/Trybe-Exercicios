const nota = 92;

if (nota > 100 || nota < 0) {
    console.log("Este valor é impossível.Tente novamente com outro!")
} else if (nota >= 90) {
    console.log("Sua nota é: A");
} else if (nota >= 80) {
    console.log("Sua nota é: B");
} else if (nota >= 70) {
    console.log("Sua nota é: C");
} else if (nota >= 60) {
    console.log("Sua nota é: D");
} else if (nota >= 50) {
    console.log("Sua nota é: E");
} else {
    console.log("Sua nota é: F");
}
