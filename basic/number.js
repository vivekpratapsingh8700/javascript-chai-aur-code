// number in java script

const number=45
console.log(typeof number);

const newNumber=new Number(45)

console.log(newNumber);
console.log(typeof newNumber);      //typeof newNumber -> object

console.log(newNumber.toString());      //convert to number to string
console.log(newNumber.toString().length);

let anotherNumber=20

console.log(anotherNumber.toFixed(2));      //toFixed used to define the number of decimal digits after the point
const otherNumber=23.663

console.log(otherNumber.toPrecision(3));        //convert the values to till precise digits     precise(digits)

console.log(otherNumber.toPrecision(1));        //convert the remaining digits to exponential

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'));          //add commas after 100s and 1000s and so on  'en-IN' for indian standards



