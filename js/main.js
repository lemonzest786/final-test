console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Name: Ronit Shrestha
Student Number: 200535182
 */

// Step 2: Create a block scoped, immutable variable that stores an empty array
let name = [];

// Step 3: Add the 3 people's names to the array
name.push('Alex','Shaun','Mckinnon')
// Step 4: Remove the second array item from the array
name.splice([1],1)

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
let uppNames = name.toUpperCase;
console.log(uppNames)
// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
function myFunction(){
    alert("Hello from Boo the World's Cutest Dog!");}