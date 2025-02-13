// 1. Write a function that takes three numbers as input and returns the largest number.

function findMax(a, b, c) {  
    return Math.max(a, b, c);  
}  

console.log(findMax(10, 25, 5)); // Output: 25  

// 2. What will be the output of this code? Fix it to work correctly.
function testScope() {  
    console.log(x); // ❓  X
    var x = 10;  
}  
testScope();

// This will print undefined due to hoisting.


// 3. Function Hoisting: What Happens Here?
greet();  // Hello, World

function greet() {  
    console.log("Hello, World!");   
}


// 4. Function Expression Hoisting: Fix the Error
hello();  

var hello = function() {  
    console.log("Hi!");  
};
// ❌ Error: hello is not a function

//  IIFE (Immediately Invoked Function Expression)
(function() {  
    console.log("I am an IIFE!");  
})();

// I am an IIFE!
