type DayOfWeekLiteral = 
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"

function isWorkDayWithLiteral(day: DayOfWeekLiteral) {
    switch (day) {
        case "Saturday":
        case "Sunday": 
            return "It is a weekend"
    
        default:
            return "It is a workday"
    }
}

console.log(isWorkDayWithLiteral("Monday"));
console.log(isWorkDayWithLiteral("Sunday"));