interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

interface Person {
    surname?: string;
}

interface Employee {
    salary: number;
    position: string;
    department?: string;
}

interface Chief extends Employee, Person {
    teamSize: number;
}

class Manager implements Person, Employee {
    name: string;
    age: number;
    isActive: boolean;
    salary: number;
    position: string;
    department?: string;

    constructor(name: string, age: number, isActive: boolean, salary: number, position: string, department?: string) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
}


class BigBoss implements Chief {
    name: string;
    surname?: string;
    age: number;
    isActive: boolean;
    salary: number;
    position: string;
    department?: string;
    teamSize: number;

    constructor(name: string, age: number, isActive: boolean, salary: number, position: string, teamSize: number,department?: string, surname?:string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isActive = isActive;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.teamSize = teamSize;
    }
}

type PersonType = {
    name: string;
    age: number;
    isActive: boolean;
}

type EmployeeType = PersonType & {
    salary: number;
    position: string;
    department?: string;
}

type ManagerType = EmployeeType & {
    teamSize: number;
}

const bigBoss: ManagerType = {
    name: "John Doe",
    age: 28,
    isActive: true,
    salary: 100000,
    position: "CEO",
    teamSize: 25,
}

console.log(bigBoss);


type Name = Pick<PersonType, "name">;
const myName: Name = { name: "John Doe" }

type IsActive = Omit<PersonType, "name" | "age">;
const active: IsActive = { isActive: true };

type Id = string | number;

const postId: Id = 123;
const employeeId: Id = "abc";

type Status = "active" | "inactive" | "pending";
const userStatus: Status = "active"