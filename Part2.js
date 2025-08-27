// Conditional Statements
// 1. Ask the user for a number using prompt(). Check if it’s even or odd, and show the result in an alert.
// let a= prompt("Enter a number")
// if(a%2==0){
//     console.log("Entered value is even number")
// }
// else{
//     console.log("Entered value is odd number")
// }
//------------------------------


// 2. Write a script that asks the user for their marks (out of 100).
//     * If marks ≥ 90 → Show "Grade A"
//     * If marks ≥ 75 → Show "Grade B"
//     * If marks ≥ 50 → Show "Grade C"
//     * Otherwise → Show "Fail"

// let marks= Number(prompt("Enter marks"))

// switch(true){
//     case (marks >=90):
//         console.log("Grade A")
//         break;
//     case (marks >=75):
//         console.log("Grade B")
//         break; 
//     case (marks >=50):
//         console.log("Grade C")
//         break;
//     default:
//         console.log("Fail")           
// }

//3. Use prompt() to ask the user for a day number (1–7). Use a switch statement to print the day name (e.g., 1 → Monday).

// let day= Number(prompt("Enter day number (1–7)"))
// switch(day){
//     case (1):
//         console.log("Sunday")
//         break;
//     case (2):
//         console.log("Monday")
//         break; 
//     case (3):
//         console.log("Tuesday")
//         break;
//     case (4):
//         console.log("Wednesday")
//         break;
//     case (5):
//         console.log("Thursday")
//         break;
//     case (6):
//         console.log("Friday")
//         break;
//     case (7):
//         console.log("Saturday")
//         break;    
//     default:
//         console.log("Entered number is out of the week")           
// }


// 4. Use a ternary operator to ask the user for their age.
//     * If age ≥ 18 → "You are an adult"
//     * Else → "You are a minor"

// let a= Number(prompt("Enter age")); 

// (a>=18) ? console.log("You are an adult") : console.log("You are an minor")

// 5. Ask the user to enter a password.
//     * If the password matches "12345", show "Login Successful".
//     * Otherwise show "Wrong Password".

// let a= String(prompt("Enter Password")); 
// if(a==="12345"){
//     console.log("Login successfull")
// }
// else{console.log("Wrong Password")}

// 6. Ask the user for a number.
//     * If the number is positive
//         * Check if it’s also even or odd.
//     * Else if the number is negative
//         * Show "Negative number".
//     * Else show "Number is zero".

// let a= Number(prompt("Enter a number")); 

// if (a>0){
//     if(a%2==0){
//         console.log("Even number")
//     }
//     else{
//         console.log("Odd number")
//     }
// }
// else if (a<0) {
//     console.log("Negative number")
// } 
// else{
//     console.log("Number is Zero")
// }

// 7. Ask the user for their age and whether they have a driving license (yes/no).
// * If age ≥ 18
//     * If license is "yes" → Show "You can drive"
//     * Else → Show "You are eligible by age but don’t have a license"
//     * Else → Show "You are underage"

// let a= Number(prompt("Enter age"))
// let value= confirm("Do have a driving license");

// if(a>=18){
//     if(value){
//         console.log('You can drive')
//     } else{
//         console.log('You are eligible by age but don’t have a license')
//     }
// } else{
//     console.log('You are underage')
// }



// 8. Ask the user to enter username and password.
//     * If username = "admin"
//         * If password = "1234" → Show "Welcome Admin"
//         * Else → Show "Wrong password"
//     * Else → Show "Invalid username"


let userName = String(prompt('Enter username'));
let password = String(prompt('Enter Password'));

if(userName == 'admin'){
    if(password == '1234'){
        console.log('Welcome Admin')
    } else{
        console.log('Wrong password')
    }
} else{
    console.log('Invalid username')
}