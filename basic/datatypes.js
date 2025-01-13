"use strict";    //treat all js code for newer version of javascript 

// alert('hello world')             error because we run the code in nodejs(document) not browser


console.log(3+3); console.log('vivek')    //bad practice for code writing 

console.log(3+
    3
)               //again bad practice

//dataTypes injavascript


let name='vivek'        // String datatype


//boolean
let isLoginUser=true
isLoginUser=false


// NUMBER
const age=22            //integer datatype
const account=BigInt(12244324324324234324324324)
console.log(account)

//null

let empty=null     //null(empty value) is a standalone value in javascript
console.log(empty)

//undefined
let state;
console.log(state)      //  undefined when the value is not declared


//symbol ==>when we talk about unique

//object 

console.log(typeof(name))
console.log(typeof(age));
console.log(typeof(null))               // output->object
console.log(typeof(undefined))               //output->undefined
