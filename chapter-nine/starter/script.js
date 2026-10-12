//Regular Expression

let re1= new RegExp("abc")

let re2 = /abc/;


//Special Charcters

let eighteenPlus = /eighteen\+/;

//Testing for Matches this is checking the sequnce
console.log(/abc/.test("abcde"))

console.log(/abc/.test("abxde"))

//checking for an individual charcter
console.log(/[0123456789]/.test("in 1992"));

//Checking date 
//let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
//console.log(dateTime.test("01-30-2003 15:20"));

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));

//Matching zero or more then one 

console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"))
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

//the ? makes it hard 

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true

// We can use the {} to use as a repeat sequnece and adjust the date
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true


let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

//Boundaries

console.log(/cat/.test("concatenate"));
// → true

console.log(/\bcat\b/.test("concatenate"));
// → false

//Choice Patterns 
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false

//Replace
console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar