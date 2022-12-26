// // Code One
// document.getElementById("el").style.color = "red";
// // Code Two
// window.onload = function () {
//   document.getElementById("el").style.color = "red";
// };
// // Code Three
// document.getElementById("el").style.color = "red";

// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";

// console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;", "color: green; font-weight: bold; font-size: 40px;", "color: blue; font-size: 40px;");

// console.group("Group 1");
// console.log("Message one");
// console.log("Message two");
// console.groupCollapsed("Child Group");
// console.log("Message one");
// console.log("Message two");
// console.groupCollapsed("Grand Child Group");
// console.log("Message one");
// console.log("Message two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Group 2");
// console.log("Message one");
// console.log("Message two");

// console.table(["mahmoud", "aymnan", "mahmoud", "Abdalmoaz"]);

// console.log("I am In Console");
// document.write("I am In Page");

//------------------------------------------------------
// Add Variables Here
// let numberOne = 10,
//   numberTwo = 20;

// // Ouput
// console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
// console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String
// console.log(numberOne+""+numberTwo); // Normal Concatenate => 1020
// console.log(typeof(numberOne+""+numberTwo)); // Normal Concatenate => String

// console.log(numberTwo + "\n" + numberOne);
// /*
//   Normal Concatenate
//   20
//   10
// */

// console.log(`${numberTwo}
// ${numberOne}`);
// /*
//   Template Literals Way
//   20
//   10
// */

//-----

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

//-----

// console.log("\`I\'m In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n\+\+ With \+\+\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`")

//-----

// let a = 21;
// let b = 20;

// console.log(`_` + `${a}_${b}`.repeat(4) + `_`); // _21_2021_2021_2021_20_
// _21_2021_2021_2021_20_

//-----------------------------------------------

// Replace ? With Arithmetic Operators
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num * num - num); // 6

// // Soultion Three
// console.log(++num + true + true); // 6

// // Soultion Four
// console.log(++num + num - --num); // 6

// // Solution Five
// console.log(num + num - true - true); // 6

// // Solution Six
// console.log(++num % ++num + true); // 6

// let num = "10";

// Solution One
// console.log(+num + +num); // 20

// Solution Two
// console.log(+num + +num % (+num * +num)); // 20

// Solution Three
// console.log(Number(num) + Number(num)); // 20

// Solution Four
// console.log(Number(num) + +num); // 20

//-----------------------------------------------

// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(10 ** 5); // 100000
// console.log(+"100000"); // 100000
// console.log(Number("100000")); // 100000
// console.log(Math.round(99999.9)); // 100000
// console.log(1e5); // 100000
// console.log(10e5 / 1e1); // 100000
// console.log(Math.ceil(99999.1)); // 100000
// console.log(parseInt("100000 Osama")); // 100000
// console.log(100000..toFixed(0)); // 100000
// console.log(100000..toString()); // 100000
// console.log(`${"100000"}`)
// console.log(`${100000}`)

// // ------

// console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// // ------

// console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
// console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16

// // ------

// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(+parseFloat(myVar).toFixed(2)); // 100.57
// console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
// console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57

// // ------

// let num = 10;
// console.log(Number.isInteger(num) + true); // 2

// // ------

// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(+flt.toFixed(0)); // 10

// // ------

// console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

//-----------------------------------------------

// let userName = "Elzero";
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.substr(0, 1).toLowerCase()); // e
// console.log(userName.slice(0, 1).toLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase()); // e
// console.log(userName.substring(0,1).toLowerCase().repeat(3)); // eee
// console.log(userName.charAt(userName.indexOf("E")).toLowerCase().repeat(4));

// // ------

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

//-----------------------------------------------

// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(! -50 == ! +"-40"); // true
// console.log(! 10 == ! -"-40"); // true
// console.log(! "10" == ! 10); // true
// console.log(!20 == false); // true

// console.log(typeof -10 !== typeof "-10"); // true
// console.log(typeof -50 == typeof +"-40"); // true
// console.log(typeof -50 === typeof +"-40"); // true
// console.log(typeof 10 == typeof -"-40"); // true

// //------

// let num1 = 10;
// let num2 = 20;

// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log(!num1 == !num2); // true
// console.log(typeof num1 == typeof num2); // true
// console.log(!num1 === !num2); // true
// console.log(num1 <= num2); // true
// console.log(num2 >= num2); // true

// // ------

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a == b); // true
// console.log(a !== b || a == c); // true
// console.log(!(a > b) && !(a == b) && !(a < c) && !(a === c)); // true

//-----------------------------------------------

// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"

// num < 10
//   ? console.log(`00${num}`)
//   : num > 10 && num < 100
//   ? console.log(`0${num}`)
//   : console.log(num);

// ------

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log("{num1} Is The Same Value As {str}");
// }
// if (num1 == str && num1 !== str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }
// if (num1 != str2 && num1 !== str2) {
//   console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }
// if (str != str2 && typeof str === typeof str2) {
//   console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

// // Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

// ------

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && num3 !== num1) {
//   console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
// } else if (num3 > num1 && num3 == num2 && num3 !== num2) {
//   console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// } else if (num3 !== num1 && typeof num3 != typeof num2) {
//   console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
// }

// // Needed Output
// ("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

// -------

// Edit What You Want Here

// let num1 = 20;
// let num2 = 1;
// let num3 = 20;
// let num4 = 60;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 8

// let day = "   monday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday
// // console.log(day.trim().charAt(0).toUpperCase() + day.trim().slice(1));
// switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("No Appointments Available");
//     break;

//   case "Monday":
//   case "Thursday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;

//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;

//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;

//   default:
//     console.log("Its Not A Valid Day");
// }

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 9

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// // Method 1
// console.log(num, myFriends.slice(myFriends.length - ++num, --num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myFriends.slice(--myFriends.length - num, num)); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends.reverse().slice(-num).reverse())

// // ------

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]

// // ------

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = arrOne.concat(arrTwo).sort().reverse();

// // Write One Single Line Of Code

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// // -------

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[words.length - --website.length][0].slice(website.length).toUpperCase()); // ZERO

// // -------

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions

// if (haystack.includes(needle))
//   console.log("Found");
// if (haystack.indexOf(needle) !== -1)
//   console.log("Found");
// if (haystack.lastIndexOf(needle) !== -1)
//   console.log("Found");

// // -------

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = arr1.concat(arr2).sort().join("").slice(-arr1.length).toLowerCase();

// // Your Code Here

