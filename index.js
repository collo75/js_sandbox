console.log("Hello World!");


console.log(biggestNumber(124, 89));
function biggestNumber(a, b) {
    return (a > b) ? a : b;
}



console.log(isLandscape(800,400))
function isLandscape(width, height) {
    return (width > height);
}

// FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a Number'


const output = fizzBuzz(24);
console.log(output);

function fizzBuzz(input) {
    if (isNaN(input)) 
        return NaN

    if (input % 3 == 0 && input % 5 == 0) 
        return "FizzBuzz";

    if (input % 3 == 0) 
        return "Fizz";

    if (input % 5 == 0) 
        return "Buzz";

    return input;
}

// checkSpeed
// Speed limit = 70
// 5km over => 1 point
// Math.floor(1.3)
// 12 points = suspended

const warning = checkSpeed(85);
console.log(warning);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        return "You're doing fine";
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        return "You're suspended";
    
    return "You're speeding at " + speed + "km/h, and now you have "
        + points + " points on your licence"
}



// showNumbers
// Display all numbers up to "limit" and state if ODD or EVEN

showNumbers(8);

function showNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        const message = (i % 2 !== 0) ? "ODD" : "EVEN";
        console.log(i, message)
    }
}


// countTruthy
// Truthy or Falsy

const array = [1, 2, 3, true];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}


// showProperties
// List all propoerties of an object that have the type 'string'

const movie = {
    Title: 'Braveheart',
    ReleaseYear: 1996,
    Rating: 9,
    Director: 'Mel Gibson'
}

showProperties(movie);
function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}


// sum function
// add all the multiples of 3 and 5 up to the specified limit

console.log(sum(20));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}


// Average Grade
// take the average grade and give it a symbol A, B, C etc
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [90, 80, 98, 2, 90, 80, 98, 95]
console.log(calculateGrade(marks))

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    return "A";
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}



// Show stars exercise
showStars(6);

function showStars(rows) {
    for (let row = 0; row <= rows; row++) {
        console.log("*".repeat(row))
    }
}




// showPrimes
// List all prime numbers up to the limit provided

showPrimes(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log("draw");
    }
}

circle.draw();

// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);


// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle3 = new Circle(1);
console.log(circle3);


// get random number using Math.random()
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const randomNumber = getRandomNumber(2, 5);
console.log(randomNumber);


// Template Literals
// Perfect for situations where the text is dynamic and 
// may include formatting such as emails to users etc

const literalMessage = 
`This is my
'first' message`;

console.log(literalMessage);



// Exercise one - address

const address = {
    street: 'Hawcross',
    city: 'Gloucester',
    zipCode: 'GL16 3RT',
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

// Exercise two - address with factory and constructor function

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const address2 = createAddress('a','b','c');
console.log(address2);

// Constructor Function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address3 = new Address('aa', 'bb', 'cc');
console.log(address3);

// Exercise three - create two identical objects and test 
// a) to see if all their properties are equal - areEqual
// b) to see if the two objects are pointing to the exact same object - areSame

const address4 = new Address('aa', 'bb', 'cc');
console.log(address4);

function areEqual(address3, address4) {
    for (let key in address3) {
        if (address3[key] === address4[key])
            return 'True'
        else
            return 'False'
    }
}
console.log(areEqual(address3, address4));

function areSame(address3, address4) {
    return address3 === address4;
}
console.log(areSame(address3, address4));

// Exercise 4 - Blog post object

const blog = {
    title: 'The worst blog post in history',
    body:
        `There are so many things I'd liek to say in this post. But I won't.
    
        Too many blog posts are full of rubbish, so this will not be another`,
    author: 'Joe Bloggs',
    views: 587,
    comments: [
        { author: 'Jimmy',body: 'This is the worst blog post I have ever read!!' },
        { author: 'Johnny', body: 'This is the second worst blog post I have ever read!!' },
    ],
    isLive: true,
}

console.log(blog)


// Exercise 5 - Constructor Functions
// Write a blog post object that isn't published yet

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post = new Post('My Title', 'This would be the body', 'Jimmy Smits');
console.log(post);

// Exercise 6 - price range
function createPriceRange(tooltip, minPrice, maxPrice, label) {
    return {
        tooltip,
        minPrice,
        maxPrice,
        label
    };
}

const inexpensive = createPriceRange('Inexpensive', 0, 100, '£');
const pricey = createPriceRange('Pricey', 101, 300, '££');
const expensive = createPriceRange('Expensive', 301, 10000000, '£££');
console.log(inexpensive);
console.log(pricey);
console.log(expensive);


// This is the way Mosh did it:

const priceRanges = [
    { tooltip: 'Inexpensive', minPrice: 0, maxPrice: 10, label: '£' },
    { tooltip: 'Pricey', minPrice: 11, maxPrice: 20, label: '££' },
    { tooltip: 'Expensive', minPrice: 21, maxPrice: 50, label: '£££' },
]

console.log(inexpensive);
console.log(pricey);
console.log(expensive);