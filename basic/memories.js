// memory 

// two types of memory in javascript

/*
1. stack memory ->  primitive data types stored in stack memory,
    we get the copy of value if value stored in stack

2. heap memory -> non -primitive data types stored in heap memory,
we get the orignal value if adta stored in heap 
*/


let myYoutubeName="vivek pratap singh"      // goes to the stack
let anotherName=myYoutubeName


console.log(anotherName);       //copy of value stored in another variable (in stack)

anotherName='this is name change'

console.log(anotherName);       //output->this is name change because the value of anotherName changes
console.log(myYoutubeName);     //vivek pratap singh  because it is call by value 

const user1={
    name:'vivek',
    email:'vivek@gmail.com'
}                               //object stored in heap


/* user1(name stored in stack but it refer to the
 object
{
    name:'vivek',
    email:'vivek@gmail.com'
}    
    
present in heap) */

let user2=user1

/*
user2 (name store in stack but it refer to the object of user1 in heap)

means  if we do amy change in user 1 or user 2 it also reflect to the another varibale
*/

user2.email="vineet@gmial.com"

console.log(user1);   // OUTPUT-> { name: 'vivek', email: 'vineet@gmial.com' }
console.log(user2);     // OUTPUT-> { name: 'vivek', email: 'vineet@gmial.com' }





// primitive datatypes(stack)    ,   non-primitive datatype(heap)