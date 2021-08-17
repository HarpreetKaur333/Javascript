//Exercise 1:
//Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
//BMI = mass / height ^ 2 = mass / (height * height). (mass in kg and height in meter).

var heightMark = 1.8;
var massMark = 180;
var heightJohn = 1.9;
var massJohhn = 145;

var BMIMarks = massMark / (heightMark * heightMark);

var BMIJohn = massJohhn / (heightJohn * heightJohn);

console.log("Marks BMI: " + BMIMarks);
console.log("John Marks: " + BMIJohn);

//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
checkMarkBMIHigherThanJohn;