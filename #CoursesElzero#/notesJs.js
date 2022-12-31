// // Convert float number to integer
// var intvalue = Math.floor( floatvalue );
// var intvalue = Math.ceil( floatvalue );
// var intvalue = Math.round( floatvalue );

// // `Math.trunc` was added in ECMAScript 6
// var intvalue = Math.trunc( floatvalue );

// Examples
// Positive
// // value=x        //  x=5          5<x<5.5      5.5<=x<6

// Math.floor(value) //  5            5            5
// Math.ceil(value)  //  5            6            6
// Math.round(value) //  5            5            6
// Math.trunc(value) //  5            5            5
// parseInt(value)   //  5            5            5
// ~~value           //  5            5            5
// value | 0         //  5            5            5
// value >> 0        //  5            5            5
// value >>> 0       //  5            5            5
// value - value % 1 //  5            5            5

// //-----------------------------------------------

// // Sorting in Array not alphapitical but numerical

// Sort numbers in ascending order:

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// Sort numbers in descending order:

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
// Find the lowest value:

// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in ascending order
// points.sort(function(a, b){return a-b});

// let lowest = points[0];
// Find the highest value:

// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in descending order:
// points.sort(function(a, b){return b-a});

// let highest = points[0];
// Find the highest value:

// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in ascending order:
// points.sort(function(a, b){return a-b});

// let highest = points[points.length-1];

// //-----------------------------------------------

str = "dfdfa";
console.log(str.split(""));
console.log([...str]);

// //-----------------------------------------------

var str = "reverse string in javascript";
console.log(str.split("").reverse().join(""));  
var newstr = ""
for (let i = str.length - 1; i >= 0; i--) {
  newstr += str[i];
}
function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"))

// //-----------------------------------------------

let arr = [100, 100, 100, 100, [100, 100], [100, 100]];
console.log(new Set(arr).size);
console.log(arr.flat());

// //-----------------------------------------------

let ars = [10, 2, 3, 4, 4];
console.log(2 in ars);
let st = new String("coral");
console.log(st instanceof String);

// //-----------------------------------------------

// Remove Duplicate from Array

let chars = ["A", "B", "A", "C", "B"];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

let chars = ["A", "B", "A", "C", "B"];

let uniqueChars = chars.filter((c, index) => {
  return chars.indexOf(c) === index;
});

console.log(uniqueChars);

// //-----------------------------------------------

// Nullish coalescing operator (??)

const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

// //-----------------------------------------------

let n = 11;
let seen = new Uint8Array(n),
ans = 0;
for (let num = 2; num < n; num++) {
  if (seen[num]) continue;
  ans++;
  for (let mult = num * num; mult < n; mult += num) seen[mult] = 1;
}
console.log(ans);

// //-----------------------------------------------

varName = "larry";

switch (true) {
  case ["afshin", "saeed", "larry"].includes(varName):
    console.log("Hey");
    break;
    
    default:
      console.log("Default case");
}

// //-----------------------------------------------

let theName = "Elzero";

console.log(theName.split(""));
console.log([...theName]);
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log();

// //-----------------------------------------------

Array.from(Array(10).keys())
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Shorter version using spread operator.

// [...Array(10).keys()]
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Start from 1 by passing map function to Array from(), with an object with a length property:

Array.from({length: 10}, (_, i) => i + 1)
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //-----------------------------------------------

// Recursion

function countDown(i) {
  console.log(i);
  // base case
  if (i <= 1)
    return;
  else
    countDown(i - 1);
}
countDown(5); // 5 4 3 2 1

// //-----------------------------------------------

let c = "1234-5678-1234-5678";
let c = "1234567812345678";
let c = 1234567812345678;

let card = c.toString().match(/\d{4}/g).join("-");

// //-----------------------------------------------

// The Difference between in and of

// for (let key in ....)
// for (let value of ....)

// in => Arrays, Objecjts
// of => Arrays, Map, Set

/*
  - In closing
  - So, by looking at the differences both of these for statements, 
  it would be safe to tell that the for...in can be used 
  in most of the cases as you’d be using it with both Objects and Arrays 
  and also you can get values of the properties using their keys
  -  However, when you’re only working with Arrays 
  and only cares about property values, you’d be better off with the for...of.
*/

// //-----------------------------------------------

// #JavaScript Array Methods

// [2,3,4,5].at(1)         // 3 ,  returns you the element with index 1.
// [2,3,4,5].pop()         // [2,3,4] ,  removes the last element.
// [2,3,4,5].push(6)       // [2,3,4,5,6] ,  adds the element at the last position.
// [2,3,4,5].fill(1)       // [1,1,1,1] , fills all the array values.
// [2,3,4,5].join('-')     // '2-3-4-5' , concatinates all the elements with the char passed in arg.
// [2,3,4,5].shift()       // [3,4,5] , deletes the first element.
// [2,3,4,5].reverse()     // [5,4,3,2] , reverses the array.
// [2,3,4,5].unshift(1)    // [1,2,3,4,5] , adds new elements to the beginning of an array.
// [2,3,4,5].includes(5)   // true , returns true if an array contains a specified value. / false if not found
// [2,3,4,5].map((num) => num + 6 ) // [9,10,11,12] , allows you to iterate over an array and modify its elements using a callback function.
// [2,3,4,5].find((num) => num > 4 ) // 5 , returns the value of the first element that passes a test.
// [2,3,4,5].some((num) => num > 5 ) // true , tests whether at least one element in the array passes the test implemented by the provided function.
// [2,3,4,5].filter((num) => num > 4 ) // [5,6] , creates a new array filled with elements that pass a test provided by a function.
// [2,3,4,5].every((num) => num > 5 ) // false , executes a function for each array element.
// [2,3,4,5].findindex((num) => num > 4 ) // 2 ,  returns the index of a first array element that satisfies the provided condition.
// [2,3,4,5].reduce((acc,num) => acc+num ) // 18 , returns a single value: the function's accumulated result.

// //-----------------------------------------------

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 

// //-----------------------------------------------
