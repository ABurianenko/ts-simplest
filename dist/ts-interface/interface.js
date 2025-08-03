"use strict";
class Manager {
    constructor(name, age, isActive, salary, position, department) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
}
class BigBoss {
    constructor(name, age, isActive, salary, position, teamSize, department, surname) {
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
const bigBoss = {
    name: "John Doe",
    age: 28,
    isActive: true,
    salary: 100000,
    position: "CEO",
    teamSize: 25,
};
console.log(bigBoss);
const myName = { name: "John Doe" };
const active = { isActive: true };
const postId = 123;
const employeeId = "abc";
const userStatus = "active";