// console.log(allArrs); // fxy

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 10

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= 100; i += 10) {
//   if (i === 40)
//     continue;
//   console.log(i);
// }

// -------

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > end; i--) {
//   if (i < 10)
//     console.log(`0${i}`);
//   else
//     console.log(`${i}`);
//   if (i === stop) {
//     break;
//   }
// }

// -------

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   console.log(`-- ${breaker}`);
//   console.log(`-- ${end - breaker}`);
// }

// -------

// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   // Write Your Code Here
//   console.log(index);
//   index -= jump;
//   if (index === jump)
//     break;
// }

// -------

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let count = letter.length;

// for (let i = Number(false); i < friends.length; i++) {
//   // console.log(i);
//   if (friends[i].startsWith(letter.toUpperCase())) {
//     continue;
//   }
//   console.log(`${count} => ${friends[i]}`);
//   count++;
// }

// -------

// let start = 0;
// let swappedName = "elZerO";
// let result = "";
// let newSwap = swappedName.split("");
// console.log(newSwap.join(""));
// for (let i = start; i < swappedName.length; i++) {
//   if (swappedName[i].toLowerCase() === swappedName[i]) {
//     newSwap[i] = newSwap[i].toUpperCase();
//     result += newSwap[i].toUpperCase();
//   }
//   else {
//     newSwap[i] = newSwap[i].toLowerCase();
//     result += newSwap[i].toLowerCase();
//   }
// }
// console.log(newSwap.join(""), result);

// -------

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start; i < mix.length; i++) {
//   if (i === start) {
//     continue;
//   }
//   if (typeof mix[i] !== 'string') {
//     console.log(mix[i]);
//   }
// }

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 11 == important

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length) {
//   if (typeof friends[index] === 'number' || friends[index].startsWith('A')) {
//     index++;
//     continue;
//   }
//   console.log(`"${++counter} => ${friends[index]}"`);
//   index++;
// }

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 12

function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") {
    return console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    return console.log(`Hello Miss ${theName}`);
  }
  console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// -------

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    return console.log(`Second Number NOt Found`);
  }
  switch (operation) {
    case "add":
    default:
      return console.log(firstNum + secondNum);
    case "subtract":
      return console.log(firstNum - secondNum);
    case "multiply":
      return console.log(firstNum * secondNum);
    // default:
    //   return console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// -------

function ageInTime(theAge) {
  // Your Code Here
  if (theAge < 10 || theAge > 100) return console.log(`Age Out Of Range`);
  let months = theAge * 12;
  let weeks = months * 4;
  let days = weeks * 7;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
  console.log(
    `${months}\n${weeks}\n${days}\n${days}\n${hours}\n${minutes}\n${seconds}`
  );
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// -------

function checkStatus(a, b, c) {
  // Your Code Here
  let name, age, status;
  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : (status = a);
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : (status = b);
  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : (status = a);
  status === true
    ? (status = `You Are Available For Hire`)
    : (status = `You Are Not Available For Hire`);
  console.log(`Hello ${name}, Your Age is ${age}, ${status}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ---------

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value = ${i}>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

// ---------

function multiply(...nums) {
  let mul = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "string") continue;
    // else if (typeof Math.trunc(nums[i]) !== nums[i])
    //   nums[i] = Math.trunc(nums[i]);
    mul *= parseInt(nums[i]);
  }
  console.log(mul);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 13

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    arrName = zName.split(" ");
    return `${arrName[0]} ${arrName[1][0].toUpperCase()}., `;
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    return `Your Age Is ${parseInt(zAge.slice(0, 2))}, `;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}${ageWithMessage(
      zAge
    )}${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// --------

function itsMe() {
  return `Iam A Normal Function`;
}
// let fArrow = () => {
//   return `Iam An Arrow Function`;
// }
let fArrow = () => `Iam An Arrow Function`;

console.log(itsMe()); // Iam A Normal Function
console.log(fArrow()); // Iam A Arrow Function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
let fUrlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log(fUrlCreate("https", "elzero", "org")); // https://www.elzero.org

// -------

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

let fChecker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
};

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
console.log(fChecker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ------

function specialMix(...data) {
  // Your Code Here
  let count = (sum = 0);
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") sum += data[i];
    else if (
      typeof data[i] === "string" &&
      Number.isInteger(parseInt(data[i].slice(0, 2)))
    ) {
      sum += parseInt(data[i].slice(0, 2));
    } else count += 1;
  }
  if (count === data.length) return `All Is Strings`;
  return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 14

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero
let mixMap = mix
  .map((ele) => {
    return isNaN(ele) ? ele : "";
  })
  .reduce((acc, curr) => {
    return acc + curr;
  });
console.log(mixMap);

// --------- Important && Smart

let myString = "EElllzzzzzzzeroo";
// Elzero
let uniFilter = myString
  .split("")
  .filter((ele, index) => {
    console.log(myString.indexOf(ele), index);
    return myString.indexOf(ele) === index;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  });
console.log(uniFilter);

// ---------

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let conReduce = myArray.reduce((acc, curr) => {
  return typeof curr === "object" ? acc + curr.join("") : acc + curr;
});
console.log(conReduce);

// ---------

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let numsFilterMap = numsAndStrings
  .filter((ele) => {
    return !isNaN(ele);
  })
  .map((ele) => {
    return -ele;
  });
console.log(numsFilterMap);

// ---------

let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let resultReduce = nums.reduce((acc, curr) => {
  return curr % 2 !== 0 ? curr + acc : curr * acc;
}, 1);
console.log(resultReduce);

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 15

// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: () => {
    console.log(this);
    return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// --------

// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
  property: "Method Two",
});
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
  property: "Method Three",
});
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, { property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"

// ---------

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// -----------

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
// console.log(objectLength);
let game = Object.keys(myFavGames);
console.log(game);
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["two"]}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}

// // Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 16

let ele1Show1 = document.querySelector("div");
let ele1Show2 = document.querySelector("#elzero");
let ele1Show3 = document.querySelector(".element");
let ele1Show4 = document.querySelector("[name='js']");
let ele1Show5 = document.querySelectorAll("div");
let ele1Show6 = document.querySelectorAll("#elzero");
let ele1Show7 = document.querySelectorAll(".element");
let ele1Show8 = document.querySelectorAll("[name='js']");
let ele1Show9 = document.getElementById("elzero");
let ele1Show10 = document.getElementsByClassName("element")[0];
let ele1Show11 = document.getElementsByTagName("div");
let ele1Show12 = document.body.firstChild;
let ele1Show13 = document.body.firstElementChild;
let ele1Show14 = document.body.lastChild;
let ele1Show15 = document.body.lastElementChild;
let ele1Show16 = document.getElementsByName("js")[0];
// console.log(ele1Show16);

// ---------

// for (let i = 0; i < 5; i++) {
//   document.images[i].src =
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   document.images[i].alt = "Elzero Logo";

//   document.images[i].width = "250";
//   document.images[i].title = "elzero";
//   document.images[i].style = "background-color: darkgreen; margin: 3px;";
// }

// ---------- Important -- Smart

// let input = document.querySelector("input");
// input.oninput = () => {
//   if (input.value === "") input.value = 0;
//   document.querySelector(".result").textContent = `${parseInt(
//     input.value
//   )} USD Dollar = ${(parseInt(input.value) * 15.6).toFixed(2)} Egyptian Pound`;
//   // console.log(input.value)
// };

// ---------

// let eleOne = document.querySelector(".one");
// let eleTwo = document.querySelector(".two");
// eleOne.title = eleOne.className;
// eleTwo.title = eleTwo.className;
// eleOne.textContent = eleOne.className;
// eleTwo.textContent = `${eleTwo.className} ${eleTwo.attributes.length}`;

// let temp = eleOne.textContent;
// eleOne.textContent = eleTwo.textContent;
// eleTwo.textContent = `${temp} ${eleTwo.attributes.length}`;
// console.log(eleTwo);

// ---------

// for (let i = 5; i < 10; i++) {
//   if (document.images[i].hasAttribute("alt")) {
//     document.images[i].alt = "Old";
//   } else {
//     document.images[i].alt = "Elzero New";
//   }
// }

// // ----------

// // assign 6 is very Important and // It contains all points of Dom js;

// let inputElements = document.querySelector(".input");
// let inputText = document.getElementsByName("texts")[0];
// let selectEle = document.querySelector("select");

// let createEles = document.getElementsByName("create")[0];

// // Two Solution (documents.forms[1].onsubmit) OR (createEles.onclick)
// createEles.onclick = (event) => {
//   event.preventDefault();
//   // (Important) // Remove Old Elements before Create New.
//   document.querySelectorAll(".box").forEach((ele) => ele.remove());

//   for (let i = 0; i < parseInt(inputElements.value); i++) {
//     // Creating Elements
//     let creEles = document.createElement(`${selectEle.value.toLowerCase()}`);
//     creEles.textContent = inputText.value;
//     creEles.className = "box";
//     creEles.title = "Element";
//     creEles.id = `id-${i + 1}`;

//     // Styling Elements
//     creEles.style =
//       "width: 200px; background-color: orange; color: #FFF; text-align: center; border-radius: 10px; padding: 10px; margin: 20px; display: inline-block;";

//     // Append Elements To Div Result
//     document.querySelector(".results").appendChild(creEles);
//   }
// };

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 17

// let open;

// for (let i = 0; i < document.links.length; i++) {
//   if (document.links[i].classList.contains('open') && document.links[i].textContent === 'Elzero')
//     open = document.links[i];
//     Or document.links[i].click(); Without using function
// }
// window.onclick = () => {
//   open.click();
// };

// ---------

// let ele = document.querySelector(".our-element");
// // Div 1
// let eleStart = document.createElement("div");
// eleStart.className = 'start';
// eleStart.title = 'Start Element';
// eleStart.setAttribute("data-value", "Start");
// eleStart.innerHTML = "Start";
// document.body.appendChild(eleStart);
// // Div 2
// let eleEnd = document.createElement("div");
// eleEnd.className = 'end';
// eleEnd.title = 'End Element';
// eleEnd.setAttribute("data-value", "End");
// let endText = document.createTextNode("End");
// eleEnd.appendChild(endText);
// document.body.appendChild(eleEnd);

// ele.before(eleStart);
// ele.after(eleEnd);
// document.querySelector("p").remove();

// ---------

// let sibling = document.querySelector("div span");
// console.log(sibling.nextSibling.nextSibling.nextSibling.textContent.trim())

// ---------

// let ele = document.querySelector("section");
// console.log(ele.nodeName);

// document.addEventListener("click", function (e) {
//   console.log(`This is ${e.target.nodeName}`);
// });

// ---------

// Current Element
let curEle = document.querySelector(".assign [title='Current']");
// Div List
let listDiv = document.createElement("div");
listDiv.style.cssText = "background-color: orange; border-radius: 5px; color: white; margin: 5px; font-weight: bold; padding: 20px;";


document.querySelector(".classes-to-add").addEventListener("blur", function (e) {
  if (e.target.value !== "")
    curEle.classList.add(e.target.value.toLowerCase());
  listDiv.innerHTML = curEle.classList.toString();
  document.querySelector(".assign .classes-list div").appendChild(listDiv);
  e.target.value = "";
});

document.querySelector(".classes-to-remove").addEventListener("blur", function (e) {
  if (e.target.value !== "")
  curEle.classList.remove(e.target.value.toLowerCase());
  listDiv.innerHTML = curEle.classList.toString();
  if (curEle.classList.length === 0) {
    listDiv.innerHTML = "No Classed To Show";
  }
  document.querySelector(".assign .classes-list div").appendChild(listDiv);
  e.target.value = "";
});

console.log(curEle.classList.length);
console.log(document.querySelector(".assign .classes-list div"));

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 18

// let strNum = window.prompt(`“Print Number From – To”`, "Example: 5-20");
// let minNum = Math.min(strNum.split('-')[0], strNum.split('-')[1]);
// let maxNum = Math.max(strNum.split("-")[0], strNum.split("-")[1]);
// for (let i = minNum; i <= maxNum; i++) {
  //   console.log(i);
  // }
  
// Another Solution
// let arrNums = strNum.split('-').sort((a, b) => a - b);

// ---------

function createPopup() {
  let div = document.createElement("div");
  div.style.cssText =
    "background-color: #ddd; width: 500px; padding: 20px; margin: 20px auto; text-align: center; border: 2px solid #ccc; border-radius: 10px; position: relative;";
  let btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.style.cssText =
    "position: absolute; right: -13px; top: -13px; width: 28px; height: 28px; background-color: red; color: #fff; border-radius: 50%; outline: none; border: none; display: flex; justify-content: center; align-items: center;";
  btn.addEventListener('click', function () {
    // document.body.removeChild(div);
    div.style.display = 'none';
  });
  let h2 = document.createElement("h2");
  h2.innerHTML = "Welcome";
  let p = document.createElement("p");
  p.textContent = "Welcome To Elzero Web School";
  // Another Solution
  // div.append(btn, h2, p);
  div.appendChild(btn);
  div.appendChild(h2);
  div.appendChild(p);
  document.body.appendChild(div);
};

// setTimeout(createPopup, 5000);

// ---------

// let div10 = document.createElement("div");
// div10.innerHTML = '10';
// div10.style.cssText = "background-color: #EEE; padding: 10px; width: fit-content; text-align: center; margin: 20px;"
// document.body.appendChild(div10);

// function decrease() {
//   div10.innerHTML -= 1;
//   if (div10.innerHTML === '0')
//     clearInterval(counter1);
// }

// let counter1 = setInterval(decrease, 100);

// ---------

// let div20 = document.createElement("div");
// div20.innerHTML = "20";
// div20.style.cssText =
//   "background-color: #EEE; padding: 10px; width: fit-content; text-align: center; margin: 20px;";
// document.body.appendChild(div20);

// function decreaseOpen() {
//   div20.innerHTML -= 1;
//   if (div20.innerHTML === "0") {
//     clearInterval(counter2);
//     window.open("https://elzero.org", "_blank", ""); // answer = _self
//     // Another Solution
//     // location.href = "https://elzero.org";
//   }
// }

// let counter2 = setInterval(decreaseOpen, 100);

// --------

// let div30 = document.createElement("div");
// div30.innerHTML = "30";
// div30.style.cssText =
//   "background-color: #EEE; padding: 10px; width: fit-content; text-align: center; margin: 20px;";
// document.body.appendChild(div30);

// function decreaseOpenAfter() {
//   div30.innerHTML -= 1;
//   if (div30.innerHTML === "5") {
//     window.open("https://elzero.org", "_blank", "width=400, height=400");
//   }
//   if (div30.innerHTML === '0') {
//     clearInterval(counter3);
//   }
// }

// let counter3 = setInterval(decreaseOpenAfter, 100);

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 19

let select1 = document.querySelector(".options .fonts");
let select2 = document.querySelector(".options .colors");
let select3 = document.querySelector(".options .sizes");

window.onload = () => {
  if (window.localStorage.getItem('fonts')) {
    select1.value = window.localStorage.getItem("fonts");
  }
  if (window.localStorage.getItem('colors')) {
    select2.value = window.localStorage.getItem("colors");
  }
  if (window.localStorage.getItem('sizes')) {
    select3.value = window.localStorage.getItem("sizes");
  }
  styleText();
}

select1.addEventListener('change', function (e) {
  // let selected = document.querySelector(`.fonts [value="${e.currentTarget.value}"]`).textContent;
  console.log(select1.value);
  window.localStorage.setItem("fonts", select1.value);
  styleText();
});
select2.addEventListener('change', function (e) {
  // let selected = document.querySelector(`.colors [value="${e.currentTarget.value}"]`).textContent;
  window.localStorage.setItem("colors", select2.value);
  styleText();
});
select3.addEventListener('change', function (e) {
  // let selected = document.querySelector(`.sizes [value="${e.currentTarget.value}"]`).textContent;
  window.localStorage.setItem("sizes", select3.value);
  styleText();
});


function styleText() {
  window.localStorage.getItem("fonts")
    ? (document.body.style.fontFamily = window.localStorage.fonts)
    : (document.body.style.fontFamily = "unset");
  window.localStorage.getItem("colors")
    ? (document.body.style.color = window.localStorage.colors)
    : (document.body.style.color = "#FFF");
  window.localStorage.getItem("sizes")
    ? (document.body.style.fontSize = window.localStorage.sizes)
    : (document.body.style.fontSize = "unset");
}

// --------

let userName = document.querySelector(`form [type='text']`);
let email = document.querySelector("form [type='email']");
let password = document.querySelector("form [type='password']");
let selectForm = document.querySelector("form .select");

window.onload = () => {
  if (window.sessionStorage.getItem("userName")) {
    userName.value = window.sessionStorage.getItem("userName");
  }
  if (window.sessionStorage.getItem("email")) {
    email.value = window.sessionStorage.getItem("email");
  }
  if (window.sessionStorage.getItem("password")) {
    password.value = window.sessionStorage.getItem("password");
  }
  if (window.sessionStorage.getItem("selectForm")) {
    selectForm.value = window.sessionStorage.getItem("selectForm");
  }
}

userName.oninput = (e) => {
  window.sessionStorage.setItem('userName', e.target.value);
}
email.oninput = (e) => {
  window.sessionStorage.setItem('email', e.target.value);
}
password.addEventListener('input', function (e) {
  window.sessionStorage.password = e.target.value;
});
selectForm.addEventListener('input', function (e) {
  window.sessionStorage.selectForm = e.target.value;
})

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 20

// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// let [a, , , , e] = myNumbers;

// console.log(a * e); // 5

// ---------

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

let [v, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${v}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// ---------

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
let arr2 = arr3.concat(arr1);

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let [, a1, b1, c1] = arr2;

console.log(arr2);

console.log(`My Best Friends: ${a1}, ${b1}, ${c1}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// ---------

const member1 = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let { age: a2, working: w, country: c2, hobbies: [h1, , h3] } = member1;

console.log(`My Age Is ${a2} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c2}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// ---------

const game1 = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
let { title: t, developer: d1, releases: r, } = game1;
let {
  "Oath In Felghana": [u, j],
  [Object.keys(r)[1]]: { US: u_price, JAP: j_price },
  Origin: or,
} = r;

let { o = "Oath In Felghana", a3 = [Object.keys(r)[1]] } = game1.releases;


// let {Object.keys(releases)[0]: o, } = game1.releases

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d1} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a3}`);
// Although I Love Ark Of Napishtim

console.log(`${a3} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a3} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

// ---------


console.log('==============================================');

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

if (chosen === 1) {
  let { title: t, age: a, available: w, skills: [, s]} = myFriends[chosen - 1];
  console.log(t, a, w?'Available': 'Not Available', s);
} else if (chosen === 2) {
  let { title: t, age: a, available: w, skills: [, s]} = myFriends[chosen - 1];
  console.log(t, a, w ? "Available" : "Not Available", s);
} else {
  let { title: t, age: a, available: w, skills: [, s]} = myFriends[chosen - 1];
  console.log(t, a, w ? "Available" : "Not Available", s);
}

// If chosen === 1
("Osama");
39;
("Available");
("CSS");

// If chosen === 2
("Ahmed");
25;
("Not Available");
("Django");

// If chosen === 3
("Sayed");
33;
("Available");
("Laravel");

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 21

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);
console.log([...setOfNumbers][setOfNumbers.size - 1]);
// console.log([...'first'])
// console.log(Array.from('first'));

// Needed Output
// Set(3) {10, 20, 2}
// 2

// ---------

let myFriends1 = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends1)].sort());

