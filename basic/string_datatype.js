//string data type


const name='vivek'
console.log(name);

const repoCount=50

// console.log(name+repoCount+"value");        //output-> vivek50value

console.log(`hello my name is ${name} and my repo count is ${repoCount} values`);       //modern way to use it


let gameName=new String('vivek pratap')       //another way of declaring string
console.log(gameName);      //output-> [String: 'vivek pratap']


console.log(gameName[0]);       //output-> v
console.log(gameName[1]);       //output-> i

console.log(gameName.length);       //output->12
console.log(gameName.toUpperCase());        //output->VIVEK PRATAP
console.log(gameName.toLowerCase());        //output->vivek pratap


console.log(gameName.charAt(4));        // charAt(index)  output-->k
console.log(gameName.indexOf('i'));     //indexof(character)  output->1

console.log(gameName.substring(1,4));       //substring(start,stop-1) output-> ive
console.log(gameName.substring(-9,4));       //note -> we cannot take negative values in substring by default it converted negative value to zero

gameName='vivek_pratap'

let anotherString=gameName.slice(-9,8)

console.log(anotherString);


const newString1="   vivek    "
console.log(newString1);
console.log(newString1.trim())          //trim use to remove the whitespaces from the string(start and end)
const url='https://vivek.com/vivek%20pratap'

console.log(url.replace('%20','-'));        //replace %20 with "-" output-> https://vivek.com/vivek-pratap

console.log(url.includes('vivek'));     //output-> true

console.log(gameName.split('_'));       // split return an array by splitting an string on the basis  of an character inputted

// output-> [ 'vivek', 'pratap' ]