const square = function (x) {
    return x * x
}

console.log(square(12));


const makeNoise = function () {
    console.log('Pling!')
}

makeNoise();


const roundTo = function (n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo(25, 10));


// variable scopes inside and outside functions
const halve = function (n) {
    return n / 2;
}
let n = 10;
console.log(halve(100));

console.log(n);

