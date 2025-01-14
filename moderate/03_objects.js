//objects in javascripts

//object literals

// Object.create()  another method of creating object


const mySym=Symbol('key1')      //Symbol use to declare unique value in java script

const jsUser={
    name:'vivek',
    "full name":"vivek pratap singh",
    [mySym]:"mykey1",                       //way to use sybmol in objects []
    age:24,
    location:'jaipur',
    email:'vivek@gmial.com',
    loginDays:[1,3,4],
    isLogin:false
}           //objects in js

// NOTE-> IN BACKEND KEYS OF OBJECTS ALSO TREATED AS STRING

console.log(jsUser.name);
console.log(jsUser['name']);
console.log(jsUser['full name']);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);


jsUser['emial']='pratap@gmail.com'      //update email field in js
console.log(jsUser);


//freeze object in js

Object.freeze(jsUser)       //now we cannot do any update in object
jsUser['name']='vineet'
console.log(jsUser);        //array remain same after freeze, means changes does not accur in object


//add function in objects

const newUser={
    name:'vivek pratap singh',
    greetings:function(){
        console.log('hello js user');
        
    },
    greetingsTwo:function(){
        console.log(`hello user ${this.name}`);         //use to refer the properties of same object (within object)
        
    }
}

console.log(newUser['greetings']);
console.log(newUser.greetings());


console.log(newUser.greetingsTwo());        //output->hello user vivek pratap singh
