//-------web interaction types--------
//console.log("Console - Hello Javascript");

// alert("alert testing");

// console.log(prompt("Prompt testing"));

//confirm("Confirm box")
//console.log(confirm("Confirm box"))

//------- Variables------------

// var a= "A Var"
// let b= "B Let"
// const c = "C Const"
// console.log(a,b,c)


//------Data Types----------

// var a=1;
// let b='harsha'
// const c= {
//     name: "harsha",
//     age: 20,
//     city: 'nlr',
//     dob: '12-04-99',
//     hobbies: {
//         mrng: 'javascript training',
//         next: 'servicenow',
//         then: 'tv',
//         numbers:4
//     },
//     lastly: 'nothing'
// }
// console.log(a,b,c)
// console.log(typeof a, typeof b, typeof c)


//---------Conditional Statements-------
// if else if, if else if else if, switch, terenary

//-----if else if, if else if else if-------
// let a=1

// if (a>100){
//     console.log("if block")
// }
// else if(a<0){
//     console.log("else if block")
// }
// else if(a>50){
//     console.log("else if, else if block")
// }
// else {
//     console.log("else Block")
// }


//-------switch-----
// let b= prompt("enter marks")
// switch(b) {
//     case ("Pass") :
//         console.log("pass entered")
//         break;
//     case ("Fail"):
//         console.log("Fail entered");
//         break;    
//     default:
//         console.log("default")    
// }


//---------nested if-----
// let user =(prompt('enter user'))
// let pwd= (confirm('enter password'));

//     if(pwd == true){
//         if(user == "harsha"){
//             console.log("valid user and password");
//         }
//         else{
//             alert("invalid user")
//         }
//     } else if (pwd == false ){
//        if(user =='harsha'){
//         console.log("enter valid password")
//        }
//        else{
//         console.log('enter a valid user')
//        }
//     }
//     else{
//         alert('enter valid password')
//     }


//--------terenary operator-------
// let a = prompt("Enter a value:");
// (a==10)? console.log('a contains 10'): console.log("not 10")

// --------- AND OR------
// let a=65
// if (a>30 ){
//     console.log('passed')
// }
// else if (a>60 || a==60){
//     console.log("passed and second class")
// }


//-------arrays------
// let a= [1,2,3,4,5]

//add/remove-----
// a.push(6);
// console.log("pushed",a);

// a.pop();
// console.log("popped",a);

// a.unshift(0);
// console.log("unshift",a);

// a.shift();
// console.log("shift",a);

//iteration/transformation------
// console.log("For each",a.forEach(num=>(console.log(num*10))));
// console.log("Actual array",a)

// console.log("Map", a.map(num=>(num*10)))
// console.log("Actual array",a)

// console.log("Applying filter", a.filter(n=>(n%2 == 0)))
// console.log("Actual array",a)
 
// console.log("Sum array", a.reduce((b,c)=> b+c , 10))
// console.log("Actual array",a)

//searching & checking ----------

// console.log("Find", a.find(b=> b>2));

// console.log("Index of", a.indexOf(2));

// console.log("Find Index", a.findIndex(b=> b>1));

// console.log("Includes", a.includes(4));

//other-------

// b= a.slice(0,2);
// console.log("Slice B", b)

// c= a.splice (3,1)
// console.log("Splice remove C", c)
// console.log("Splice remove, Updated A", a)

// d= a.splice(4,1,6)
// console.log("Splice replaced D", d)
// console.log("Splice replaced D, Updated A", a)

// e= [40,80, 70, 90]
// console.log("concatinating E", a.concat(e) )

// console.log("sort E", e.sort())

//---------loops-------

// let a= [1,2,3,4,5]
// b= a.length-1;

// 1. while Loop-----

// while(b>=0){
//     console.log("Array element from WHILE LOOP", a[b])
//     b--;
// }


// 2. Do while loop-----

// do{
//     console.log("Array element from DO WHILE LOOP", a[b])
//     b--;
// }while(b>=0)


// 3. for Loop-------

// for (let i=0; i<=b; i++){
//     console.log("Array element from FOR LOOP", a[i])
// }

// 4. for in loop-------

// let fruits = {10:'orange', 2:'apple', 30:'kiwi'}

// for(let i in fruits){
//     console.log("Key is", i + ", Value is:" +fruits[i])
// }

