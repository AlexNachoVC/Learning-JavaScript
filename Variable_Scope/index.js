// Variable Scope = Where a variable is recognized and accesible (local vs global)

let x = 3;

function function1() {
    let y = 1;
    console.log(x, y);
}

function function2() {
    let y = 2;
    console.log(x, y);
}

function1();
function2();