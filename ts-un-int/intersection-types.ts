type Car = {
    wheels: number;
    engine: string;
}

type Boat = {
    sails: number;
    engine: string;
}

type Amphibia = Car & Boat; //об’єднує декілька типів в один

const superVehicle: Amphibia = {
    wheels: 4,
    sails: 2,
    engine: "V8",
}

console.log(superVehicle);
