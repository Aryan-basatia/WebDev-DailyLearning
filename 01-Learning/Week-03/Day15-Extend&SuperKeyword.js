class Animal{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
}

class Cat extends Animal{
    meow(){
        return `Meow`;
    }
}
class Dog extends Animal{
    constructor(name,age,livesLeft = 9) {
        super(name,age);
        this.livesLeft = livesLeft;

    }
    bark(){
        return `Woof`;
    }
}

const tiger = new Dog();
