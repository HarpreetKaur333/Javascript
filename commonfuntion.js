//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

//Check for Palindrome
function isPalindrome(str) {
    const cleaned = str.replace(/\W/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lower case
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

//. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibonacci(6)); // Output: 8

// Find the Maximum Value in an Array
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}
console.log(findMax([1, 3, 2, 8, 5])); // Output: 8.


//Flatten a Nested Array
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]

//Debounce Function
function debounce(func, delay) {
    let timerId;
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), delay);
    };
}

const debouncedFunction = debounce(() => console.log('Debounced!'), 2000);
debouncedFunction(); // Only logs "Debounced!" after 2 seconds if not called again within that period


//Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

//Count Occurrences of Each Character in a String
function countOccurrences(str) {
    return str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}
console.log(countOccurrences("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }


//Find All Prime Numbers up to a Given Number
function sieveOfEratosthenes(n) {
    const primes = [];
    const isPrime = Array(n + 1).fill(true);
    for (let p = 2; p <= n; p++) {
        if (isPrime[p]) {
            primes.push(p);
            for (let multiple = p * p; multiple <= n; multiple += p) {
                isPrime[multiple] = false;
            }
        }
    }
    return primes;
}
console.log(sieveOfEratosthenes(30)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

//Find the Missing Number in an Array
function findMissingNumber(arr) {
    const n = arr.length;
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}
console.log(findMissingNumber([0, 1, 3])); // Output: 2


//Find the Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0, maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")


//Group Anagrams

function groupAnagrams(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    
    return Array.from(map.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]


//Implement a Simple Event Emitter

class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
    
    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }
}

const emitter = new EventEmitter();
function callback(data) {
    console.log(data);
}
emitter.on('event1', callback);
emitter.emit('event1', 'Hello World'); // Output: Hello World
emitter.off('event1', callback);
emitter.emit('event1', 'Hello World'); // No output


// Throttle Function Write a throttle function to limit how often a function can be called.

function throttle(func, limit) {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}
const throttledFunction = throttle(() => console.log('Throttled!'), 2000);
throttledFunction(); // Logs "Throttled!"
throttledFunction(); // Ignored if within 2 seconds


//Merge Intervals Given a collection of intervals, merge any overlapping intervals.
function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];
    
    // Sort intervals by the starting time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        const current = intervals[i];
        
        if (last[1] >= current[0]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    
    return merged;
}
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Output: [[1, 6], [8, 10], [15, 18]]


//Find the Intersection of Two Arrays Write a function to find the intersection of two arrays.

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result = [...set1].filter(item => set2.has(item));
    return result;
}
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]

//Count Unique Elements in an Array Write a function to count unique elements in an array

function countUnique(arr) {
    return new Set(arr).size;
}
console.log(countUnique([1, 1, 2, 3, 3, 3])); // Output: 3

// Calculate the Sum of Digits in a Number--  Write a function to calculate the sum of digits of a number.

function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumOfDigits(1234)); // Output: 10


//Explain Event Delegation  What is event delegation in JavaScript, and why is it useful

// Naswer :- Event delegation is a technique where you attach a single event listener to a parent element instead 
// of multiple event listeners to individual child elements. 
// This approach leverages event bubbling, where events propagate from child elements to parent elements.
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('button')) {
        console.log('Button clicked:', event.target.textContent);
    }
});



//What is the Purpose of bind(), call(), and apply()?
//bind(): Creates a new function that, when called, has its this keyword set to the provided value and
// is pre-set with the provided arguments.
function greet(greeting, name) {
    console.log(greeting + ', ' + name);
}
const sayHello = greet.bind(null, 'Hello');
sayHello('John'); // Output: "Hello, John"

//call(): Calls a function with a given this value and arguments provided individually.
function greet(greeting, name) {
    console.log(greeting + ', ' + name);
}
greet.call(null, 'Hi', 'Alice'); // Output: "Hi, Alice"

//apply(): Calls a function with a given this value and arguments provided as an array.
function greet(greeting, name) {
    console.log(greeting + ', ' + name);
}
greet.apply(null, ['Hey', 'Bob']); // Output: "Hey, Bob"




// What are Closures in JavaScript?
// :-A closure is a feature where a function retains access to variables from its 
// lexical scope even after the function has finished executing.
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

//(Equality Operator ) /(Strict Equality Operator): 

console.log(5 == '5'); // Output: true

console.log(5 === '5'); // Output: false

//this keyword
const obj = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};
obj.greet(); // Output: "John"




// What are Promises and Async/Await?
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
});
promise.then(result => console.log(result)); // Output: "Done!"


async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();



// What is the Prototype Chain?
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
};

const john = new Person('John');
john.greet(); // Output: "Hello, John"



//Event Loop in JavaScript
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout




//setTimeout and setInterval

setTimeout(() => console.log('Executed after 1 second'), 1000);


setInterval(() => console.log('Executed every 1 second'), 1000);