// Needed Output
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

// ---------

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// let mapObj = new Map([
//   [Object.keys(myInfo)[0], Object.values(myInfo)[0]],
//   [Object.keys(myInfo)[1], Object.values(myInfo)[1]],
//   [Object.keys(myInfo)[2], Object.values(myInfo)[2]],
// ]);
let mapObj = new Map(Object.entries(myInfo));

console.log(Object.entries(myInfo)); // New and Important

console.log(mapObj);
console.log(mapObj.size);
console.log(mapObj.has('role'));

// // Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// ----------

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].reduce((acc, curr) => curr !== '0'? acc + curr: acc));

// Needed Output
// 123;

// ----------

let theName = "Elzero";

console.log(theName.split(''));
console.log([...theName]);
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);

// Needed Output
// ["E", "l", "z", "e", "r", "o"];

// -----------

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let filterNumbers = chars.filter((ele) => !isNaN(ele));
let numbersCount = filterNumbers.length;
let filterChars = chars.filter((ele) => typeof ele === 'string');

let newChars = [...filterNumbers, ...filterChars];


console.log(newChars)

newChars.copyWithin(0, numbersCount, numbersCount * 2);

console.log(newChars);


// Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];


// -----------

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// console.log(numsOne.concat(numsTwo));
// console.log([...numsOne, ...numsTwo]);
// numsOne.push(...numsTwo);
// console.log(numsOne);
// console.log(new Set([...numsOne, ...numsTwo]));
// console.log([numsOne + ',' + numsTwo]);

