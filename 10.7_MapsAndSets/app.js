//Quick Question 1
//What does the following code return?
//Duplicates are removed
new Set([1,1,2,2,3,4]); //{1, 2, 3, 4}

//Quick Question 2
//What does the following code return?
[...new Set("referee")].join(""); //'ref'

//Quick Questions #3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true); //{Array(3) => true}
m.set([1,2,3], false);//{Array(4) => true}

//hasDuplicate
function hasDuplicate(arr){
  return (new Set(arr).size !== arr.length);
}

//Write a function called vowelCount which accepts a string and returns a map 
//where the keys are numbers and the values are the count of the 
//vowels in the string.
function isVowel(ch){
  return "aeiou".includes(ch);
}
function vowelCount(str){
  let vowelMap = new Map();
  for (let ch of str){
    let char = ch.toLowerCase();
    if ( isVowel(char) ){
      if (vowelMap.has(char)){
        let count = vowelMap.get(char);
        count++;
        vowelMap.set(char, count);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }