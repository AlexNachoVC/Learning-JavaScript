// Const = a variable that cannot be changed

// let pi = 3.14159;


const PI = 3.14159;
let radius;
let circumference;

// PI = 420.69

radius = Number(radius);

circumference = 2 * PI * radius;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}
