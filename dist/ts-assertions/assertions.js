"use strict";
const headerElement = document.getElementById("test-header");
console.log(headerElement.textContent);
console.log(headerElement.textContent);
console.log(headerElement?.textContent);
function fetchUesr() {
    return {
        name: "John",
        age: 30,
    };
}
const data = fetchUesr();
const ourUser = data;
console.log(ourUser.name);
const summ = (a, b) => {
    return a + b;
};
console.log(summ(10, "123"));
