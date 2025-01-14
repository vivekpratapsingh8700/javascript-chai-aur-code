// maths operations in javascript


// console.log(Math.max(1,34,1,3));        //max -> gives the maximum value 
// console.log(Math.min(1,34,1,3));        //min -> gives the minimum value 

// console.log(Math.abs(-45));             // abs -> give the positive values
// console.log(Math.round(4.6)  , Math.round(4,3));           //round-> give the round off value
// console.log(Math.floor(5.9));       // floor -> gives the lower round off value(integer)
// console.log(Math.ceil(5.1));        //ceil-> gives the upper round off vlaue (integer)


// Math.random


// console.log(Math.random());     //random-> gives random values between 0 and 1


// console.log(Math.floor(Math.random()*10));      // give random number between 0 and 9

// console.log(Math.floor(Math.random()*10)+1);        //gives random number between 1 and 9


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);     // gives a random number between min and max

