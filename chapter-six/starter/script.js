//Abstraction

function repeat(n,action) {
    for (let i = 0; i < n; i++) {{
        action(i);
    }}  
}

let labels = [];

//Running the function and pushing rather then using pre defined function
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
}); 

console.log(labels); // ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5']

// high-order function

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };  
}

noisy(Math.min)(3, 2, 1); 
// calling with [3, 2, 1] 
// called with [3, 2, 1] , returned 1

//function that controls flow

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => { 
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

let numbers=[1, 2, 3, 4, 5];
console.log(numbers.reduce((a, b) => a + b, 7)); // 15
