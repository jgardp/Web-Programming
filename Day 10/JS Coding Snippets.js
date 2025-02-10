// #1
function checkOddEven(number) { // Check using modulus
    if (number % 2 == 0){ 
        return "Number is Even";
    }
    else{
        return "Number is Odd";
    }
}
console.log(checkOddEven(8));
console.log(checkOddEven(5));


// #2
function reverseString(string) { // Turn string into characters, reverse them, put it back together
    return reverse = string.split("").reverse().join(""); 
}
console.log(reverseString("Reverse"));


// #3
let button = document.getElementById("color");
function changeBackground(){
    //Random color for background
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];

    return color;
}
button.addEventListener("click", function(){body.style.backgroundColor = changeBackground();});