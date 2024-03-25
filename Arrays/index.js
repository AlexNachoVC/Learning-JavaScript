// Arrays = Data Structure that can hold more than 1 value

let fruit = "Strawberry";

let fruits = ["Strawberry", "Orange", "Banana"];

fruits[3] = "Coconut";

/*
fruits.push("Pear");
fruits.pop();
fruits.unshift("Mango");
fruits.shift();
*/

let numOffFruits = fruits.length;
let index = fruits.indexOf("Strawberry");


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let j = fruits.length -1; j >= 0; j--) {
    console.log(fruits[j])
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.sort();

console.log(fruits);

fruits.sort().reverse();

console.log(fruits);