// 5. for of Loop--------

// let colors = ['red', 'green', 'white']

// for (let i of colors){
//     console.log("Value: ", i)
// }

// let names = {first:'harsha', last:'kandala', middle:'teja' }
// for (let i of Object.keys(names)){
//     console.log("Value: ", names[i] + ", key: " + i)
// }

// let person = { name:'Kartik', age: 30, city:'Pune'}
// for (let i of Object.keys(person)){
//     console.log("Value: ", person[i] + " key: " + i)
// }


// functions-------------------------

// function add (a,b){
//     let c = a+b;
//     return c;
// }

// let c= add(10,100);
// console.log("Function add: ", c);


// Arrow function--------------------

// let adding = (a,b) => a+b;

// let d= add(10,100);
// console.log("Arrow Function add: ", d);


//Events in Javascript-------------------------

function show(){
    console.log("OnFocus Clicked!")
}

function customblur(){
    console.log("Blur event!")
}

// function validate(){
//     console.log("Validation function!")
//     let fname = document.getElementById('Fname')
//     let emailId = document.getElementById('email')
//     let phoneNumber = document.getElementById('mnum')

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     const phoneRegex = /^[0-9]{10}$/; 

//     let fnameError = document.getElementById('fnameerror')
//     let emailError = document.getElementById('emailerror')
//     let phoneError = document.getElementById('phoneNumbererror')

//     let isValid = true;

//     console.log(fname.value, emailId.value, phoneNumber.value);

//     //First name
//     if (fname.value === ''){
//         fnameError.textContent= 'First name is required'
//         isValid = false; 
//     } else if (fname.value.length < 3) {
//         fnameError.textContent = 'Name character length should be greater than 3 ';
//         isValid = false;
//     } else{
//         fnameError.textContent = ''
//     }

//     // Email ID
//     if (emailId.value ===''){
//         emailError.textContent='Email is required'
//         isValid = false;
//     } else if (!emailRegex.test(emailId.value)){
//         emailError.textContent= 'Please enter valid email id'
//         isValid = false;
//     } else {
//         emailError.textContent = ''
//     }

//     // Mobile number
//     if(phoneNumber.value === ''){
//         phoneError.textContent = 'Mobile number is required'
//         isValid = false;
//     } else if(!phoneRegex.test(phoneNumber.value)){
//         phoneError.textContent = 'Please enter a valid mobile number'
//         isValid = false;
//     } else {
//         phoneError.textContent = ''
//     }

//     return isValid;
// }


function fnameValidate(){
    let fname = document.getElementById('Fname')
    let fnameError = document.getElementById('fnameerror')
    if (fname.value === ''){
        fnameError.textContent= 'First name is required'
        return false; 
    } else if (fname.value.length < 3) {
        fnameError.textContent = 'Name character length should be greater than 3 ';
        return false;
    } else{
        fnameError.textContent = ''
    }
}

function emailIdValidate (){
    let emailId = document.getElementById('email')
    let emailError = document.getElementById('emailerror')
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailId.value ===''){
        emailError.textContent='Email is required'
        return false;
    } else if (!emailRegex.test(emailId.value)){
        emailError.textContent= 'Please enter valid email id'
        return false;
    } else {
        emailError.textContent = ''
    }

}

function mobileNumberValidate(){
    let phoneNumber = document.getElementById('mnum')
    let phoneError = document.getElementById('phoneNumbererror')
    const phoneRegex = /^[0-9]{10}$/;

    if(phoneNumber.value === ''){
        phoneError.textContent = 'Mobile number is required'
        return false;
    } else if(!phoneRegex.test(phoneNumber.value)){
        phoneError.textContent = 'Please enter a valid mobile number'
        return false;
    } else {
        phoneError.textContent = ''
    }
}

document.addEventListener("DOMContentLoaded", function () {
document.getElementById('Fname').addEventListener('input', fnameValidate);
document.getElementById('email').addEventListener('input', emailIdValidate);
document.getElementById('mnum').addEventListener('input', mobileNumberValidate);

});

function validate (){
    fnameValidate();
    emailIdValidate();
    mobileNumberValidate();

    return (
        document.getElementById('fnameerror').textContent ==='' &&
        document.getElementById('emailerror').textContent ==='' &&
        document.getElementById('phoneNumbererror').textContent ==='' 
    );
}