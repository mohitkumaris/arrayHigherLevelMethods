const myArray = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 myArray.push(36); // at the end of array
 //console.log(myArray);
 myArray.unshift(1); // inserts at starting of an array
 //console.log(myArray);
 myArray.shift(); // removes the 1st element of an array and returns it.
//console.log(myArray);

// Using ES6 spread operator; The IMMUTABLE WAY
const newArray = [1,...myArray,36];
//console.log(newArray);

// How to create a private variable ; using closure
function createPrivate() {
    var private = 'I am private';
    return function(){
        return private;
    }
}
const privateFunction = createPrivate();
//console.log(privateFunction());

// typeof
//console.log(typeof typeof 1);

// using Bind
var hero = {
    name:'mohit kumar',
    print:function(names){
        return this.name;
    }
}

const newName = hero.print.bind(hero);
//console.log(newName());
//console.log(hero.print());
//console.log(hero.print.call(hero,'hello'));

// find longest word in a string
function findLongestWordLength(str) {
  let length = str.split(" ").sort((a,b)=>{ return b.length - a.length })[0].length;
  
  return length;
  }
  
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// Largest of four array
function largestOfFour(arr) {
    // You can do this!
    let finalArray = [];
  const sorted = arr.map(a => a.sort((a,b) => b-a));
   for(let i=0; i < sorted.length; i++){
       finalArray.push(sorted[i][0]);
   }
   //console.log(finalArray);
}
  
  
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  function confirmEnding(str, target) {
    let targetLength = target.length;
    let trueFalse = "";
     trueFalse = str.substring(str.length - targetLength,str.length);
    
    if(trueFalse.toString() == target)
    return "true";
    else
    return "false";
  }
  
 // console.log(confirmEnding("Connor", "n"));

 // usage of map
 let arr = [4,5,6,7];
 let newArr = arr.filter((a)=> a > 4);
 //console.log(newArr);

// Factorlize
 function factorialize(num) {
   let fact = 1;
   if(num == 0)
   return 1;
   else
  return fact = num * factorialize(num-1);
}

// console.log(factorialize(4));

// Repeat a string 
function repeatStringNumTimes(str, num) {
  // repeat after me
  let emptyArray =[];
  for(let i=0;i<num;i++){
     emptyArray.push(str);
    
  } 
  console.log(emptyArray.join(""));
  
}

repeatStringNumTimes("abc", 3);