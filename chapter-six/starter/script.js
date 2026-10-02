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