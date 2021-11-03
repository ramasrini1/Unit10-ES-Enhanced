function createInstructor_Es5(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
//refactor some ES5 code into ES2015.
//Key has same name as variable name
/* Write an ES2015 Version */
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */
//Computed Property Names
var instructor = {
  firstName: "Colt",
  [favoriteNumber]:  "That is my favorite"
}

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

/* Write an ES2015 Version */
var instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

function createAnimal(species, verb, sound){
  return {
    species,
    [verb](){
      return sound;
    }
  }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
//console.log(d.bark());  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"