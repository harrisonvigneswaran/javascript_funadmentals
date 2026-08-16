'use strict';

for (let line = "#"; line.length <= 7; line += "#") {
  console.log(line);
}

for(let num = 1; num <= 100; num++) {
  if(num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if(num % 3 === 0) {
    console.log("Fizz");
  } else if(num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}


let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
            board += "#";
        } else {
            board += " ";
        }
    }

    board += "\n";
}

console.log(board);