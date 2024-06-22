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


// Function declaration
console.log("the future says:", future());

function future() {
    return "You'll never have flying cars";
}


// Arrow functions
const roundTwo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTwo(25, 10));

// These two are exactly the same:
const square1 = (x) => { return x * x };
const square2 = x => x * x;

console.log(square1(2), square2(3));

// no parameters, just use empty parenthesis
const horn = () => console.log("Toot!");
horn();


// Optional arguments
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(5));
console.log(minus(23, 16));


// providing a default value
const roundTo2 = (n, step =1) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo2(27.6, 2));
console.log(roundTo2(27.8));


// Closure
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());


function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(3);
console.log(twice(5));


// Recursion
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 4));


function sumRange(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sumRange(n - 1);
    }
}

console.log(sumRange(5)); // 15 (5 + 4 + 3 + 2 + 1 + 0)


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ??
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));

// Farm Inventory example
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`)
    console.log(`${zeroPad(chickens, 3)} Chickens`)
    console.log(`${zeroPad(pigs, 3)} Pigs`)
}

printFarmInventory(7, 16, 3);