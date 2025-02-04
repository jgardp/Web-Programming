//Traditional JS Function
function greet(name){
    return "Hello, "+name+"!";
}

console.log(greet("Isidro"));

function isPositive(number){
    return number >= 0;
}

//Arrow Functions...
let greetName = (name) => "Hello, "+name+"!";
console.log(greetName("Garduno"));

let isPostiveNumber = (number) => number >= 0;
console.log(isPostiveNumber(5));