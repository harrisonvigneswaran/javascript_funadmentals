let listOfNumbers = [2, 3, 5, 7,11];

console.log(listOfNumbers);

// Methods

let sequence = [1,2,3]

sequence.push(4); // adds 4 to the end of the array
console.log(sequence);  

//Objects

let day1 ={
    squirrel:false,
    events:["work", "touched tree", "pizza", "running"]     

}

day1.wolf = false; // adds a new property to the object
console.log(day1);


let descriptions = {
    work: "Went to work",
    touchedTree: "Touched a tree",
    pizza: "Ate pizza",
    running: "Went for a run"
};

console.log("work" in descriptions); // checks if the property exists in the object

console.log(Object.keys(descriptions)); // gets an array of all property names in the object

console.log(Object.keys({x: 0, y: 0, z: 2}));// gets an array of all property names in the object

Object.assign(descriptions, {exercise: "Went for a walk"}); // adds a new property to the object
console.log(descriptions);

// Arrays with objects

let journal = [
    {events: ["work", "touched tree", "pizza", "running"], squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasagna"], squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts"], squirrel: true}
];

console.log(journal[1].events); // accesses the events property of the second object in the array


//Mutability

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10