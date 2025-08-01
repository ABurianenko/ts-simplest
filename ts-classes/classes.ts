class Animal {
    public name: string;
    protected sound: string;
    protected legs: number;
    private readonly head: number;

    constructor(name: string, sound: string, legs: number) {
        this.name = name;
        this.sound = sound;
        this.legs = legs;
        this.head = 1;
    }

    public makeSound() {
        console.log(this.sound);
    }

    public numberOfLegs() {
        console.log(`I have ${this.legs} legs`);
    }

    headCount() {
        console.log(`I have ${this.head} head`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super (name, "Woof", 4)
    }

    public makeSound() {
        console.log("Bark");
    }
    
    public describe() {
        console.log(
            `I am a dog, my name is ${this.name} and I have ${this.legs} legs`
        );
    }
}

const dog = new Dog("Fluffy");

dog.describe();
dog.headCount();
dog.makeSound();

dog.name = 'Rex';
dog.describe();