// Needed Output
// [1, 2, 3, 4, 5, 6];

// -----------

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1) * [...n1, ...n2].length);

// Needed Output
// 210;

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 22

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let ipRe = /(\d{4}|\w{2}\d)/ig;
// let ipRe = /(\d+|\w+\d)/ig;
// let ipRe = /\w+?\d+/ig;
// let ipRe = /(\d+\D|\w+?)+/ig; // correct
let ipRe = /(\d+|\D)+/ig; // correct
console.log(ip.match(ipRe));

// ----------

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// let specialNamesRe = /os\d*o/ig;
let specialNamesRe = /\b(os)\d*\B(o)/ig;
console.log(specialNames.match(specialNamesRe));

// Output
// ['Os10O', 'OsO', 'Os100O']

// -----------

let phone = "+(995)-123 (4567)";

// let phoneRe = /(\D\(\d+\)(\D\d+)?)+/ig;
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(phoneRe));

// ------------

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i; // match all emalis with https://www.

// https://-asdf.-asdf.asdf:.asdf?.
// http://

// ------------

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d+\D*\d+\D*\d{0,}/ig; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

// ------------

// let url1 = "elzero.org";
// let url2 = "http://elzero.org";
// let url3 = "https://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
// let url6 = "https://www.elzero.org:800080/articleselzero.phpfd?5klajdfs/dfa=23.";

