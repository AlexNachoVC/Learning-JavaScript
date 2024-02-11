// How to accept user input

/*
 1. EASY WAY = Window Prompt

let username = window.prompt("What is your username?")

console.log(username);
*/


// PROFESSIONAL WAY = HTML textbox
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}