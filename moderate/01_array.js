//          arrays

const myArray=[0,1,2,3,4,5,true,'vivek']        //array in javascript are resizable 
console.log(typeof(myArray));                   // typeof-> object 


// elements in element access using indexing

console.log(myArray[0]);        //Note-> only positive indexing   
//  arrayName[index]

//array folllows shallow copy in javascript and based on call by reference

const myArr=new  Array('ironman',2,3,4)
console.log(myArr);
console.log(typeof myArr);      // typepf array -> object 




// array methods 

let myNewArray=[1,2,3,4]
myNewArray.push(23)         //push add only one new element in the end of array
myNewArray.push([34,45,45])     // treat as single element
console.log(myNewArray);        


console.log(myNewArray.pop());      //pop remove the last element and return that element 


//unshift/shift

myNewArray.unshift(76)      //add element in the starting
console.log(myNewArray);

myNewArray.shift()          //remove the element from the starting
console.log(myNewArray);        

console.log(myNewArray.includes(9));        //return true or false -> element present in array or not
console.log(myNewArray.indexOf(82828));         // give index if present otherwise it give -1 if not present
// for the above case it gives -1

console.log(myNewArray.lastIndexOf(2));

const newArr=myNewArray.join('-')       //join the elements of array using inputted character in join
console.log(typeof newArr);     //output-> String


console.log(newArr);        // join the elements of array and returns the string
console.log(myNewArray);    


//slice   and   splice


//slice
// console.log('A : ', myArray);
// const myNew=myArray.slice(1,3)      //slice gives -> gives the subarray   [start,stop-1]
// console.log('B : ',myNew);


//splice
console.log('A : ', myArray);
const myNew1=myArray.splice(1,3,'hello')        //splice use to add element and delete elements from array (orignal array)
console.log('after splice in A: ',myArray);     //splice(start,delete count,inserting element)-> reflect in new array nad return the deleting elements
   
console.log('B : ',myNew1);
