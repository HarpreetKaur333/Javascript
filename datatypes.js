// What are JavaScript Data Types?
// Question: List and explain the different data types in JavaScript.

// Answer:

// Primitive Types:

// String: Represents text.
// Number: Represents numeric values (integer and floating-point).
// Boolean: Represents true or false values.
// Undefined: Represents a variable that has been declared but not assigned a value.
// Null: Represents the intentional absence of any value.
// Symbol: Represents a unique and immutable value (ES6).
// BigInt: Represents integers with arbitrary precision (ES11).
// Non-Primitive Type:

// Object: Represents collections of key-value pairs. Includes Arrays, Functions, and more.


// What is the Difference Between null and undefined?

// null: Represents an intentional absence of any object value. It is assigned to variables as a 
//placeholder for an object that is expected to be assigned later.

let obj = null;
console.log(obj); // Output: null
//undefined: Indicates that a variable has been declared but has not yet been assigned
// a value. It is the default value of variables that are not initialized.
let foo;
console.log(foo); // Output: undefined

console.log(null == undefined);  // Output: true (loose equality)
console.log(null === undefined); // Output: false (strict equality)



//Objects in JavaScript?
//Plain Object ({}): 
let person = {
    name: 'John',
    age: 30
};

//array object
let numbers = [1, 2, 3, 4];

//function 
function greet() {
    console.log('Hello!');
}

//date objectlet
 now = new Date();

 //RegExp: Represents regular expressions for pattern matching.
 let regex = /abc/;

 //map
 let map = new Map();
map.set('key', 'value');


//set object
let set = new Set([1, 2, 2, 3]);





//Type Coercion Work in JavaScript?
//String Coercion:

let result1 = '5' + 1; // Output: '51' (string concatenation)

//Number Coercion:
let result2 = '5' - 1; // Output: 4 (string '5' is coerced to number 5)

//let result = Boolean(0); // Output: false
let result3 = Boolean(1); // Output: true

let result4 = Boolean(0); // Output: false
let result5 = Boolean(1); // Output: true


//Array.isArray() and instanceof Array?

//Array.isArray(): A method that returns true if the value is an array and false otherwise. 
console.log(Array.isArray([1, 2, 3])); // Output: true


//instanceof Array: Checks if the object is an instance of the Array class. It may not work 
console.log([1, 2, 3] instanceof Array); // Output: true

//typeof: Returns a string indicating the type of the variable.
//Object.prototype.toString.call(): Provides a more precise type check.




//TypeScript is a superset of JavaScript that adds static typing to the language
//. It helps catch type-related errors at compile time and provides better tooling with features like autocompletion and type checking.


// function greet(name: string): string {
//     return 'Hello, ' + name;
// }
// console.log(greet('Alice')); // Output: "Hello, Alice"








// Concept of Type Casting

//To String:
let num1 = 123;
let str1 = String(num); // '123'


//To Number:
let str2 = '123';
let num2 = Number(str); // 123

//To Boolean:
let num = 1;
let bool = Boolean(num); // true


