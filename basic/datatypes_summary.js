

//  datatypes summary in javascript


// primitive datatype-> copy of value allocate to the variable in the memory rather than reference
/* 
they are call by value means 
    7 types

    string
    number
    boolean
    null
    undefined
    symbol-> use to make value unique(fro advancxe javascript)
    bigint
*/

const number1=100  //number
const number2=100.383  //number

const isLogin=true //boolean

const temp=null     //null

let userEmail;        //undefined

//note-> we cannot defined const as undeined  
//const name;  -> ERROR

const id=Symbol('123')      // output-> tyep symbol

console.log(typeof id);     //output-> Symbol

const anotherId=Symbol('123')

console.log(id==anotherId);     //output-> false because symbol are always unique

const bigNumber=BigInt(123434)
console.log(typeof bigNumber);  //output-> bigInt


//reference type or non-primitive data type-> reference allocate to the variable or in memory rather than value

/* 
    array
    objects
    functions
*/


const heros=["shaktiman","ironman","spiderman"]     //array

const details={
    name:"vivek",
    age:24
}               //objects


const myFunction=function(){
    console.log('hello world');
    
}

myFunction()

console.log(typeof myFunction);     //function

const nothing=null
console.log(typeof nothing);        //object

console.log(typeof undefined);      //output0->undefined
