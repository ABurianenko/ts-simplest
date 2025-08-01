"use strict";
class Animal {
    constructor(name, sound, legs) {
        this.name = name;
        this.sound = sound;
        this.legs = legs;
        this.head = 1;
    }
    makeSound() {
        console.log(this.sound);
    }
    numberOfLegs() {
        console.log(`I have ${this.legs} legs`);
    }
    headCount() {
        console.log(`I have ${this.head} head`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, "Woof", 4);
    }
    makeSound() {
        console.log("Bark");
    }
    describe() {
        console.log(`I am a dog, my name is ${this.name} and I have ${this.legs} legs`);
    }
}
const dog = new Dog("Fluffy");
dog.describe();
dog.headCount();
dog.makeSound();
dog.name = 'Rex';
dog.describe();
