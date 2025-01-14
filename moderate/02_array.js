//   array 2


const marvelHeros=['thor','ironman','spiderman']
const dc=['batman','superman']

// marvelHeros.push(dc)        //another array treats as a single element in it        ie- dc aray treats as a single elements
// console.log(marvelHeros);   

// console.log(marvelHeros[3][1]);


let newHero=marvelHeros.concat(dc)
console.log(newHero);


const allNewHeros=[...marvelHeros,...dc]        //  ...-> spread operator       more convinient way
console.log(allNewHeros);


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]


//flat -> use to reduce the dimensions of array bydefault it set to 1 flat(dimensions)
//flat(infinity)  -> reduce any kind of dimensions

let realAnotherArray=anotherArray.flat(2)            //flat the all elements in a single dimensional array
console.log(realAnotherArray);


//IMPORTANT -> convert to array 

console.log(Array.from('vivek'));       //output-> [ 'v', 'i', 'v', 'e', 'k' ]

console.log(Array.from({name:'vivek'}));        //output->[]    if it is not able to convert an array then it return an empty array


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));        //output->[ 100, 200, 300 ]




