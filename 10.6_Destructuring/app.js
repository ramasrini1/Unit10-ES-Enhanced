//Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets); // 8
//console.log(yearNeptuneDiscovered); // 1846

//Object Destructuring 2
let planetFacts = {
  numPlanets1: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets1, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered:1659}

//Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})); // Your name is Alejandro and you like purple

console.log(getUserData({firstName: "Melissa"})); // Your name is Melissa and you like green

console.log(getUserData({})); // Your name is undefined and you like green

//Array Destructuring1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//Array Destructuring2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on Roses
console.log(whiskers); // whiskers on kitten
console.log(aFewOfMyFavoriteThings); //This prints:
// [
//  "Bright copper kettles",
//  "warm woolen mittens",
//  "Brown paper packages tied up with strings"
//]

//Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

//ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
//Old Way  ES-5
//var a = obj.numbers.a;
//var b = obj.numbers.b;

/* Write an ES2015 Version */
const {numbers:{a, b}} = obj;
console.log("a is " + a + " b is " + b);

//ES5 -Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
var arr = [1,2];
//ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1] ] = [arr[1], arr[0]];

console.log(arr[0]); // 2
console.log(arr[1]); // 1
//ES2015
function raceResults1(array){
    [first, second, third, fourth, ...rest ] = array;
    return ( { first, second, fourth, rest });
}
console.log(raceResults1(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));

//Write a one line function 
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})