/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies =['swimming', 'board games','painting']
for( listOfHobbies of hobbies){

     console.log(listOfHobbies); // prints elements in the array
  
}
console.log(`Total hobbies:${hobbies.length}`) // prints total number of element in the array

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 
 * 2. Create a variable tealCount
 * 
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colors = ['green' ,'red', 'teal','orange', 'teal']; //Define an array colors
let tealCount = 0; //Create a variable variable
for (color of colors){    //loop that counts number of times teal is in the array
     // console.log(color); 
    if(color === 'teal'){ // checking whether color variable is equal to string 'teal'
     tealCount++; // increment the tealCount
     console.log(tealCount) //prints number of times 'teal' is in the array
    }

}

 console.log(' ******')


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

// Create an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// create an empty variables of 'oddNumbers' and 'evenNumbers'
let oddNumbers = [];
let evenNumbers = [];
// Write a loop that push odd numbers into oddNumbers array and Even numbers into evenNumbers array


for (let number of numbers){  //looping through each number inside number array
 console.log(number); // it prints 1-9
 if (number % 2 === 0){
      //if number has remainder of 2 after dividing by 2, 
     // Then, its an EVEN number
     //Again push numbers into an empty array called 'evenNumbers'

     evenNumbers.push (number); 
    
     //Otherwise, push others into an empty array called 'oddNumbers'

 } else{
     oddNumbers.push(number);
    
 }

}
console.log(oddNumbers) //ouputs an array of [1, 3, 5, 7, 9]
console.log(evenNumbers) //ouputs an array of [2, 4, 6, 8]

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// **** SOLUTION ****

// Step 1: Create an array of boolean values (some true and some false)
let booleanArray = [true, false, true, false, true];

// Step 2: Create a variable toggled (empty array)
let toggled = [];

// Step 3: Write a loop that adds the opposite value to the toggled array
for (let boooolean of booleanArray) {
  toggled.push(!boooolean)}

// Step 4: Output both arrays
console.log("Original array:", booleanArray); // OUTPUT: true, false, true, false, true
console.log("Toggled array:", toggled); //  OUTPUT: false, true, false, true, false


// Example output
// true, false, true, true
// Toggled false, true, false, false

console.log(' ******')
/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */ 

// **** SOLUTION ****


// Step 1: Create an array of numbers which has one or more 0's at the end
let numberArray = [3, 0, 2, 8, 0, 0, 0];

// Step 2: Write a loop that removes 0 from the end of the array
while (numberArray[numberArray.length - 1] === 0) {
  numberArray.pop();
}

// Step 3: Output the array
console.log("Array after removing zeros from the end:", numberArray);


console.log('*******')



// I did again using 'for of' loop ..for more practice
let numbersArray = [3, 0, 2, 8, 0, 0, 0];
for(let numberz of numbersArray){
     if(numbersArray[numbersArray.length -1] === 0){

          numbersArray.pop();
     }
   
}
console.log(`The new array is: ${numbersArray}`)


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console

      // **** SOLUTION ****
 */
// Step 1: Create a largish array of numbers
let numberz = [2, 2, -3, 7, 4, 1, 7, 12, 8];

// Step 2: Create two variables high & low
let high ;
let low ;
for (let numberzz of numberz){
     high = Math.max( ...numberz)
     low = Math.min( ...numberz)
}
console.log(`Highest number is: ${high}`); // 12
console.log(`Lowest number is: ${low}`); // -3

// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
