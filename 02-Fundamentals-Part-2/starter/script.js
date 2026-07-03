
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