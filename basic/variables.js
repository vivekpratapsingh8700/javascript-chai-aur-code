const accountId=132434
let accountEmail='vivekpratap025@gmail.com'
var accountPassword='1234'
accountCity='Noida'     //var dataType by default,   NOTE------->not recommended


let accountState;               //if we does not assign value to variable in js then its default value is undefined

console.log(accountState);       // answer----->undefined


/*
    dont use var in javascript it is not recommended
    because of issue in block scope and functional scope
*/

// accountId=2  ERROR  NOT ALLOWED
console.log(accountId);


accountEmail='vivek@gmail.com'
accountPassword='vivek'
accountCity='jaipur'

console.table([accountEmail,accountId,accountPassword,accountCity]);
