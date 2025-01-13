let score=33.8
score=22
console.log(typeof score);  //output->number
score="33"
console.log(typeof score);     //output->string


let scoreNumber=Number(22)
console.log(scoreNumber);

let userName=String('vivek')
console.log(userName);


//   important NAN(not a number)

let notANumber='33abc'
let change=Number(notANumber)

console.log(change)         //NaN(not a number)     special type of datatype


//note

let nothing=null
change=Number(nothing)
console.log(change);        //convert the null value----> with 0(zero)      hence output->0


let variable;
change=Number(variable)
console.log(change)             //undefined converted to NaN(not a number)


let alpha='vivek'
change=Number(alpha)
console.log(change);            //string converted to NaN(not a number)



//for boolean

let isLogin=true
change=Number(isLogin)
console.log(change);            //true changes to 1


isLogin=false
change=Number(isLogin)
console.log(change);            //false change to 0




//summary

/* to number
"33"    ->  33(integer)
"33abc" ->  NaN(not a number)
true    ->  1
false   ->  0
"vivek"   ->  NaN
"undefined" -> NaN
"null" ->   0
*/

isLogin=1
change=Boolean(isLogin)
console.log(change);        //1 changes to true

isLogin=0
change=Boolean(isLogin)
console.log(change);        //0 changes to false

isLogin=123
change=Boolean(isLogin)
console.log(change);        //123 changes to true

isLogin=""
change=Boolean(isLogin)
console.log(change);        //"" changes to false

isLogin="hello"
change=Boolean(isLogin)
console.log(change);        //"hello" changes to true

isLogin=null
change=Boolean(isLogin)
console.log(change);        //null changes to false

// isNewLogin;
// change=Boolean(isNewLogin)
// console.log(change);        //raise an error



//string 

let number=33
change=String(number)
console.log(typeof change);
console.log(change);

nothing=null
change=String(nothing)
console.log(typeof change);
console.log(change);        //null changes to "null"(string null)

let notDefined;
change=String(notDefined)
console.log(typeof notDefined);
console.log(notDefined);        //undefined remains undefined 

