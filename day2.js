// MATHEMATICAL OPERATORS
let sum = 5 + 3;
let diff = 5-3;
let product = 5*3;
let quotient = 10/3;
let remainder = 10 % 3;

console.log(sum. diff, product, quotient, remainder);

// STRING CONCATENATION

let greeting = "Hello" + " " + "World";
let name = "Alex";
let message = "Hi, " + name + "!";
let message2 = `Hi, ${name}!`;

console.log(greeting);
console.log(name);
console.log(message);
console.log(message2);

// EXERCISE: Write code that:
//              Stores two numbers in variables
//              Adds them and logs the result
//              Compares them and logs a sentence saying which is bigger

let num1 = 5;
let num2 = 3;
sum = num1 + num2;
console.log(`Sum is ${sum}.`);

if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
} else if (num2 > num1) {
    console.log(`${num2} is bigger than ${num1}.`);
} else {
    console.log("Both are equal.");
} 