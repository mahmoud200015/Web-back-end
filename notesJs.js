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

