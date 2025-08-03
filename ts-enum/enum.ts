enum DayOfWeek {
    Monday = "Monday",
    Tueasday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
}

function isWorkDay(day: DayOfWeek) {
    switch (day) {
        case DayOfWeek.Saturday:
        case DayOfWeek.Sunday:
            return "It is a weekend";
        default: 
            return "It is a workday"
    }
}

console.log(isWorkDay(DayOfWeek.Monday));
console.log(isWorkDay(DayOfWeek.Sunday));

// console.log(isWorkDay("Monday")); //Error


