// ternary operator = shortcut for an if/else statement
// helps to assign a variable based on a condition
// condition ? exprIfTrue : exprIfFalse;
// takes 3 operands
// 1. a condition with ?
// 2. expression if true :
// 3. expression if false


let adult = checkAge(21);
console.log(adult);

function checkAge(age){
    return age >= 18 ? true : false;
}

checkWinner(false);

function checkWinner(win){
    win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}

let age = 21;

let message;
if(age >= 18){
    message = "You are an adult!";
}
else{
    message = "You are a minor!";
}

//let age = 22;
//let message = age >= 18 ? "You are an adult!" : "You are a minor!";
//console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let price = 10;
let shipping = price > 20 ? 0 : 5;
console.log(`Shipping cost: $${shipping}`);

let isStudent = true;
let message2 = isStudent ? "You are a student" : "You are NOT a student";
console.log(message2);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

