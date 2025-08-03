"use strict";
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tueasday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
    DayOfWeek["Sunday"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWorkDay(day) {
    switch (day) {
        case DayOfWeek.Saturday:
        case DayOfWeek.Sunday:
            return "It is a weekend";
        default:
            return "It is a workday";
    }
}
console.log(isWorkDay(DayOfWeek.Monday));
console.log(isWorkDay(DayOfWeek.Sunday));
// console.log(isWorkDay("Monday")); //Error
