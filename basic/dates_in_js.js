// dates in javascript

// let myDate=new Date()
// console.log(myDate);            //output-> 2025-01-14T19:07:52.814Z
// console.log(String(myDate));    //output-> Tue Jan 14 2025 19:08:22 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.getTime());  //output->1736881753851   gives the time in milliseconds


// console.log( myDate.toDateString());        //output-> Tue Jan 14 2025
// console.log( myDate.toTimeString());        //output-> 19:11:00 GMT+0000 (Coordinated Universal Time)


// console.log(typeof myDate);             // output-> object      date is a object in javascript


// let myCreatedDate=new Date(2023,0,23,4,3)
// console.log(myCreatedDate.toLocaleString());     //output->1/23/2023, 4:03:00 AM  in js month starts with 0

// myCreatedDate=new Date('2023/01/23')
// console.log(myCreatedDate.toLocaleString());        //OUTPUT->1/23/2023-> 12:00:00 AM

// myCreatedDate=new Date('01-14-2023')                
// console.log(myCreatedDate.toLocaleString());        //output->1/14/2023, 12:00:00 AM



// let myTimeStamp=Date.now()
// console.log(myTimeStamp);       //output->1736882359884  timestanp gives the current date time in milliseconds


// console.log(Math.floor(myTimeStamp/1000));          //output-> milliseconds converted in to seconds


let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());        //month starts with 0 in javascript
