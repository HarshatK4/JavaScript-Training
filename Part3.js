// 1. Rearranging with splice()
//     * Start with an array ["pen", "book", "eraser", "scale"].
//     * Remove "eraser" and insert "pencil" at the same place.
//     * Show the updated array.

// let items = ["pen", "book", "eraser", "scale"]
// console.log(items);
// items.splice(2,1,'pencil')
// console.log(items);


//------------------------------------------------------------------
// 2. Finding the maximum
//     * Given [10, 45, 67, 23, 89, 12], find the largest number using Math.max.apply(null, array).

// let a= [10, 45, 67, 23, 89, 12]
// largeNumber = Math.max(...a);
// console.log(largeNumber)



//------------------------------------------------------------------
// 3. String to Array & Back
//     * Take a string "apple,banana,orange".
//     * Convert it into an array using split().
//     * Then convert back into a string "apple | banana | orange" using join().

// let fruitString = "apple,banana,orange"
// let fruitArray = fruitString.split(',')
// console.log(fruitArray)

// let str= fruitArray.join(' | ');
// console.log(str)


//------------------------------------------------------------------
// 3. Create an array of 5 colors. Show the 3rd color using its index.

// let colorsArray = ['red', 'orange', 'black', 'purple', 'white','grey']

// const key= 5;
// const val= colorsArray[key];

// console.log("Index: " +key + " value: " +val)



//------------------------------------------------------------------
//4. Make an array of numbers [10, 20, 30, 40, 50]. Find the position of 30 using

// let arr= [10, 20, 30, 40, 50];
// console.log(arr.indexOf(30))



//------------------------------------------------------------------
// 5. Create an array of names ["Amit", "Rahul", "Sneha", "Priya"].
//     * Add one more name at the end using push().
//     * Remove the first name using shift().
//     * Show the final array in the console.

// let nameArray= ["Amit", "Rahul", "Sneha", "Priya"]

// console.log("original", nameArray)
// nameArray.push('Teja')

// console.log("Pushed", nameArray)

// nameArray.shift();

// console.log("Shift", nameArray)


//------------------------------------------------------------------
// 6. Make an array of numbers [100, 200, 300].
//     * Use concat() to add another array [400, 500].
//     * Show the new array in the console.

// let numArray = [100, 200, 300]
// let concArray = [400, 500]

// let combArray= numArray.concat(concArray);
// console.log(combArray)


//------------------------------------------------------------------
// 7. Create an array ["HTML", "CSS", "JavaScript"]. Use reverse() to reverse the order. Show it in an alert.

let techArray= ["HTML", "CSS", "JavaScript"]
let revArray = techArray.reverse()
alert(revArray);



//------------------------------------------------------------------
// 8. Create an array of numbers [2, 4, 6, 8, 10]. Use every() to check if all numbers are even.

let nArray= [2, 4, 6, 8, 10]
let evenArray= nArray.every(n => (n%2 == 0))
console.log(evenArray)


//------------------------------------------------------------------
// 9. Create an array of ages [12, 18, 20, 25]. Use some() to check if there’s at least one person under 18.

let ageArray= [12, 18, 20, 25]
let ageCheck = ageArray.some(n => (n<18))
console.log(ageCheck)