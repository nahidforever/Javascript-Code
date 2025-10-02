// Array -> is a collection of variables
// Array VS Object -> arrays use numbered indexes. but, objects use named indexes.

// creating an array with 20 variables
let names = new Array(20);

//array index always start with 0
names[0] = "Nahid";
names[1] = "Megh";

//printing an array elements
console.log(names[1]);

// creating an array with values
let students = ["Nahid", "Sonali", "Priya", "Mimi"];
console.log("Students = " + students);
console.log("Studnet at 2 index : " + students[2]);

//finding the length of an array
console.log("Length of student array : " + students.length);

//pusing an element in array
students.push("Musa");
console.log("After pushing students = " + students);

//pusing an element in array
students.pop("Musa");
console.log("after poping students = " + students);

// concatenation of arrays
var num1 = [10, 20];
var num2 = [30, 40, 50, 60];
var num = num1.concat(num2);
console.log("After concatenation : " + num);