// // let re = /((https?:\/\/)?(www.)?\w+.\D\w+\D)+/gi; // Write Your Pattern Here
// let re = /(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\D+\w+\D+)?/gi; // Write Your Pattern Here
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// console.log(url6.match(re));

// "elzero.org";
// "http://elzero.org";
// "https://elzero.org";
// "https://www.elzero.org";
// "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 23

// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  };
  run() {
    return `Car Is Running Now`;
  };
  stop() {
    return `Car Is Stopped`;
  };
}

// Three cars object 
let car1 = new Car('kia', '1800', 100000000);
let car2 = new Car('tesla', '2800', 1000000001);
let car3 = new Car('marcides', '3800', 1000000002);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());

// Needed Output

("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");

// -----------

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.s = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size is ${this.s}`;
  }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// ------------

// Edit The Class
class User {
  // Private Property
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  creditCard() {
    let card = this.#c.toString().match(/\d{4}/g).join('-');
    // console.log(card);
    return card;
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.creditCard()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

// -------------

// Write Your Code Here

String.prototype.addLove = function() {
  return `I Love ${this} Web School`; // this == myStr
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// -------------

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  // country: {
  //   configurable: true,
  // }
});
console.log(delete myObj.country);

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 24

// console.log(Date.now("sep 15 2000")); is wrong
let datanow = new Date(); // Or Date.now()
let birthday = new Date("Sep /15 /2000");
let diff = datanow - birthday;
console.log(diff);
let seconds = diff / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = months / 12;

console.log(Math.trunc(seconds));
console.log(Math.trunc(minutes));
console.log(Math.trunc(hours));
console.log(Math.trunc(days));
console.log(Math.trunc(months));
console.log(Math.trunc(years));

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

// -----------

// Extra Infomration
console.log(new Date().getTime() === Date.now());

console.log(new Date(1980, 0, 1, 0, 0, 1))

// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// -----------

// Extra Infomration
console.log(new Date(null));
console.log(new Date(0)); // any value (true, false, 1, any number, )

console.log(new Date(2022, 10, 30, 18, 13, 20));
let dd = new Date();
dd.setDate(0);
console.log(dd);
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(
  `Previous Month is ${month[new Date(2022, 10).getMonth()]} And Last Day is ${new Date(2022, 10, 30).getDate()}`
);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

// ------------

// Needed Output

console.log(new Date("sep 15 2000"));
console.log(new Date(2000, 8, 15));
console.log(new Date(968965200000));

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

// ------------

console.log(performance.now())
let start = performance.now();

// for (let i = 0; i < 99; i++) {
//   console.log(i);
// }

let end = performance.now();
let duration = end - start;
console.log(`Loop Took ${Math.floor(duration)} Milliseconds`);

// Needed Output

// "Loop Took 1921 Milliseconds."

// -------------

// Write Your Generator Function Here

function* gen() {
  yield 14;
  yield 154;
  yield 494;
  yield 1034;
  yield 1774;
  yield 2714;
  yield 3854;
  yield 5194;
  yield 6734;
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// -----------

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5].filter((ele, index, arr) => {
    return index === arr.indexOf(ele);
  });
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here

function* genAll() {
  yield* genNumbers();
  yield* [...new Set(genLetters())];
}

let generator1 = genAll();

console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}

// -------------

// import calc, * as modOne from './mod-two.js';

// // main.js File
// console.log()
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 25

// let req = new XMLHttpRequest();
// console.log(req);
// req.open("GET", "./articles.json", true);
// req.send();
// req.onreadystatechange = function () {
//   // console.log(req.readyState);
//   // console.log(req.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//     console.log("Data Loaded");
//   }
// }

// Needed Output

// "JSON Object Content Here"
// "Data Loaded"

// --------------

let req = new XMLHttpRequest();
console.log(req);
req.open("GET", "./articles.json", true);
req.send();
req.onreadystatechange = function () {
  // console.log(req.readyState);
  // console.log(req.status);
  if (this.readyState === 4 && this.status === 200) {
    // Convert to JavaScript Object
    let mainData = JSON.parse(this.responseText);
    // console.log(mainData['articles']['0']['section']);
    for (let i = 0; i < 5; i++) {
      mainData["articles"][`${i}`]["section"] = 'All';
    }
    console.log(mainData);

    // Convert to JSON Object
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    for (let j = 0; j < 5; j++) {
      let d = mainData["articles"][`${j}`];
      let mainDiv = document.getElementById("data");
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      h2.innerHTML = d["title"];
      p1.innerHTML = d["body"];
      p2.textContent = d["author"];
      p3.innerText = d["section"];
      div.append(h2, p1, p2, p3);
      mainDiv.appendChild(div);
    }
  }
};
  

// mainData Variable Content
// 0: {id: 1, title: 'Title 1', body: 'Article Number 1 Body', category: 'All', author: 'Ali'}
// 1: {id: 2, title: 'Title 2', body: 'Article Number 2 Body', category: 'All', author: 'Mahmoud'}
// 2: {id: 3, title: 'Title 3', body: 'Article Number 3 Body', category: 'All', author: 'Osama'}
// 3: {id: 4, title: 'Title 4', body: 'Article Number 4 Body', category: 'All', author: 'Sayed'}
// 4: {id: 5, title: 'Title 5', body: 'Article Number 5 Body', category: 'All', author: 'Ahmed'}

// // UpdatedData Variable Content
// "JSON Object Content Here"

// // // //-----------------------------------
// // // /*----------------------------------*/

// // // assign 26 -- The Last -- Be Happy

// const getData = (link) => {
//   return new Promise((res, rej) => {
//     let req1 = new XMLHttpRequest();
//     req1.open("GET", link, true);
//     req1.send();
//     console.log(req1);

//     req1.onload = function () {
//       if (req1.status === 200 && req1.readyState === 4) {
//         res(JSON.parse(this.responseText));
//       } else {
//         rej(Error("No Data Found"));
//       }
//     };
//   });
  
// }

// getData("./arts.json").then((result) => {
//   result.length = 5;
//   return result;
// }).then((res) => {
//   console.log(res[0]);
//   for (let i = 0; i < res.length; i++) {
//     let div = document.createElement("div");
//     let h2 = document.createElement("h2");
//     let p = document.createElement("p");
//     h2.innerHTML = res[i].title;
//     p.textContent = res[i].description;
//     div.append(h2, p);
//     document.body.appendChild(div);
//   }
// })

// Use Fetch;

fetch("./arts.json").then((res0) => {
  return res0.json()
}).then((res1) => {
  res1.length = 5;
  return res1;
}).then((res2) => {
  for (let i = 0; i < res2.length; i++) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.innerHTML = res2[i].title;
    p.textContent = res2[i].description;
    div.append(h2, p);
    document.body.appendChild(div);
  }
});

// END Of The Assignments -- By Happy;
//-------------------------------------------

