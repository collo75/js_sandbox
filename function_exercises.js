// Exercise one - minimum

let minimum = (a, b) => a < b ? a : b;
console.log(minimum(7, 5));

// Exercise two - recursion - isEven

function isEven(n) {
    if (n === 0) {
        return true;  // Base case: 0 is even
    } else if (n === 1) {
        return false; // Base case: 1 is odd
    } else if (n < 0) {
        return isEven(-n); // Handle negative numbers by converting to positive
    } else {
        return isEven(n - 2); // Recursive case
    }
}
console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-11)); // false (after handling negative numbers)


// Exercise three - Bean Counting
const string = "Billy Bunter had Baked beans for Bloody Breakfast."
console.log(countB(string));
function countB(string) {
    let count = 0;
    for (let char of string) {
        if (char === "B") {
            count++;
        }
    }
    return count;
}

console.log(countChars(string, "o"));
function countChars(string, letter) {
    let count = 0;
    for (let char of string) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}


