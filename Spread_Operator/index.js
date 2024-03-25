// Spread Operator = allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = "AlexNachoVC";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["Apple", "Orange", "Banana"];
let newFruits = [...fruits];
let vegetables = ["Carrots", "Potatoes", "Cucumber"];

let foods = [...fruits, ...vegetables, "Eggs", "Milk"];

console.log(fruits);
console.log(newFruits);
console.log(vegetables);
console.log(foods);
