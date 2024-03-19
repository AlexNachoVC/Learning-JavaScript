// Functions = A section of reusable code. Declare code once, use it whenever you want. Call the fucntion to execute that code

/*
function happyBirthday(username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);

}

let username = "alex";
let age = 18;

happyBirthday(username, age);

happyBirthday("test", 18);
*/

/*
function add(x, y) {
    let result = x + y;
    return result;
}

function substract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}


let answer = add(1, 2);
let answer2 = substract(2,1);
let answer3 = multiply(2,4);
let answer4 = divide(10, 2);

console.log(answer);
console.log(answer2);
console.log(answer3);
console.log(answer4);
*/

function isEven(x) {
    if (x % 2 === 0) {
        let result = "Is even";
        return result; 
    } else {
        let result = "Is odd";
        return result;
    }
}
// return number % 2 === 0 ? true : false;

let answer = isEven(5);
console.log(answer);


function isValidEmail(email) {
    if(email.includes("@")) {   
        return true;
    } else {
        return false;
    }
}
// return email.includes("@") ? true : false;

console.log(isValidEmail("test@test.com"));
console.log(isValidEmail("test.com"));