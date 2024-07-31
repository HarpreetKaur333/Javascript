// JavaScript Memory Leak
// A memory leak occurs when a program retains memory that is no longer needed, 
// causing the application to use more memory over time.


//Closures

function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2



//Event Loop and Asynchronous Programming

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('End');

// Output:
// Start
// End
// Promise
// Timeout



//Prototypes and Inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
};

const john = new Person('John');
john.greet(); // Output: Hello, John




//*5. Higher-Order Functions
//Higher-order functions are functions that take other functions as arguments or return functions as their result.
function operateOn(a, b, operation) {
    return operation(a, b);
}
console.log(operateOn(2, 3, (x, y) => x + y)); // Output: 5

//Function Returning a Function:
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10

//Memory Management and Garbage Collection

//JavaScript uses automatic garbage collection to manage memory. The garbage collector identifies and frees up memory 
//that is no longer used by the program. It relies on algorithms to detect unreachable objects that can be removed.





//Strict Mode

//Strict mode is a way to opt into a restricted variant of JavaScript that eliminates some of the language's more error-prone features.
// It helps in catching common coding mistakes and prevents the use of some reserved keywords.

'use strict';
let x = 10;


//Async Iterators and Generators

//Async Iterators: Allow iteration over asynchronous data sources.
async function* asyncGenerator() {
    yield 'Hello';
    yield 'World';
}
(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})();


//Generators: Functions that can be paused and resumed, producing a sequence of values.
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2

