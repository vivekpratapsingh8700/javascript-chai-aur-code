// comparison operator

// basic


// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2<1);
// console.log(2!=1);
// console.log(2==1);


// more comparision

// console.log("2">1);     //output - > true   convert string to number
// console.log("02">1);    //output-> true

// console.log("1">=true);     //output-> true

// console.log(null==0)        //ouput-> false     
// console.log(null>0)         //output->false
// console.log(null>=0)        //output->true


// note ->  comparison operator(<,>,<=,>=) and equalty operator work differently
// comparision operator convert the null to zero but it remain null for equlity operator(==)

// console.log(undefined==0);      //output->false
// console.log(undefined>=0);      //output->false
// console.log(undefined>0);       //output-> false


//  === -> strict check ,means it not only check the values but also compare the data tyep of values

let newNumber=10
let stringNumber="10"

console.log(newNumber===stringNumber);      //output-> false as datatype of both the variables are different
console.log(newNumber===10);        //output-> true


console.log(newNumber==stringNumber);       //output-> true because == check only value not datatype

