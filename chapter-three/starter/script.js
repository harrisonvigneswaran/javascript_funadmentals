/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');

console.log('23');


let firstName = 'Matilda';
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

console.log(typeof 23);
console.log(typeof 'Jonas');    

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year=1998;
console.log(year);
console.log(typeof year);

console.log(typeof null);

*/

/*
let age=30;
age=31;

const birthYear=1998;

var job='programmer';
job='teacher';
*/

/*
const ageJonas = 2037-1991;
const ageSarah = 2037-2018;
console.log(ageJonas, ageSarah);
*/

// The closure of the function is the scope in which it was created, not the scope in which it is called. 
// This means that a function always has access to the variable environment of the execution context. 
// which it was created, even after that execution context is gone.
/*
function multiplier(factor) {
    return (number, hi) => hi * number * factor;
}

let twice = multiplier(2);
console.log(twice(5, 10));
// → 100
*/