"use strict";
function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log("sum: ", sum(1, 2));
const multiply = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
};
console.log("multiply: ", multiply(3, 2));
function sayHello(name = "TypeScript") {
    return `Hello, ${name}`;
}
console.log(sayHello());
console.log(sayHello("World"));
function sayHelloOptional(name) {
    return `Hello, ${name || ''}`;
}
console.log(sayHelloOptional());
console.log(sayHelloOptional("Galaxy"));
function ourOwnLog(message) {
    console.log(message);
}
ourOwnLog("Hi everyone!");
function sumAllNumbers(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}
console.log(sumAllNumbers(1, 2, 3, 4, 5));
const divide = (numberOne, numberTwo) => numberOne / numberTwo;
const subtract = (numberOne, numberTwo) => numberOne - numberTwo;
console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(subtract(2, 3));
