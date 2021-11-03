const arr = [2, 3, 4];
const numbers = [2,3,6];

//ES5 Map Callback
function double1(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

//ES2015 Arrow Functions Shorthand
//Refactor to use arrow functions
const double2 = ((arr) => {
  return arr.map((val) => {
    return val * 2;
  });
});

//Refactor and turn it one liner
const double = arr => arr.map(val => val * 2);

//Replace all functions with arrow functions
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens1 = (numbers) => {
  var squares = numbers.map((num) => {
    return num ** 2;
  });
  var evens = squares.filter((square) => {
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens2 = numbers => numbers.map(num => num**2).filter(square => square % 2 === 0)