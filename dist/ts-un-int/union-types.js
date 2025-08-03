"use strict";
let userId;
userId = 123;
userId = "Max";
// userId = true //Error
const greetUser = (user) => {
    if (typeof user === "string") {
        console.log("Hello, " + user.toUpperCase());
    }
    if (typeof user === "number") {
        console.log(`Hello, user with id ${user}`);
    }
};
greetUser("Max");
greetUser(123);
