const a = 90;
const b = 90;
const c = 90;

if (a < 0 || b < 0 || c < 0) {
    console.log("Invalid value!");
} else if (a + b + c === 180) {
    console.log(true);
} else {
    console.log(false);
}