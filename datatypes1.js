//Immutability: Data is not modified; instead, new data structures are created.

const arr = [1, 2, 3];
const newArr = [...arr, 4];


//Pure Functions: Functions that return the same result for the same inputs and have no side effects.

function add(a, b) {
    return a + b;
}


//First-Class Functions: Functions can be assigned to variables, passed as arguments, and returned from other functions.

function applyOperation(a, b, operation) {
    return operation(a, b);
}


//Higher-Order Functions: Functions that take other functions as arguments or return them..
function map(arr, fn) {
    return arr.map(fn);
}


// Error Handling and Debugging

//try...catch Block: Handles exceptions.
try {
    throw new Error('Something went wrong');
} catch (e) {
    console.error(e.message);
}


//finally Block: Executes code regardless of whether an error was thrown or not.
try {
    // Code that might throw an error
} finally {
    // Code that always executes
}


//Debugging Tools:

// Browser DevTools: Inspect elements, set breakpoints, and view call stacks.
// Console Methods: console.log(), console.error(), console.table().
// Debugging with IDEs: Use built-in debuggers in IDEs like VSCode.


// 4. Security in JavaScript
// Question: What are some common security concerns in JavaScript, and how can they be mitigated?

// Answer:

// Cross-Site Scripting (XSS): Injecting malicious scripts into web pages.

// Mitigation: Use proper escaping of user inputs, use Content Security Policy (CSP).
// Cross-Site Request Forgery (CSRF): Exploiting a user’s credentials to perform unauthorized actions.

// Mitigation: Use anti-CSRF tokens and validate them on the server side.
// Data Exposure: Sensitive data exposed through JavaScript.

// Mitigation: Avoid storing sensitive information in client-side code; use encryption for storage and transmission.






// **5. Web Performance Optimization
// Question: What are some techniques for optimizing web performance in JavaScript?

// Answer:

// Minification and Compression: Reduce the size of JavaScript files by removing unnecessary characters.
// Code Splitting: Break up JavaScript code into smaller bundles that are loaded on demand.
// Lazy Loading: Load resources (images, scripts) only when needed.
// Debouncing and Throttling: Limit the frequency of function executions to improve performance.
// Caching: Use caching mechanisms to reduce the number of requests and improve load times.





// **6. JavaScript Design Patterns
// Question: What are some common design patterns in JavaScript, and how are they used?

// Answer:

// Singleton Pattern: Ensures a class has only one instance.
// Observer Pattern: Allows objects to subscribe and react to events.
// Factory Pattern: Creates objects without specifying the exact class of the object that will be created.
// Decorator Pattern: Adds functionality to objects dynamically.



//**7. JavaScript Engines and Runtime Environments
// Question: What are JavaScript engines, and how do they impact the execution of JavaScript?

// Answer:

// JavaScript Engines: Interpret and execute JavaScript code. Examples include V8 (used in Chrome and Node.js), 
//SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari).
// Runtime Environments: Platforms that provide execution environments for JavaScript. Examples include browsers and Node.js.