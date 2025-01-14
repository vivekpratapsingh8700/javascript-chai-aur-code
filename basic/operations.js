// __________operations___________________


let value=3
let negative=-value
console.log(negative);      //output-->  -3


//more basic arithmetic operations'

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)    //rimender
// console.log(2**2)   //power


let str1='hello'
let str2=' vivek'
let str3=str1+str2
console.log(str3);


console.log("1"+2)      //output-> 12  it treat 2 also as a string
console.log(1+"2")         // output -> same 12

console.log("1"+"2")        //output-> 12

console.log("1"+2+2)        //output->  122 it treats other number also as string becaasue string ocuurs first then number in given expression

console.log(1+1+"2")        //output-> 22 it first add 1+1 then convert to string because number occurs first then convert to string


console.log(true)       //output-> true

console.log(+true);     //output-> 1 converted to integer 1
console.log(-true)      //output-> -1

console.log(+"");       //output-> 0
console.log(+false);    //output-> 0

let num1,num2,num3;
num1=num2=num3=5
console.table([num1,num2,num3])     //output-> 5,5,5


let gameCounter=100
gameCounter++
console.log(gameCounter);       //output-> 101

++gameCounter
console.log(gameCounter);       //output-> 102

console.log(gameCounter++);     //output-> 102 it changes the value after the printing the value

//now gameCounter=103

console.log(gameCounter)
console.log(++gameCounter);         //output-> 104





