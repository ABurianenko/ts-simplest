// Для функцій, які завжди викидають помилку, або у нескінченних функціях

function throwError(message: string): never {
    throw new Error(message)
}

function infiniteLoop(): never {
    let index = 0;
    while (true) {
        index++;
        console.log(`I am an infinite loopa and I have looped ${index} times`);
    }
}

// infiniteLoop();

function unionTypesChecking(ourParameter: string|number) {
    if (typeof ourParameter === "string") {
        console.log(ourParameter.toUpperCase());
    } else if (typeof ourParameter === "number") {
        console.log(ourParameter+5);
    } else {
        ourParameter;
        console.log("I am not sure what you are");
    }
}

unionTypesChecking("Max");
unionTypesChecking(123);
// unionTypesChecking([apple, banana]) //Error