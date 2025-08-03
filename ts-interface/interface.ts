interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

interface Person {
    surname?: string; // символ ? означає, що параметр може бути пропущений
}

// Якщо визначити два interface з однаковими іменами, то вони об’єднаються в один. 

interface Employee {
    salary: number;
    position: string;
    department?: string;
}

// розширення одного інтерфейсу іншим
interface Chief extends Employee, Person {
    teamSize: number;
}

// встановлює обов’язкові властивості класу
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


type Name = Pick<PersonType, "name">; //Дозволяє обрати набір властивостей з існуючого типу і створити новий тип на їх основі
const myName: Name = { name: "John Doe" }

type IsActive = Omit<PersonType, "name" | "age">; //Дозволяє створити новий тип на основі типу шляхом виключення набору властивостей.
const active: IsActive = { isActive: true };

type Id = string | number;

const postId: Id = 123;
const employeeId: Id = "abc";

type Status = "active" | "inactive" | "pending";
const userStatus: Status = "active"