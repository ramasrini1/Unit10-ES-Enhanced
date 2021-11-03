function filterOutOdds1() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

const filterOutOdds = (...args) => args.filter((num) => {
    return num % 2 === 0
  });

//findMin(1,4,12,-3) // -3

const findMin1 = (...args) => args.reduce((acc, next) => {
      return Math.min(acc, next);
});

const findMin = (...args) => {
  return Math.min(...args);
};

const mergeObjects = (obj1, obj2) => {
  return {...obj1, ...obj2};
}

console.log(mergeObjects({a:1, b:2}, {c:3, d:4})); // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs = (arr, ...args) => {
  const doubleArr = args.map(function(val){
    return val * 2;
  });
  return [...arr, ...doubleArr];
}

console.log(doubleAndReturnArgs([1,2,3],4,4)); // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]

let items = ['orange', 'apple', 'milk', 'kiwis']
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
  //Get the random index
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx+1)];
}
console.log(removeRandom(items));

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
/** Return a new array with every item in array1 and array2. **/
const extend = (array1, array2) => {
  return [...array1, ...array2];
}
console.log(extend(array1, array2));

const tea = {
	type   : 'oolong',
	name   : 'winter sprout',
	origin : 'taiwan'
};

const teaData = {
	steepTime : '30s',
	brewTemp  : 175,
	origin    : 'japan'
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
  const newObj = {...obj};
  newObj[key] = val;
  return newObj;
}
console.log(addKeyVal(tea, 'color', 'black'));

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  const newObj = {...obj};
  delete newObj[key];
  return newObj;
}
console.log(removeKey(tea, 'color', 'black'));

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
  return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
  newObj = {...obj};
  newObj[key] = val;
  return newObj;
}
//console.log(update(tea, 'type', 'green'));
