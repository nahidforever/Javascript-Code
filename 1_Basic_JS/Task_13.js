// The sort() method sorts an array alphabetically:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of fruits
console.log(fruits);

//The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // First sort the elements of fruits
fruits.reverse(); // Then reverse the order of the elements
console.log(fruits);

// You can fix this by providing a compare function:

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    console.log(a + " , " + b);
    return a - b;
});
console.log(points);
// se the same trick to sort an array descending:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
    return b - a;
});
console.log(points);