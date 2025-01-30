console.log("Hello World");
console.log("The answer is " + 42);

// alert("Message!");

// Single line comment
/* Multi line comment */

/* Variables */
let level = 23; // Automatically assign integer
let accuracy = 0.99; // Automatically assign double/float
let name = "Pikachu" // Automatically assign string
let temp = [55, 60, 57, 5]; //Automatically assign array

const BEST_CLASS = "CS3163"; 
// Error - BEST_CLASS="CS3213"

let credit = 5 + 4 + (2*3); // Also works

// Strings
let names = "Isidro Garduno";
let fName = names.substring(0, names.indexOf(" "));
let len = fName.length;

console.log(fName);
console.log(len);

/* Loops and Conditions */

function mystery(a, b) {
    if ( a > b){
        return 0;
    }
    else {
        let result = 0;
        for ( let i=a; i<=b; i++)
        {
            result+=i;
        }
        return result;
    }
}

console.log(mystery(4,6)) // Call and print function

while(condition){
    console.log("While Loop");
}

do{

}while(condition);

/* Arrays */
let Names = ["Earth", "Water", "Fire", "Air"];
let array=[]; // empty array
Names[0] = "Hello";
Names[2] = "My";

array.push("Isidro");
array.unshift("Tyler");
array.pop(); // Delete last element

console.log(array);