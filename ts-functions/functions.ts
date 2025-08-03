// визначає типи параметрів функції та значення, що повертається

function sum(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
}

console.log("sum: ", sum(1, 2));

const multiply = (numberOne: number, numberTwo: number): number => {
    return numberOne * numberTwo;
}

console.log("multiply: ", multiply(3, 2));

function sayHello(name = "TypeScript"): string {
    return `Hello, ${name}`
}

console.log(sayHello());
console.log(sayHello("World"));

function sayHelloOptional(name?: string): string {
    return `Hello, ${name || ''}`
}

console.log(sayHelloOptional());
console.log(sayHelloOptional("Galaxy"));

function ourOwnLog(message: string): void {
    console.log(message);
}

ourOwnLog("Hi everyone!")

function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, number) => acc + number, 0)
}

console.log(sumAllNumbers(1, 2, 3, 4, 5));

type MathFunction = (numberOne: number, numberTwo: number) => number;

const divide: MathFunction = (numberOne, numberTwo) => numberOne / numberTwo;
const subtract: MathFunction = (numberOne, numberTwo) => numberOne - numberTwo;

console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(subtract(2, 3));
