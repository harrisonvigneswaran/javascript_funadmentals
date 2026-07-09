
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

/*
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/


////////////////////////////////////

/*
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function(birthYear){

    return 2037 -birthYear;
}


const age2 =calcAge2(1991);
console.log(age1, age2);



const calcAge3 = birthYear => 2037 - birthYear;
const age3= calcAge3(1991);
console.log(age3)




const yearsUntilRetirement = (birthYear, firstName)=> {
  const age= 2037 - birthYear;
  const retiremnt = 65-age;
  // return retiremnt
  return `${firstName} retires in ${retiremnt} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'))

function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
const clacAge = function(birthYear){
  return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName)=> {
  const age= clacAge(birthYear);
  const retiremnt = 65-age;
  // return retiremnt

  if (retiremnt > 0){
    return `${firstName} retires in ${retiremnt} years`;
  }else{
  return `${firstName} has already retired`;
}
}
console.log(yearsUntilRetirement(1934, 'Jonas'));

const calcAverage = (a,b,c) => ((a+b+c)/3);

function scoreDolphins (a,b,c){
    const daverage= calcAverage(a,b,c);
    return daverage;
}

function scoreKoalas (d,e,f){
    const daverages= calcAverage(d,e,f);
    return daverages;
}

function checkWinner(a,b,c,d,e,f){
    const dolScore = scoreDolphins(a,b,c);
    const kolScore = scoreKoalas(d,e,f);
    
    if (dolScore >= kolScore * 2){
      return `Dolphins win (${dolScore} vs. ${kolScore})`;  
    }else if(dolScore * 2 <= kolScore){
        return `Koalas  win (${kolScore} vs. ${dolScore})`;  
    }else{
       return `No team wins..`; 
    }
}
console.log(checkWinner(44,23,71,65,54,49));
console.log(checkWinner(85,54,41,23,34,27));

*/

// Introduction to Arrays

/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);

console.log(friends.length);

console.log(friends[friends.length - 1]); 


firends[2] = 'Jay';
console.log(friends);

// Exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];
firends.push('Jay'); // add element to the end of the array
console.log(friends);

friends.unshift('John'); // add element to the beginning of the array
console.log(friends);

// remove last element of the array
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

console.log(friends.indexOf('Steven')); // index of the element

console.log(friends.includes('Steven')); // check if element exists in the array 

*/

// Objects

/*

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}


console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);


const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const intrestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
if (jonas[intrestedIn]) {
  console.log(jonas[intrestedIn]);
} else{
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');nh
}
console.log(jonas[intrestedIn]);


jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age= 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function (){
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense? 'a' : 'no'} drivers license`;
  } 

}

console.log(jonas.calcAge());

 console.log(jonas.age);  

 console.log(jonas.getSummary());
 console.log('Jonas has ' + jonas.calcAge() + ' years old and he has ' + (jonas.hasDriversLicense? 'a' : 'no') + ' drivers license');
 