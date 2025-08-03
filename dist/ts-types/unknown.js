"use strict";
let something = "I am a string";
if (typeof something === "string") {
    console.log(something.toUpperCase());
}
something = 5;
if (typeof something === "number") {
    console.log(something + 10);
}
something = true;
