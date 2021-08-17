console.log("question b");
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

console.log("question f");
console.log("0 || 1=" + (0 || 1));
console.log("1 || 2=" + (1 || 2));
console.log("0 && 1=" + (0 && 1));
console.log("1 && 2=" + (1 && 2));

console.log("question d");
var arr1 = "pargol".split('');
var arr2 = arr1.reverse();
var arr3 = "poshtareh".split('');
console.log("array2: " + arr2);
arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
