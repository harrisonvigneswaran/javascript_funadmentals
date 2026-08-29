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

//// Recrsion

function powers(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * powers(base, exponent - 1);
  }
}

console.log(powers(2, 3));


function countdown(n){
  if(n<0){
    return 0;
    } else {
      
      countdown(n-1);
      console.log(n)
  }
  
  }
countdown(2)

/// function will count all the sum of the numbers
function countIt(n){
  if (n==0){
    return 0;
  }else{
   return n + countIt(n-1)
  }
  }

  console.log(`${countIt(10)} "this is count"`);


// function that multiplies it self

function multiply(a,b){
  if (a==0 || b==0){
    return 0;
}else{
  return a +  multiply(a, b-1)
}

}
console.log(multiply(3,3))

//ffunctions that will return cows and chickens
/*
function printFarmInventory(cows, chickens) {
let cowString = String(cows);
while (cowString.length < 3) {
cowString = "0" + cowString;
}
console.log(`${cowString} Cows`);
let chickenString = String(chickens);
while (chickenString.length < 3) {
chickenString = "0" + chickenString;
}
console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

*/

//Add the pigs so we have to refactor functions

function zeroPad(number, width) {
let string = String(number);
while (string.length < width) {
string = "0" + string;
}
return string;
}
function printFarmInventory(cows, chickens, pigs) {
console.log(`${zeroPad(cows, 3)} Cows`);
console.log(`${zeroPad(chickens, 3)} Chickens`);
console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);