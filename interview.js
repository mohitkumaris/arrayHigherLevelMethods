const myArray = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 myArray.push(36); // at the end of array
 console.log(myArray);
 myArray.unshift(1); // inserts at starting of an array
 console.log(myArray);
 myArray.shift(); // removes the 1st element of an array and returns it.
console.log(myArray);

// Using ES6 spread operator; The IMMUTABLE WAY
const newArray = [1,...myArray,36];
console.log(newArray);

// How to create a private variable ; using closure
function createPrivate() {
    var private = 'I am private';
    return function(){
        return private;
    }
}
const privateFunction = createPrivate();
console.log(privateFunction());

// typeof
console.log(typeof typeof 1);

// using Bind
var hero = {
    name:'mohit kumar',
    print:function(names){
        return this.name;
    }
}

const newName = hero.print.bind(hero);
console.log(newName());
console.log(hero.print());
console.log(hero.print.call(hero,'hello'));

// find longest word in a string
function findLongestWordLength(str) {
  let length = str.split(" ").map(s => s.length).sort((a,b)=> b-a)[0];
  return length;
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");