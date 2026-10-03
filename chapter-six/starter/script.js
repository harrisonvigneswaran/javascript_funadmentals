//Methods

let rabbit ={   }


rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
}

rabbit.speak("I'm alive.");

function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could go for a small animal right now.");

speak.call(whiteRabbit, "Burp!")

function normalize(){
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});

//prototypes

let protoRabbit = {
speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
};


let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'


protoRabbit.speak.call({type: "black"}, "Doom...");



function say(line){
    console.log(`The ${this.type} says '${line}'`);
}

dog = {type: "dog", say};
dog.say("Woof!");


//Exercise 2

let person ={
    age: 30,
    name: "John"
}


function introduce(){
    console.log(`Hi, my name is ${this.name}`);
}

introduce.call(person); // Hi, my name is John


//Exercise map 

function normalized(){
    console.log(this.values.map(n => n / this.divisor))
}

let numberss = {values: [10, 20, 30], divisor: 10};

normalized.call(numberss); // [1, 2, 3]

//prototype exercise

let animal={
    speaks(){
        console.log("The animal makes a sound")
    }
};

let dogs = Object.create(animal)

dogs.speaks()

//babyprototype
let babyprototype = {
    eat(food){
        console.log(`This ${this.type} baby says he wants '${food}'`)
    }
}

let killerBaby = Object.create(babyprototype)
killerBaby.type = "crying";
killerBaby.eat("pizza")

//classes and constrctors

let account1 = new BankAccount("harrison", 1000);
let account2 = new BankAccount("John", 500);

function BankAccount(owner,balance){
    this.owner =owner;
    this.balance = balance; 
}   

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

BankAccount.prototype.showBalance = function() {
  console.log(`${this.owner} has $${this.balance}`);
};
account1.deposit(500);
account1.showBalance();

//class examples

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving.`);
  }
}

let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");

car1.drive();

Car.prototype.move = function(){
    console.log(`${this.brand} ${this.model} is moving.`);
}

car1.move();


//maping 

let ages = new Map();
ages.set("Boris,39")
ages.set("Liang", 22)

console.log(ages.has("toString"));

//Polymorphisim

let dogss = {
    name: "Buddy",
    speakss() {
        console.log("Woof!");
    }
};

let cats = {
    name: "Mittens",
    speakss() {
        console.log("Meow!");
    }
};

let robots = {
    name: "R2D2",
    speakss() {
        console.log("Beep boop!");
    }
};

function makeItSpeak(thing){
    thing.speakss()
}

makeItSpeak(dogss);

//symbols

class Froggy{
    constructor(type){
        this.type =type
    }
    talk(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let blackFraggy= new Froggy("kiler")
let sym = Symbol("name")
console.log(sym == Symbol("name"))

Froggy.prototype[sym]=55
console.log(blackFraggy[sym])

// Getter, setters, statics

let people = {
    firstName: "Harrison",
    lastName: "Vigneswaran",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set myName(value){
        this.firstName = value;
}
};

console.log(people.fullName);


let varyingSize ={
    get size(){
        return Math.floor(Math.random() * 100);
    }
}

console.log(varyingSize.size);

person.firstName = "John";

console.log(person.firstName)

//Getters-Setters


class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let usualTemp = new Temperature(23)



let temp = Temperature.fromFahrenheit(86);



console.log(temp.celsius);

console.log(temp.fahrenheit)

console.log(usualTemp.fahrenheit)

//Inheritence

class Alien {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

let alien = new Alien("bobby");

alien.eat();
alien.sleep();

class Glip extends Alien{

}

let glip = new Glip("Glorp");

glip.eat();
glip.sleep();