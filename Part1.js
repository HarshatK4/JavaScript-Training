//Declare a variable name and assign your name to it. Show it using alert()

let name = 'walle';

alert("My name is " +name);
//-----------------------------

// //Ask the user for their age using prompt(). Store it in a variable and display it back using alert()

let age = prompt("Enter your age")

alert("Age: "+age)
//-----------------------------

// //Use confirm() to ask the user: "Do you like JavaScript?". Store the result in a variable and display it in the console.

let confirmValue = confirm("Do you like JavaScript?");
console.log("Value entered: ", confirmValue)
//-----------------------------

// * Use prompt() to ask the user for two numbers.
// * Store them in variables.
// * Perform Arithmetic operations (Add Substract Divide Multiply and Modulo) and show the result in an alert.

let a= Number(prompt('Enter a value'))
let b=Number(prompt('Enter b value'))
let sum= a+b;
let sub= a-b;
let div=a/b
let mul=a*b
let mod=a%b
alert("Add: " +sum + ". Subract: " +sub + ". Divide: " +div + ". Multiply: " +mul + ". Modulo: " +mod);

