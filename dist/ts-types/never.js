"use strict";
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    let index = 0;
    while (true) {
        index++;
        console.log(`I am an infinite loopa and I have looped ${index} times`);
    }
}
// infiniteLoop();
function unionTypesChecking(ourParameter) {
    if (typeof ourParameter === "string") {
        console.log(ourParameter.toUpperCase());
    }
    else if (typeof ourParameter === "number") {
        console.log(ourParameter + 5);
    }
    else {
        console.log("I am not sure what you are");
    }
}
unionTypesChecking("Max");
unionTypesChecking(123);
// unionTypesChecking([apple, banana]) //Error
