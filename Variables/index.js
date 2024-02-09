// Variables

// 1. declaration   let x;
// 2. assignment x = 100;

/*
Type: number
let age = 25;
let price = 10.99;
let gpa = 2.1;


console.log(typeof age)
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`)
console.log(`Your gpa is: ${gpa}`)
*/


/*
Type: string
let firstName = "Alejandro"
let favoriteFood = "Tacos";
let email = "example@gmail.com"

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);
*/

/*
Type: boolean
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Alejandro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/


let fullName = "Alejandro Vargas";
let age = 18;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;