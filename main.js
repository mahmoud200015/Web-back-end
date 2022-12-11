// // document.querySelector("h1").style.margin = "20px";
// // document.querySelector("h1").style.color = "#FFF";
// // document.querySelector("h1").style.position = "absolute";
// // document.querySelector("h1").style.top = "50%";
// // document.querySelector("h1").style.left = "50%";
// // document.querySelector("h1").style.transform = "translate(-50%, -50%)";

// /*
//   Output to screen
//   -window.alert();
//   -document.write();
//   -console.log();
// */

// // window.alert("Hello From Js File");

// // document.write("<h1>Hello World</h1>")

// // console.log("Hello From Js File");

// /*
//   Console Methods
//   -log
//   -error
//   -table

//   Web API

//   Styling console
//   -Directive %c

//   ES6
// */

// // console.log("logging");
// // console.error("error");
// // console.table(["Mahmoud", "Ayman", "Mahmoud"]);

// // console.log("Hello From %cJs %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");

// // var myName = "mahmoud";
// // console.log("Hello " + myName);
// // console.log('Hello ${myName}');


// // Data Types

// // console.log(typeof "mahmouod ayman")
// // console.log(typeof 1000.10)
// // console.log(typeof true & false)
// // console.log(typeof { name: 'ali', age: 22, country: 'eg'})
// // console.log(typeof [10, 20, 30])
// // console.log(typeof true)
// // console.log(typeof null)
// // console.log(typeof undefined)


// // Variables -- camelCase

// /*
//   Var
//   - Redeclare (Yes)
//   - Access Before Declare (Undefined)
//   - Variable Scope Drama [Added To Window] ()
//   - Block Or Scope Function

//   Let
//   - Redeclare (No => Error)
//   - Access Before Declare (Error)
//   - Variable Scope Drama ()
//   - Block Or Scope Function

//   Const
//   - Redeclare (No => Error)
//   - Access Before Declare (Error)
//   - Variable Scope Drama ()
//   - Block Or Scope Function
// */

// // var myName = "mahmoud ayman";
// // // const myName = "mahmoud ayman";
// // // let myName = "mahmoud ayman";
// // var testVar = "mahmoud ayman";
// // console.log(testVar);

// // console.log(test);
// // test.innerHTML = "Testing Variable";

// // String

// /*
//   String Syntax + Character Escape Sequences
//   \ Escape + Line Continue
//   \n , \t
// */

// // console.log("mahmoud ayman \"mahmoud\"");
// // console.log("Mahmoud \n\tAyman \n\t\tMahmoud")

// // let A = "We love" ,B = "JavaScript";
// // document.write(A + " " + B);

// // First Template

// // function start() {
// //   for (let i = 0; i < 5; i++) {
// //     console.log(i);
// //   }
// // }
// // start();

// // let a = "We Love",
// // b = "JavaScript",
// // c = "And",
// // d = "Programming";
// // // Medthod one
// // console.log(a + " " + b + "\n" + c + " " + d);
// // // Method two (modern- ES6)
// // console.log(`${a} ${b}
// // ${c} ${d}`);

// // Second Template

// // let title = "Mahmoud";
// // let desc = "BackEnd Developer";

// // let markUp = `
// //   <div>
// //     <h2>${title}</h2>
// //     <p>${desc}</p>
// //   </div>
// // `;
// // document.write(markUp);

// // Challange on variable

// // let theTitle = "Elzero",
// //   theDescription = "Elzero Web School",
// //   theDate = "25/10";
// // let myPage = `
// //   <div>
// //     <h3>Hello ${theTitle}</h3><hr>
// //     <p>${theDescription}</p><hr>
// //     <span>${theDate}</span><hr>
// //   </div>
// // `;
// // document.write(myPage.repeat(4));

// // Arthimetic Operatro -  - Unary Plus And Negation Operators -  - Type Coercion - - Assignment Operator

// // console.log(10 + 20);
// // console.log(10 + "Ali");
// // console.log(10 - "Ali");  // NaN
// // console.log(typeof NaN);  // number
// // console.log(2 ** 2);
// // console.log(2 ** -2);
// // let i = 2;
// // console.log(i++); // 2
// // console.log(i);   // 3
// // console.log(++i); // 4

// // console.log(+100);
// // console.log(+"100");
// // console.log(+"-100");
// // console.log(+"Osama");
// // console.log(+"15.5");
// // console.log(+0xff);
// // console.log(+null);
// // console.log(+false);
// // console.log(+true);

// // console.log(-100);
// // console.log(-"100");
// // console.log(-"-100");
// // console.log(-"Osama");
// // console.log(-"15.5");
// // console.log(-0xff);
// // console.log(-null);
// // console.log(-false);
// // console.log(-true);
// // console.log(Number("100"));

// // /*
// //   Type Coercion (Type Casting)
// //   - +
// //   - -
// //   - "" - 2
// //   - false - true
// // */
// // let x = "100";
// // let b = 20;
// // let c = true;
// // console.log(+x + b + c);

// // let a = 10;
// // a = a + 20;
// // a = a + 70;
// // a += 100; // a = a + 100
// // a -= 50; // a = a - 50
// // a /= 50; // a = a / 50
// // console.log(a);

// // Challange 1 and 2

// /*
//   Challenge 1
// */

// // let a = 10;
// // let b = "20";
// // let c = 80;

// // console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100
// // console.log(++a + -b + +c++ - -a++ + +a); // 13 + -21 + 81 + 13 + 14 = 100
// // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);  // 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100

// // /*
// //   [++a] [+]
// //   [++a]
// //   - Value:
// //   - Explain:
// //   [+]
// //   - Explain:
// // */

// /*
//   Challenge 2
// */

// // let d = "-100";
// // let e = "20";
// // let f = 30;
// // let g = true;

// // // Only Use Variables Value
// // // Do Not Use Variable Twice

// // console.log(-d * +e); // 2000
// // console.log(-d + ++f + ++e * ++g); // 173

// // Number

// /*
//   Number
//   - Double Precision
//   - Syntactic Sugar "_"
//   - e
//   - **
//   - With Decimal
//   - Number + BigInt
//   - Number Min Value
//   - Number Max Value
// */

// // console.log("1000000");
// // console.log(1000000);
// // console.log(1_000_000);
// // console.log(1e6);
// // console.log(10 ** 6);
// // console.log(Number.MAX_SAFE_INTEGER);
// // console.log(Number.MAX_VALUE);
// // console.log(Number.MIN_SAFE_INTEGER);
// // console.log(Number.MIN_VALUE);

// // Number Methods

// /*
//   Number Methods
//   - Two Dots To Call A Methods
//   - toString()
//   - toFixed()
//   - parseInt()
//   - parseFloat()
//   - isInteger() [ES6]
//   - isNaN() [ES6]
// */

// // console.log((100).toString());
// // console.log(100..toString());
// // console.log(100.555.toString());
// // console.log(100.555.toFixed(1));
// // console.log(+"100");
// // console.log(Number("100"));
// // console.log(Number("100 Mahmoud"));
// // console.log(parseInt("100"));
// // console.log(parseInt("100 Mahmoud"));
// // console.log(parseFloat("100.23"));
// // console.log(Number.isInteger(1000));
// // console.log(Number.isInteger(1000.55));
// // console.log(Number.isNaN('ali' / 20));

// // Math Object

// /*
//   Math Object
//   - round()
//   - ceil()
//   - floor()
//   - min()
//   - max()
//   - pow()
//   - random()
//   - trunc() [Es6]
// */

// // console.log(Math.round(99.5));
// // console.log(Math.ceil(99.2));
// // console.log(Math.floor(99.9));
// // console.log(Math.min(10, -2, 100, 0));
// // console.log(Math.max(10, -2, 100, 0));
// // console.log(Math.pow(4, 2));
// // console.log(Math.random());

// // console.log(Math.trunc(99.100));
// // console.log(parseInt(99.100));
// // console.log((99.100).toFixed());

// // Number Challange

// // let a = 100;
// // let b = 2_00.5;
// // let c = 1e2;
// // let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// // console.log(parseInt(Math.min(a, b, c, d)));
// // console.log((Math.round(Math.min(a, b, c, d))));
// // console.log((Math.floor(Math.min(a, b, c, d))));
// // console.log((Math.min(a, b, c, d)).toFixed());

// // Use Variables a + d One Time To Get The Needed Output
// // console.log(Math.pow(a, parseInt(d))); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// // console.log(d.toFixed(0));
// // console.log(parseInt(d));
// // console.log(Math.floor(d));
// // console.log(Math.round(d));
// // console.log(Math.trunc(d));

// // Use Variables b + d To Get This Valus
// // console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// // console.log(Math.round((Math.trunc(b) / Math.ceil(d)))); // 67 => Number
// // console.log(Math.ceil((Math.trunc(b) / Math.ceil(d)))); // 67 => Number

// // String Methods -- Important

// /*
//   String Methods
//   - Access With Index
//   - Access With charAt()
//   - length
//   - trim()
//   - toUpperCase()
//   - toLowerCase()
//   - Chain Methods

//   - indexOf(Value [Mand], Start [Opt] 0)
//   - lastIndexOf(Value [Mand], Start [Opt] Length)
//   - slice(Start [Mand], End [Opt] Not Include End)
//   - repeat(Times) [ES6]
//   - split(Separator [Opt], Limit [Opt])

//   - substring(Start [Mand], End [Opt] Not Including End)
//   --- Start > End Will Swap
//   --- Start < 0 It Start From 0
//   --- Use Length To Get Last Character
//   - substr(Start [Mand], Characters To Extract)
//   --- Start >= Length = ""
//   --- Negative Start From End
//   - includes(Value [Mand], Start [Opt] Default 0) [ES6]
//   - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
//   - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
// */


// // let theName = "  Ahmed  ";

// // console.log(theName);
// // console.log(theName[2]);
// // console.log(theName.charAt(2));
// // console.log(theName.length);
// // console.log(theName.trim());
// // console.log(theName.toUpperCase());
// // console.log(theName.toLowerCase());
// // console.log(theName.trimStart().charAt(2).toUpperCase())
// // console.log(theName.trim().charCodeAt(0));

// // let a = "Elzero Web School";

// // console.log(a.indexOf("Wed"));
// // console.log(a.indexOf("Web"));
// // console.log(a.lastIndexOf("o"));
// // console.log(a.slice(0, 6).split("", 1));
// // console.log(a.slice(-6, -1));
// // console.log(a.slice(7, 10).repeat(4));
// // console.log(a.split(" "));
// // console.log(a.split(" ", 2));
// // console.log(a.split("", 6));


// // console.log(a.length);
// // console.log(a.substring(0, 6));
// // console.log(a.substring(-10, 6)); // 0 - 6
// // console.log(a.substring(a.length - 6, a.length));
// // console.log(a.substr(0, 6));
// // console.log(a.substr(17));
// // console.log(a.substr(-3));
// // console.log(a.substr(-5, 2));
// // console.log(a.includes("Web"));
// // console.log(a.includes("Web", 8));
// // console.log(a.startsWith("E"));
// // console.log(a.startsWith("E", 2));
// // console.log(a.startsWith("zero", 2));
// // console.log(a.endsWith("l"));
// // console.log(a.endsWith("l", 6));
// // console.log(a.endsWith("o", 6));

// // String Challange

// /*
//   String Challenge
//   All Solutions Must Be In One Chain
//   You Can Use Concatenate
// */

// // let b = "Elzero Web School";

// // // Include This Method In Your Solution [slice, charAt]
// // console.log(b.charAt(2).toUpperCase() + b.slice(3, 6)); // Zero
// // console.log(b.charAt(2).toUpperCase() + `ero`); // Zero

// // // 8 H
// // console.log(b.charAt(b.length - 4).toUpperCase().repeat(8)); // HHHHHHHH

// // // Return Array
// // console.log(b.split(" ", 1)); // ["Elzero"]

// // // Use Only "substr" Method + Template Literals In Your Solution
// // console.log(`${b.substr(0, 6)} ${b.substr(-6)}`); // Elzero School
// // console.log(b.substr(0, 7) + `${b.substring(b.length-6)}`); // Elzero School
// // console.log(b.substr(0, 7) + `School`); // Elzero School

// // // Solution Must Be Dynamic Because String May Changes
// // console.log(b[0].toLowerCase() +  b.substring(1, b.length-1).toUpperCase()  + b[b.length-1].toLowerCase()); // eLZERO WEB SCHOOl
// // console.log(a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.substr(-1, 1).toLowerCase()); // eLZERO WEB SCHOO

// // Comparison Operator

// /*
//   Comparison Operators
//   - == Equal
//   - != Not Equal

//   - === Identical
//   - !== Not Identical

//   - > Larger Than
//   - >= Larger Than Or Equal

//   - < Smaller Than
//   - <= Smaller Than Or Equal
// */

// // console.log(10 == "10"); // Compare Value Only
// // console.log(-100 == "-100"); // Compare Value Only
// // console.log(10 != "10"); // Compare Value Only
// // console.log(10 === "10"); // Compare Value + Type
// // console.log(10 !== "10"); // Compare Value + Type
// // console.log(10 !== 10); // Compare Value + Type
// // console.log(10 > 20);
// // console.log(10 > 10);
// // console.log(10 >= 10);
// // console.log(10 < 20);
// // console.log(10 < 10);
// // console.log(10 <= 10);
// // console.log("ali" === "ahmed");
// // console.log(typeof "ali" === typeof "ahmed");

// /*
//   Logical Operators
//   - ! Not
//   - && And
//   - || Or
// */

// // console.log(true);
// // console.log(!true);
// // console.log(true && false);
// // console.log(true && true);
// // console.log(false && false);
// // console.log(true || false);
// // console.log(true || true);
// // console.log(false || false);

// // if conditions

// /*
//   Control Flow
//   - if
//   - else if
//   - else

//   if (Condition) {
//     // Block Of Code
//   }

//   Nested if

//   Conditional (Ternary) Operator

//   Logical Or ||
//   -- Null + Undefined + Any Falsy Value
//   Nullish Coalescing Operator ??
//   -- Null + Undefined


// */

// // let price = 100;
// // let discount = false;
// // let discountAmount = 30;
// // let country = "Egypt";
// // let student = true;

// // if (discount === true) {
// //   price -= discountAmount;
// // } else if (country === "Egypt") {
// //   if (student)
// //     price -= discountAmount + 30;
// //   else
// //     price -= discountAmount + 10;
// // } else {
// //   price -= 10;
// // }

// // console.log(price);

// // // Condition ? if true : if false;

// // country === "Egypt" ? console.log("Egypt") : console.log("Not Egypt");

// // let result = country === "Egypt" ? "Yes" : "No";
// // console.log(result);
// // console.log(`Are you from Egypt? (${result})`);

// // price < 20
// //   ? console.log("Smaller than 20")
// //   : price > 20 && price < 60
// //   ? console.log("From 20 To 60")
// //   : price > 60
// //   ? console.log("Larger than 60")
// //   : console.log("Not Found");
  

// // console.log(Boolean(100));
// // console.log(Boolean(-100));
// // console.log(Boolean(0));
// // console.log(Boolean(""));
// // console.log(Boolean((null)));
// // console.log(Boolean((undefined)));
// // /*
// // Logical Or ||
// //   -- Null + Undefined + Any Falsy Value
// //   Nullish Coalescing Operator ??
// //   -- Null + Undefined
// // */
// // let nullish = undefined;

// // console.log(`The nullish is ${nullish || "Logical or"}`);
// // console.log(`The nullish is ${nullish ?? "Nullish Coalescing Operator"}`);

// // // If Condition Challenge

// // let a = 10;

// // a < 10
// //   ? console.log(10)
// //   : a >= 1 && a <= 40
// //   ? console.log("10 To 40")
// //   : a > 40
// //   ? console.log("> 40")
// //   : console.log("Unknown");

// // if (a < 10) {
// //   console.log(10);
// // } else if (a >= 10 && a <= 40) {
// //   console.log("10 To 40");
// // } else if (a > 40) {
// //   console.log("> 40");
// // } else {
// //   console.log("Unknown");
// // }

// // // Write Previous Condition With Ternary If Syntax

// // let st = "Elzero Web School";

// // // W Position May Change
// // if (st[st.indexOf("W")].toLowerCase() === "w") {
// //   console.log("Good");
// // }

// // if (st.length !== "string") {
// //   console.log("Good");
// // }

// // if (typeof st.length === "number") {
// //   console.log("Good");
// // }

// // if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
// //   console.log("Good");
// // }

// // Switch Condition

// /*
//   Switch Statement
//   switch(expression) {
//     Case 1:
//       // Code Block
//       break;
//     Case 2:
//       // Code Block
//       break;
//     Default:
//       // Code Block
//   }
//   - Default Ordering
//   - Multiple Match
//   - ===
// */

// // console.log("Switch Condition");
// // day = 3
// // switch (day) {
// //   case 0:
// //     console.log("Saturday");
// //     break;
// //   case 1:
// //     console.log("Sunday");
// //     break;
// //   case 2:
// //   case 3:
// //     console.log("Monday");
// //     break;
// //   default:
// //     console.log("Unknown Day");
// // }

// // // Switch Challenge

// // /*
// //   Switch Challenge
// // */

// // let job = "Manager";
// // let salary = 0;

// // if (job === "Manager") {
// //   salary = 8000;
// // } else if (job === "IT" || job === "Support") {
// //   salary = 6000;
// // } else if (job === "Developer" || job === "Designer") {
// //   salary = 7000;
// // } else {
// //   salary = 4000;
// // }

// // switch (job) {
// //   case "Manager":
// //     salary = 8000;
// //     console.log(`The Salary is ${salary}`);
// //     break;
// //   case "IT":
// //   case "Support":
// //     salary = 6000;
// //     console.log(`The Salary is ${salary}`);
// //     break;
// //   case "Developer":
// //   case "Designer":
// //     salary = 7000;
// //     console.log(`The Salary is ${salary}`);
// //     break;
// //   default:
// //     salary = 4000;
// //     console.log(`The Salary is ${salary}`);
// // }

// // /*
// //   If Challenge
// // */

// // let holidays = 0;
// // let money = 0;

// // switch (holidays) {
// //   case 0:
// //     money = 5000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 1:
// //   case 2:
// //     money = 3000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 3:
// //     money = 2000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 4:
// //     money = 1000;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   case 5:
// //     money = 0;
// //     console.log(`My Money is ${money}`);
// //     break;
// //   default:
// //     money = 0;
// //     console.log(`My Money is ${money}`);
// // }

// // if (holidays === 0) {
// //   money = 5000;
// //   console.log(`My Money is ${money}`);
// // } else if (holidays === 1 || holidays === 2) {
// //   money = 3000;
// //   console.log(`My Money is ${money}`);
// // } else if (holidays === 3) {
// //   money = 2000;
// //   console.log(`My Money is ${money}`);
// // } else if (holidays === 4) {
// //   money = 1000;
// //   console.log(`My Money is ${money}`);
// // } else if (holidays === 5) {
// //   money = 0;
// //   console.log(`My Money is ${money}`);
// // } else {
// //   money = 0;
// //   console.log(`My Money is ${money}`);
// // }

// // // // // //-----------------------------------
// // // // // /*----------------------------------*/

// // // // // Array Big Introduction (Arrays)

// // /*
// //   Arrays
// //   - Create Arrays [Two Methods] new Array() + []
// //   - Access Arrays Elements
// //   - Nested Arrays
// //   - Change Arrays Elements
// //   - Check For Array Array.isArray(arr);
// // */

// // let myFriends = ["Ahmed", "Nada", "Sayed", ["Marwan", "Ali"]];

// // console.log(myFriends[0]);
// // console.log(`Hello ${myFriends[2]}`);
// // console.log(`${myFriends[2][0]}`);
// // console.log(`Hello ${myFriends[3][1]}`);
// // console.log(`${myFriends[3][1][0]}`);
// // console.log(myFriends);
// // myFriends[3] = "Mahmoud";
// // console.log(myFriends);
// // console.log(typeof myFriends);
// // console.log(Array.isArray(myFriends));

// // /*
// //   Array Methods
// //   - Length
// // */

// // // Index Start From 0 [ 0, 1, 2, 3, 4 ]
// // myFriends[7] = "Ayman";
// // console.log(myFriends);
// // myFriends[myFriends.length] = "Osama";
// // console.log(myFriends);
// // myFriends.length = 3;
// // console.log(myFriends);

// // /*
// //   Arrays Methods [Adding And Removing]
// //   - unshift("", "") Add Element To The First
// //   - push("", "") Add Element To The End
// //   - shift() Remove First Element From Array
// //   - pop() Remove Last Element From Array
// // */

// // myFriends.unshift("Ali", "Mazen");
// // console.log(myFriends);
// // myFriends.push("Mazen", "Menna");
// // console.log(myFriends);
// // let first = myFriends.shift();
// // console.log(myFriends);
// // console.log(`First Element is ${first}`);
// // let end = myFriends.pop();
// // console.log(myFriends);
// // console.log(`End Element is ${end}`);

// // /*
// //   Arrays Methods [Search]
// //   - indexOf(Search Element, From Index [Opt])
// //   - lastIndexOf(Search Element, From Index [Opt])
// //   - includes(valueToFind, fromIndex [Opt]) [ES7]
// // */

// // console.log(myFriends.indexOf("Mazen"));
// // console.log(myFriends.indexOf("Mazen", 2));
// // console.log(myFriends.lastIndexOf("Mazen"));
// // console.log(myFriends.lastIndexOf("Mazen", -2));
// // console.log(myFriends.includes("Mazen"));
// // if (myFriends.includes("Mazen")) {
// //   console.log("Found");
// // } else {
// //   console.log("Not Found");
// // }
// // if (myFriends.indexOf("Nada") === -1) {
// //   console.log("Not Found");
// // } else {
// //   console.log("Found");
// // }

// // /*
// //   Arrays Methods [Sort]
// //   - sort(Function [Opt])
// //   - reverse
// // */

// // let sortNumbers = [10, 100, 1, 0, 200, 2000, 20, 300, 30, 3000];
// // console.log(sortNumbers.sort());
// // console.log(sortNumbers.sort().reverse());

// // /*
// //   Arrays Methods [Slicing]
// //   - slice(Start [Opt], End [Opt] Not Including End)
// //   --- slice() => All Array
// //   --- If Start Is Undefined => 0
// //   --- Negative Count From End
// //   --- If End Is Undefined || > Indexes => Slice To The End Array.length
// //   --- Return New Array
// //   - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
// //   --- If Negative => Start From The End
// // */

// // console.log(myFriends);
// // console.log(myFriends.slice());
// // console.log(myFriends.slice(1));
// // console.log(myFriends.slice(1, 3));
// // console.log(myFriends.slice(-2));
// // console.log(myFriends.slice(1, -2));
// // console.log(myFriends.slice(-3, -2));
// // console.log(myFriends);
// // // splice() is important
// // console.log(myFriends.splice(0, 2, "Noha", "May"));
// // console.log(myFriends);

// // /*
// //   Arrays Methods [Joining]
// //   - concat(array, array) => Return A New Array
// //   - join(Separator)
// // */

// // let allFriends = myFriends.concat("One", "Two", 10, 20, [30, 40]);
// // console.log(allFriends);
// // // join() is important
// // console.log(allFriends.join());
// // console.log(allFriends.join("|"));  // result === String
// // console.log(allFriends.join("|").split("|")); // result === Array
// // console.log(typeof allFriends.join("|"));
// // console.log(typeof allFriends.join("|").split("|"));

// // let test = [1, 2] + [3, 4];
// // console.log(test); // typeof test === String

// // /*
// //   Array Challenge
// // */

// // let zero = 0;

// // let counter = 3;

// // let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // // Write Code Here

// // console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// // console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]
// // // 1 3
// // console.log(`${my[--counter].slice(--zero, counter)}${my[++zero].slice(++zero)}`); // "Elzero"
// // // 2 2
// // console.log(my[my.length - --zero].slice(-zero) + my[--counter].slice(-counter).toUpperCase()); // "rO"
// // // 1 1
// // console.log(zero, counter);

// // // // //-----------------------------------
// // // // /*----------------------------------*/

// // // // (Loops)

// /*
//   Loop
//   - For
//   for ([1] [2] [3]) {
//     // Block Of Code
//   }
// */

// /*
//   Loop
//   - Loop On Sequences
// */

// // let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
// // let onlyNames = []

// // for (let i = 0; i < myFriends.length; i++) {
// //   if (typeof myFriends[i] === "string")
// //     onlyNames.push(myFriends[i])
// // }

// // console.log(onlyNames);

// /*
//   Loop
//   - Nested Loops
// */

// // let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// // let colors = ["Red", "Green", "Black"];

// // let models = [2020, 2021];

// // for (let i = 0; i < products.length; i++) {
// //   console.log('#'.repeat(15));
// //   console.log(`# ${products[i]}`);
// //   console.log('#'.repeat(15));
// //   console.log("Colors: ");
// //   for (let j = 0; j < colors.length; j++)
// //     console.log(`- ${colors[j]}`);
// //   console.log("Models: ");
// //   for (let k = 0; k < models.length; k++)
// //     console.log(`- ${models[k]}`);
// // }

// /*
//   Loop Control
//   - Break
//   - Continue
//   - Label
// */

// // let products = ["Keyboard",10, 30, "Mouse", "Pen", 50,  "Pad", "Monitor"];

// // let colors = ["Red", "Green", "Black"];

// // // for (let i = 0; i < products.length; i++) {
// // //   if (products[i] === "Pen")
// // //     break;
// // //   console.log(products[i]);
// // // }

// // mainLoop: for (let j = 0; j < products.length; j++) {
// //   if (typeof products[j] === "number")
// //     continue;
// //   console.log(products[j]);
// //   nestedLoop: for (let k = 0; k < colors.length; k++) {
// //     console.log(`-${colors[k]}`);
// //     if (colors[k] === "Green") {
// //       break mainLoop;
// //       // break;    // break nestdLoop;
// //     }
// //   }
// // }

// /*
//   Loop For Advanced Example
// */

// // let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// // let i = 0;
// // for (; ;) {
// //   console.log(products[i]);
// //   i++;
// //   if (i === products.length) break;
// // }

// /*
//   Products Practice
// */

// // let productsOnPage = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// // let colors = ["Red", "Green", "Blue"];
// // let showCount = 3;

// // document.write(`<h1>Show ${showCount} products</h1>`);

// // for (let i = 0; i < showCount; i++) {
// //   document.write(`<div>`);
// //   document.write(`<h3>[${i + 1}] ${productsOnPage[i]}</h3>`);
// //   for (let j = 0; j < colors.length; j++) {
// //     document.write(`<p> - ${colors[j]}</p>`);
// //   }
// //   document.write(`<p> = ${colors.join(" | ")}`);
// //   document.write(`</div>`);
// // }

// // /*
// //   Loop
// //   - while
// //   - do while
// // */

// // let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// // let index = 0;

// // while (index < products.length) {
// //   console.log(products[index]);
// //   index += 1;
// // }
// // index = 0;
// // do {
// //   console.log(products[index]);
// //   index += 1;
// // } while (false);

// /*
//   Loop Challenge
// */

// // let myAdmins = ["Ahmed", "Osama", "Nahla", "Sayed", "Stop", "Samera"];
// // let myEmployees = ["Amgad", "Samah", "Nada", "Noha", "Nady", "Naglaa", "Soad", "Ola", "Ali", "Samir", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// // let count = 1;
// // let stopCount = myAdmins.indexOf("Stop");

// // document.write(`<div>We Have X Admins</div>`);
// // document.write(`<div>We Have ${stopCount} Admins</div>`);

// // for (let i = 0; i < stopCount; i++) {
// //   document.write(`<hr>`);
// //   document.write(`<div>`);
// //   document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
// //   document.write(`<h3>Team Members:</h3>`);
// //   for (let j = 0; j < myEmployees.length; j++) {
// //     if (myEmployees[j].startsWith(myAdmins[i][0])) {
// //       document.write(`<p>- ${count++}) ${myEmployees[j]}</p>`);
// //     }
// //   }
// //   count = 1;
// //   document.write(`</div>`);
// // }

// // // // //-----------------------------------
// // // // /*----------------------------------*/

// // // // (Functions)

// /*
//   Function
//   - What Is Function ?
//   - User-Defined vs Built In
//   - Syntax + Basic Usage
//   - Example From Real Life
//   - Parameter + Argument
//   - Practical Example
// */

// console.log(typeof console.log);

// function sayHello(_userName, _age) {
//   if (_age >= 18)
//     console.log(`Hello ${_userName} in the App`);
//   else
//     console.log(`App is not suitable for you`);
// }

// sayHello("Mahmoud", 40);
// sayHello("Ali", 13);
// sayHello("Sayed", 18);

// /*
//   Function Advanced Examples
// */

// function generateYears(_start, _end, _exclude) {
//   for (let i = _start; i <= _end; i++){
//     if (i === _exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// generateYears(2000, 2022, 2020);

// console.log(Math.trunc((Math.random() + 91) * 22));
// console.log(((Math.random() + 91) * 22).toFixed(0));

// /*
//   Function
//   - Return
//   - Automatic Semicolon Insertion [No Line Terminator Allowed]
//   - Interrupting
// */


// function generate(start, end) {
//   for (let j = start; j <= end; j++){
//     console.log(j);
//     if (j === 15) {
//       // break;
//       // return;
//       return `interrupting`;
//     }
//   }
// }
// // let res = generate(10, 30);
// // console.log(res);

// // function calc(num1 = 0, num2 = 0, op = '*') {
// //   switch (op) {
// //     case '+':
// //       return num1 + num2;
// //     case '-':
// //       return num1 - num2;
// //     case '*':
// //       return num1 * num2;
// //     case '/':
// //       return num1 / num2;
// //     default:
// //       return `Unknown Operator`;
// //   }
// // }

// // let result = calc(10, 20, '*');
// // console.log(result);

// /*
//   Function
//   - Default Function Parameters
//   - Function Parameters Default [Undefined]
//   - Old Strategies [Condition + Logical Or]
//   - ES6 Method
// */

// function parametersDefalut(test1, test2 = 0) {
//   // if (test2 === undefined)
//   //   test2 = 0;
//   // test2 = test2 || 0;
//   return test1 + test2;
// }
// console.log(parametersDefalut(10));

// /*
//   Function
//   - Rest Parameters
//   - Only One Allowed
//   - Must Be Last Element
// */

// function calcInArray(...numbers) {
//   console.log(Array.isArray(numbers));
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   return `Final Summation is ${sum}`;
// }

// console.log(calcInArray(10, 40, 30, 20, 80));

// /*
//   Function Advanced Practice
//   - Parameters
//   - Default
//   - Rest
//   - Loop
//   - Condition
// */

// function showInfo(us = 'Un', ag = 'Un', rt = 0, show = "Yes", ...skills) {
//   console.log(us, ag, rt, show, skills.join(' | '));
//   document.write(`<div>`);
//   document.write(`<h3>Welcome, ${us}</h3>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}`);
//   if (show === "Yes") {
//     if (skills.length <= 0)
//       document.write(`<p>Skills: No Skills`);
//     document.write(`<p>Skills: ${skills.join(' | ')}`);
//   } else {
//     document.write(`<p>Skills is hidden</p>`);
//   }
//   document.write(`</div>`);
// }

// showInfo("Mahmoud", 22, 0, "No", "Html", "Css", "Js");

// /*
//   Function - Random Argument Challenge
//   ====================================
//   Create Function showDetails
//   Function Accept 3 Parameters [a, b, c]
//   Data Types For Info Is
//   - String => Name
//   - Number => Age
//   - Boolean => Status
//   Argument Is Random
//   Data Is Not Sorted Output Depend On Data Types
//   - Use Ternary Conditional Operator
// */

// function showDetails(a, b, c) {
//   // typeof user === 'string' && typeof age === 'number' && typeof hired === 'boolean' && hired === true ?
//   //   console.log(`Hello ${user}, Your ${age} Is 38, You Are Available For Hire`) :
//   //   typeof user === 'string' && typeof age === 'boolean' && typeof hired === 'number' && age === true ?
//   //   console.log(`Hello ${user}, Your ${hired} Is 38, You Are Available For Hire`) :
//   //   typeof user === 'boolean' && typeof age === 'string' && typeof hired === 'number' && user === true ?
//   //   console.log(`Hello ${age}, Your ${hired} Is 38, You Are Available For Hire`) :
//   //   typeof user === 'number' && typeof age === 'string' && typeof hired === 'boolean' && hired === true ?
//   //   console.log(`Hello ${age}, Your ${user} Is 38, You Are Available For Hire`) :
//   //   typeof user === 'boolean' && typeof age === 'number' && typeof hired === 'string' && user === true ?
//   //   console.log(`Hello ${hired}, Your ${age} Is 38, You Are Available For Hire`) :
//   //   typeof user === 'boolean' && typeof age === 'string' && typeof hired === 'number' && user === false ?
//   //   console.log(`Hello ${age}, Your ${hired} Is 38, You Are Not Available For Hire`) :
//   //   console.log();

//   let name, age, status;
//   typeof a === 'string' ? name = a : typeof a === 'number' ? age = a : status = a;
//   typeof b === 'string' ? name = b : typeof b === 'number' ? age = b : status = b;
//   typeof c === 'string' ? name = c : typeof c === 'number' ? age = c : status = c;
//   status === true
//     ? (status = "You Are Available For Hire")
//     : (status = "You Are Not Available For Hire");;

//   console.log(`Hello ${name}, Your age is ${age}, ${status}`);
// }


// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// showDetails(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// /*
//   Function
//   - Anonymous Function
//   - Calling Named Function vs Anonymous Function
//   - Argument To Other Function
//   - Task Without Name
//   - SetTimeout
// */

// // console.log(calc(10, 20));

// // function calc(num1, num2) {
// //   return num1 + num2;
// // }

// // console.log(calculator(10, 20)); // Error cannot accecss before intializing

// // let calculator = function (num1, num2) {
// //   return num1 + num2;
// // };

// // console.log(calculator(20, 20));

// // document.write(`<button id="show">Show</button>`);

// // document.getElementById("show").onclick = function () {
// //   console.log("Show immediately");
// // };

// // let test1 = function () {
// //   console.log('test1');
// // }
// // function test2() {
// //   console.log('test2');
// // }
// // document.getElementById("show").onclick = test1();
// // document.getElementById("show").onclick = test2();

// // setTimeout( () => {
// //   console.log("Show after 1s.")
// // }, 1000);
// // setTimeout( function () {
// //   console.log("Show after 2s.")
// // }, 2000);

// /*
//   Function
//   - Function Inside Function
//   - Return Function
// */

// // Example 1

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Mohamed"));

// // Example 2

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// // Example 3

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// /*
//   Function
//   - Arrow Function
//   -- Regular vs Arrow [Param + No Param]
//   -- Multiple Lines
// */

// // let print = function () {
// //   return 10;
// // };

// // let print = () => 10;

// // let print = function (num) {
// //   return num;
// // };

// // let print = num => num;

// // let print = function (num1, num2) {
// //   return num1 + num2;
// // };

// // let print = (num1, num2) => num1 + num2;

// // console.log(print(100, 50));

// // Annonymous Fuction is such like arrow function (delet word function and put arrow )

// /*
//   Scope
//   - Global And Local Scope
// */

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();


// /*
//   Scope
//   - Block Scope [If, Switch, For]
// */

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);

// /*
//   Scope
//   - Lexical Scope

//   Search
//   - Execution Context
//   - Lexical Environment
// */

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

// /*
//   Function Arrow Challenges
// */

// // [1] One Statement In Function
// // [2] Convert To Arrow Function
// // [3] Print The Output [Arguments May Change]

// // let names = function (...names) {
// //   // Parameter ?
// //   return `String [${names.join("],[")}] => Done !`;
// // };

// // let names = (...names) => {
// //   return `String [${names.join("],[")}] => Done !`;
// // }

// // console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ================================= */

// // // [1] Replace ??? In Return Statement To Get The Output
// // // [2] Create The Same Function With Regular Syntax
// // // [3] Use Array Inside The Arguments To Get The Output

// // let myNumbers = [20, 50, 10, 60];

// // let calc = (one, two, ...nums) => {
// //   let sum = 0;
// //   for (let i = 0; i < nums.length; i++) {
// //     sum += nums[i];
// //   }
// //   return one * two - sum;
// // };
// // let calc = function (one, two, ...nums) {
// //   let sum = 0;
// //   for (let i = 0; i < nums.length; i++) {
// //     sum += nums[i];
// //   }
// //   return one * two - sum;
// // }
// // function calc(one, two, ...nums) {
// //   let sum = 0;
// //   for (let i = 0; i < nums.length; i++) {
// //     sum += nums[i];
// //   }
// //   return one * two - sum;
// // }

// // console.log(calc(10, myNumbers[0], myNumbers[1], myNumbers[2], myNumbers[3])); // 80

// /*
//   Higher Order Functions
//   ---> is a function that accepts functions as parameters and/or returns a function.

//   - Map
//   --- method creates a new array
//   --- populated with the results of calling a provided function on every element
//   --- in the calling array.

//   Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
//   - Element => The current element being processed in the array.
//   - Index => The index of the current element being processed in the array.
//   - Array => The Current Array

//   Notes
//   - Map Return A New Array

//   Examples
//   - Anonymous Function
//   - Named Function

// */
// console.log(parseInt("100TestToKnow"));

// let myNums = [1, 2, 3, 4, 5];
// let newArray = [];
// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] * 2);
//   // newArray.unshift(myNums[i] * 2);
// }
// console.log(newArray);

// let arrAnonymousMap = myNums.map(function (element) {
//   return element * 2;
// }, 1)
// console.log(arrAnonymousMap);

// let arrArrowMap = myNums.map((element) => {
//   return element * 2;
// });
// console.log(arrArrowMap);

// function addition(ele) {
//   return ele * 2;
// }

// let arrNamedMap = myNums.map(addition);

// /*
//   Map
//   - Swap Cases
//   - Inverted Numbers
//   - Ignore Boolean Value
// */

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let mapSwap = swappingCases.split("").map((char) => {
//   // if (char == char.toUpperCase())
//   //   char = char.toLowerCase();
//   // else
//   //   char = char.toUpperCase();
//   // return char;
//   return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
// }).join("");
// console.log(mapSwap);
// console.log(swappingCases);

// let mapInverse = invertedNumbers.map((num) => {
//   // return num * -1;
//   return -num;
// });
// console.log(mapInverse);
// console.log(-"-100");

// let mapIgnore = ignoreNumbers.split("").map((char) => {
//   // if (isNaN(char))
//   //   return char;
//   return isNaN(parseInt(char)) ? char : "";
// }).join("");
// console.log(ignoreNumbers);
// console.log(mapIgnore);

// /*
//   - Filter
//   --- method creates a new array
//   --- with all elements that pass the test implemented by the provided function.

//   Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
//   - Element => The current element being processed in the array.
//   - Index => The index of the current element being processed in the array.
//   - Array => The Current Array
// */

// // Test Map vs Filter

// // let addMap = numbers.map(function (el) {
// //   return el + el;
// // });

// // console.log(addMap);

// // let addFilter = numbers.filter(function (el) {
// //   return el + el;
// // });

// // console.log(addFilter);

// // Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterFriends = friends.filter((ele) => {
//   return ele.startsWith('A');
// });
// console.log(filterFriends);

// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter((ele) => {
//   return ele % 2 === 0;
// });
// console.log(evenNumbers);

// /*
//   Filter
//   - Filter Longest Word By Number
// */

// // Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let filterWords = sentence.split(" ").filter((word) => {
//   return word.length <= 4;
// }).join(" ");
// console.log(filterWords);

// let filterIgnore = ignoreNumbers.split("").filter((ele) => {
//   return isNaN(ele);
// }).join("");
// console.log(filterIgnore);

// // Filter Strings + Multiply
// let mix = "A13BS2ZX";

// let mulMapFilter = mix.split("").filter((char) => {
//   return !isNaN(char);
// }).map((num, index, arr) => {
//   return num * num;
// }).join("");
// console.log(mulMapFilter);

// /*
//   - Reduce
//   --- method executes a reducer function on each element of the array,
//   --- resulting in a single output value.

//   Syntax
//   reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
//   - Accumulator => the accumulated value previously returned in the last invocation
//   - Current Val => The current element being processed in the array
//   - Index => The index of the current element being processed in the array.
//   ---------- Starts from index 0 if an initialValue is provided.
//   ---------- Otherwise, it starts from index 1.
//   - Array => The Current Array
// */

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 0);
// console.log(add);

// let mul = nums.reduce((acc, curr) => {
//   return acc * curr;
// }, 1);
// console.log(mul);

// /*
//   Reduce
//   - Longest Word
//   - Remove Characters + Use Reduce
// */

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
// let bigWord = theBiggest.reduce((acc, curr) => {
//   return acc.length < curr.length ? curr : acc;
// });
// console.log(bigWord);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
// let removeReduce = removeChars.filter((ele) => {
//   return ele !== '@';
//   // return !ele.startsWith('@');
// }).reduce((acc, curr) => {
//   return `${acc}${curr}`;
//   // return acc + curr;
// }).toLowerCase();
// console.log(removeReduce);

// /*
//   - forEach
//   --- method executes a provided function once for each array element.

//   Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
//   - Element => The current element being processed in the array.
//   - Index => The index of the current element being processed in the array.
//   - Array - The Current Array

//   Note
//   - Doesnt Return Anything [Undefined]
//   - Break Will Not Break The Loop
// */

// let allLis = document.querySelectorAll("ul li");
// console.log(allLis);
// let allDivs = document.querySelectorAll(".content div");
// console.log(allDivs);

// allLis.forEach((ele) => {
//   ele.onclick = function () {
//     allLis.forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     this.classList.add("active");
//     allDivs.forEach((ele) => {
//       ele.style.display = `none`;
//     });
//   };
// });

// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time Only In The Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split("").filter((char) => {
//   return isNaN(char);
// }).map((ele) => {
//   return ele !== ',' ? ele : "";
// }).reduce((acc, curr) => {
//   return curr === '_' ? acc + " " : acc + curr;
// }).slice(true, -isNaN(myString));

// console.log(solution); // Elzero Web School

// /*
//   Object
//   - Intro and What Is Object
//   - Testing Window Object
//   - Accessing Object
// */

// let user = {
//   // Properties
//   name: "Mahmoud",
//   age: 22,
//   // Methods
//   sayHello: () => {
//     return `Hello`;
//   }
// };
// console.log(user.name, user.age);
// console.log(user.sayHello());

// /*
//   Object
//   - Dig Deeper
//   - Dot Notation vs Bracket Notation
//   - Dynamic Property Name
// */

// let myVar = "country";

// let user1 = {
//   theName: "Osama",
//   country: "Egypt",
// };

// console.log(user1.theName);
// console.log(user1.country); // user1.country
// console.log(user1.myVar); // user1.country
// console.log(user1[myVar]); // user1.country

// /*
//   Object
//   - Nested Object And Trainings
// */

// let user2 = {
//   name: "Mahmoud",
//   age: 22,
//   skills: ["Html", "Css", "Js"],
//   available: false,
//   addresses: {
//     ksa: "Riydah",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (this.available)
//       return `Free to work`;
//     return `Not Free`;
//   },

// }

// console.log(user2.name);
// console.log(user2.age);
// console.log(user2.skills.join(" | "));
// console.log(user2.skills[2]) // Access with index
// console.log(user2.addresses.ksa);
// console.log(user2.addresses.ksa.replace("Riydah", "Gada")); // Acess with methods of Strings
// console.log(user2.addresses.egypt.one); // Objects with Dot Notation
// console.log(user2["addresses"]["egypt"]["one"]); // Objects with bracket Notation
// console.log(user2.checkAv()); // Deal with this in Object

// /*
//   Object
//   - Create With New Keyword new Object();
// */

// // let user3 = {
// //   country: "Eg",
// // }
// let user3 = new Object({
//   country: "Eg",
// });
// console.log(user3);
// user3.name = "Mahmoud";
// user3["age"] = 22;
// user3.country = "Egypt";
// user3.sayHello = function () {
//   return `Hello`;
// }
// console.log(user3);
// console.log(user3.sayHello());

// /*
//   Function this Keyword
//   - this Introduction
//   - this Inside Object Method
//   --- When a function is called as a method of an object,
//   --- its this is set to the object the method is called on.
//   - Global Object
//   - Test Variables With Window And This
//   - Global Context
//   - Function Context

//   Search
//   - Strict Mode
// */
// myVar1 = 1000;
// console.log(window.myVar1);
// console.log(this.myVar1);
// console.log(this);
// console.log(typeof this);
// console.log(this === window);
// function thisKey() {
//   console.log(this);
//   return this;
// }
// thisKey();
// console.log(thisKey() === window);

// let ageDays = {
//   age: 22,
//   ageInDays: function () {
//     console.log(ageDays);
//     return this.age * 365;
//   },
// };
// console.log(ageDays.ageInDays());

// /*
//   Object
//   - Create Object With Create Method
// */

// let user4 = {
//   age: 22,
//   doubleAge: function () {
//     return this.age * 2; // user4 or this is very different here because it will change value of object below
//   },
// };
// console.log(user4, user4.age, user4.doubleAge());

// let obj = Object.create({});
// obj.a = 100;
// console.log(obj);

// let copyObj = Object.create(user4);
// copyObj.age = 12;
// console.log(copyObj, copyObj.age, copyObj.doubleAge());

// /*
//   Object
//   - Create Object With Assign Method
// */

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObj = Object.assign(targetObject, obj1, obj2);
// console.log(targetObject);
// console.log(finalObj);

// let newObject = Object.assign({}, obj1, { prop2: 2, prop3: 3, });
// // new Object() === Object.create({}) === Object.assign({}, {}) === {}
// console.log(newObject);

// /*
//   DOM
//   - What Is DOM
//   - DOM Selectors
//   --- Find Element By ID
//   --- Find Element By Tag Name
//   --- Find Element By Class Name
//   --- Find Element By CSS Selectors
//   --- Find Element By Collection
//   ------ title
//   ------ body
//   ------ images
//   ------ forms
//   ------ links
// */

// let myIdElement = document.getElementById("my-div");
// console.log(myIdElement);

// let myTagElements = document.getElementsByTagName("p");
// console.log(myTagElements[1]);

// let myClassElements = document.getElementsByClassName("my-span");
// console.log(myClassElements);

// let myQueryElement = document.querySelector(".my-span");
// console.log(myQueryElement);

// let myQueryAllElements = document.querySelectorAll(".my-span");
// console.log(myQueryAllElements[1]);

// // console.log(document.title);
// // console.log(document.body);
// // console.log(document.forms);
// // console.log(document.forms[1].two.value)
// // console.log(document.links);
// // console.log(document.links[0].href)

// /*
//   DOM [Get / Set Elements Content And Attributes]
//   - innerHTML
//   - textContent
//   - Change Attributes Directly
//   - Change Attributes With Methods
//   --- getAttribute
//   --- setAttribute

//   Search
//   - innerText
// */

// let myElement = document.querySelector(".Js");
// // Get Elements
// // console.log(myElement.innerHTML);
// // console.log(myElement.textContent);
// // Set Elements
// myElement.innerHTML = "Text From <span>main.js</span> File";
// myElement.innerHTML = "Text From <b>main.js</b> File";
// myElement.textContent = "Text From <b>main.js</b> File";
// // Change Arrtibutes directly
// let image1 = document.images[0];
// image1.src = "https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png";
// image1.alt = "Javascript";
// image1.title = "JavaScipt";
// image1.width = "100";
// // Change Arrtibutes With Methods
// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));
// myLink.setAttribute("href", "https://facebook.com");
// myLink.setAttribute("title", "Facebook");
// // myLink.innerHTML = "Facebook";
// myLink.textContent = "Facebook";

// /*
//   DOM [Check Attributes]
//   - Element.attributes
//   - Element.hasAttribute
//   - Element.hasAttributes
//   - Element.removeAttribute
// */

// let myPa = document.getElementsByTagName("p")[2];
// // Element.attributes
// console.log(myPa.attributes)
// // Element.hasAttribute && Element.removeAttribute
// if (myPa.hasAttribute("data-src")) {
//   if (myPa.getAttribute("data-src") === "")
//   myPa.removeAttribute("data-src");
//   else
//   myPa.setAttribute("data-src", "New Value");
// } else {
//   console.log(`Nod Found`);
// }
// // Element.hasAttributes
// if (myPa.hasAttributes())
//   console.log("Has Attributes");
// if (document.getElementsByTagName("div")[2].hasAttributes())
//   console.log("Has Attributes");

// /*
//   DOM [Create Elements]
//   - createElement
//   - createComment
//   - createTextNode
//   - createAttribute
//   - appendChild
// */

// // Create Element

// let myElement1 = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This is Div");

// myElement1.className = "product";
// myElement1.setAttributeNode(myAttr);
// myElement1.setAttribute("data-test", "Testing");
// // Append Comment to Element
// myElement1.appendChild(myComment);
// // Append Text to Element
// myElement1.appendChild(myText);
// // Append Element to Body
// document.body.appendChild(myElement1);

// console.log(myElement1);

// // Quick Revision on 4 lessons later
// let idElement = document.querySelector(".Js");
// console.log(idElement);
// document.images[0].id = "img";
// document.images[0].setAttribute("id", "imgs");
// console.log(document.images[0].getAttribute("id"))
// let img = document.images[0];
// console.log(img.attributes)
// console.log(img.hasAttribute("id"));
// console.log(img.hasAttributes());
// console.log(img.removeAttribute("id"), img);

// let ele = document.createElement("div");
// let att= document.createAttribute("test")
// let tex = document.createTextNode("Div in Javascript");
// ele.className = "div";
// ele.setAttributeNode(att);
// ele.setAttribute("data-test", "tes")
// ele.appendChild(tex);
// console.log(ele);
// document.body.appendChild(ele);

// /*
//   DOM [Create Elements]
//   - Practice Product With Heading And Paragraph
// */

// let product = document.createElement("div");
// let h3 = document.createElement("h3");
// let p = document.createElement("p");
// // h3.innerHTML = "Product Title";
// // p.textContent = "This a Product from js file";

// let myHText = document.createTextNode("Product Tilte");
// let myPText = document.createTextNode("This a product from js file");
// // Add heading , p Text
// h3.appendChild(myHText);
// p.appendChild(myPText);

// // Add heading, p to Main Element
// product.appendChild(h3);
// product.appendChild(p);

// document.body.appendChild(product)

// /*
//   DOM [Deal With Childrens]
//   - children
//   - childNodes
//   - firstChild
//   - lastChild
//   - firstElementChild
//   - lastElementChild
// */

// let myElement2 = document.querySelectorAll("div");
// console.log(myElement2[3]);
// console.log(myElement2[3].children);
// console.log(myElement2[3].children[0]);
// console.log(myElement2[3].childNodes);
// console.log(myElement2[3].childNodes[0]);

// console.log(myElement2[3].firstChild);
// console.log(myElement2[3].lastChild);
// console.log(myElement2[3].firstElementChild);
// console.log(myElement2[3].lastElementChild);

// /*
//   DOM [Events]
//   - Use Events On HTML
//   - Use Events On JS
//   --- onclick
//   --- oncontextmenu
//   --- onmouseenter
//   --- onmouseleave

//   --- onload
//   --- onscroll
//   --- onresize

//   --- onfocus
//   --- onblur
//   --- onsubmit
// */

// let myBtn = document.getElementById("btn");
// myBtn.onmouseleave = () => {
//   console.log("yes");
// };

// window.onresize = function () {
//   console.log("Scroll");
// };

// let frm = document.querySelectorAll("form");
// frm[2][0].onfocus = () => {
//   console.log("Form Focused");
// };

// /*
//   DOM [Events]
//   - Validate Form Practice
//   - Prevent Default
// */

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[3].onsubmit = (event) => {
//   let userValid = false;
//   let ageValid = false;
  
//   // console.log(userInput.value);
//   // console.log(userInput.value.length);

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }
//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     event.preventDefault();
//   }
// }

// document.links[3].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

// /*
//   DOM [Events Simulation]
//   - click
//   - focus
//   - blur
// */

// let one = document.querySelector("form .one");
// let two = document.querySelector("form .two");

// one.onblur = function () {
//   document.links[4].click();
// }

// window.onload = function () {
//   two.focus();
// }

// /*
//   DOM [Class List]
//   - classList
//   --- length
//   --- contains
//   --- item(index)
//   --- add
//   --- remove
//   --- toggle == add & remove
// */

// let element = document.querySelector(".show");
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("one"));
// console.log(element.classList.item(0));

// element.onclick = () => {
//   // element.classList.add("yes", "no");
//   // element.classList.remove("yes", "no");
//   element.classList.toggle("yes");
// }

// /*
//   DOM [CSS]
//   - style
//   - cssText
//   - removeProperty(propertyName) [Inline, Stylesheet]
//   - setProperty(propertyName, value, priority)
// */

// let eleStyle = document.querySelector("div.test");

// eleStyle.style.color = "red";
// eleStyle.style.fontWeight = "bold";

// eleStyle.style.cssText = "color: green; font-weight: bold; opacity: 0.9";

// eleStyle.style.removeProperty("font-weight");
// eleStyle.style.setProperty("font-weight", "bold", "important");

// document.styleSheets[1].rules[9].style.removeProperty("line-height");
// document.styleSheets[1].rules[9].style.setProperty("background-color", "pink", "important");

// /*
//   DOM [Deal With Elements]
//   - before [Element || String]
//   - after [Element || String]
//   - append [Element || String]
//   - prepend [Element || String]
//   - remove
// */

// let elestr = document.getElementById("my-div1");
// let createP = document.createElement("p");

// elestr.prepend("Inside The Element but Before X append ");
// // elestr.remove();

// /*
//   DOM [Traversing]
//   - nextSibling
//   - previousSibling
//   - nextElementSibling
//   - previousElementSibling
//   - parentElement
// */

// let span = document.querySelector("#my-div2 .two");

// console.log(span.parentElement)

// span.onclick = () => {
//   // span.parentElement.style.cssText = "opacity: 0"
//   span.parentElement.style.border = "2px solid #000"
// }

// /*
//   DOM [Cloning]
//   - cloneNode(Deep)
// */

// let myP = document.querySelector("#my-p").cloneNode(true);
// let myDiv = document.querySelector("#my-div3");

// myP.id = `${myP.id}-clone`;
// myP.textContent += ' - Cloned';

// myDiv.appendChild(myP);

// /*
//   DOM [Add Event Listener]
//   - addEventListener
//   - Use Without On
//   - Attach Multiple Events
//   - Error Test

//   Search
//   - Capture & Bubbling JavaScript
//   - removeEventListener
// */

// // myP = document.querySelector("#my-p");

// // myP.onclick = one;
// // myP.onclick = two;

// // function one() {
// //   console.log("Message From OnClick 1");
// // }
// function three() {
//   console.log("Message From OnClick 3");
// }

// // window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log('Message From Click 1');
// });

// myP.addEventListener("click", three);

// // myP.addEventListener("click", "String"); // Error

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = 'clone';
//   document.body.appendChild(newP);
// }

// // let cloned = document.querySelector(".clone");
// // cloned.onclick = function () {
// //   console.log("I am cloned");
// // }

// document.addEventListener('click', function (e) {
//   if (e.target.className === 'clone') {
//     console.log("I am cloned");
//   }
// });

// Video 101 - DOM Challenge

// No Code in html, css File Just JavaScript


// header - (h3 , nav)
// article
// footer

// // Create Header
// let header = document.createElement('header');
// header.style.cssText = "background-color: white; display: flex; justify-content: space-between; align-items: center;";

// // Create Logo In Header
// let logo = document.createElement('h3');
// logo.className = 'logo';
// logo.innerHTML = 'Elzero';
// logo.style = "color: green; font-weight: bold; padding-left: 10px";
// header.appendChild(logo);

// // Create Nav in Header
// let navHeader = document.createElement('nav');
// let ulNav = document.createElement('ul');
// ulNav.className = 'list';
// ulNav.style.cssText = "list-style: none;";
// navHeader.appendChild(ulNav);

// let list = ['Home', 'About', 'Service', 'Concat'];
// for (let i = 0; i < list.length; i++) {
//   let li = document.createElement('li');
//   li.className = `li-${i+1}`
//   li.innerHTML = list[i];
//   ulNav.appendChild(li);
//   li.style.cssText =
//     "display: inline-block; padding-right: 10px; opacity: 0.7; cursor: pointer;";
// }
// header.appendChild(navHeader);

// // Create Article
// let article = document.createElement('div');
// article.className = 'article';
// article.style.cssText =
//   "margin: 15px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; justify-content: center;";
// // Create Products
// for (let i = 1; i <= 15; i++) {
//   let product = document.createElement('div');
//   product.className = `product-${i}`
//   product.style.cssText =
//     'background-color: white; border: 1px solid rgb(221, 221, 221); width: 400px; padding: 10px; border-radius: 0.5rem; '
//   article.appendChild(product);
//   // Inside Product
//   let h4 = document.createElement('h4');
//   h4.innerHTML = `${i}`;
//   h4.style.cssText = "font-size: 30px; font-weight: 200; margin-bottom: 8px; margin-top: 8px; text-align: center"
//   product.appendChild(h4);
//   const word = document.createElement('div');
//   word.innerHTML = 'Product';
//   word.style.cssText = "text-align: center; font-size: 13px; opacity: 0.8;"
//   product.appendChild(word);
// }

// // Create Footer
// let footer = document.createElement('footer');
// footer.textContent = 'Copyright 2021';
// footer.style.backgroundColor = "#74BD9B";
// footer.style.cssText = "text-align: center; color: white; font-wight: bold; background-color: green; padding: 20px;";

// // Append All Elements To Body
// document.body.appendChild(header);
// document.body.appendChild(article);
// document.body.appendChild(footer);

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.document.title = "Course JavaScript";

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert
// window.alert('Test');
// this.alert('Test');
// alert('Test');

// confirm
// let confirmMes = confirm("Are you sure to delete this element?");
// console.log(confirmMes);
// if (confirmMes) {
//   console.log(`Item Deleted`);
// } else {
//   console.log(`Item Not Deleted`);
// }

// prompt
// let promptMes = prompt(`What's the good day to you?`, `Write day with 3 characters`);
// console.log(promptMes);

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log('After 2 Seconds');
// }, 2000);

// setTimeout(sayMes, 1000);
// function sayMes() {
//   console.log(`After 1 Second`);
// };

// setTimeout(sayMes, 1000, "Different Argu");
// function sayMes(argu) {
//   console.log(`After 1 Second and This is Arguement: ${argu}`);
// };

// let counter = setTimeout(sayMes, 1000);
// console.log(counter);
// function sayMes() {
//   console.log(`After 1 Second`);
// };

// let btn = document.querySelector('button');
// btn.onclick = () => {
//   clearTimeout(counter);
// }

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(() => {
//   console.log(`Interval After 2 seconds`)
// }, 1000);

// setInterval(sayMes, 1000);
// function sayMes() {
//   console.log(`After 1 Second`);
// };

// setInterval(sayMes, 1000, "Different Argu");
// function sayMes(argu) {
//   console.log(`After 1 Second and This is Arguement: ${argu}`);
// };

let interval = document.querySelector('div');
let num = parseInt(interval.textContent);
function decrement() {
  interval.textContent--;
  if (interval.innerHTML === '0') {
    clearInterval(counter);
    console.log(counter);
  }
}

let counter = setInterval(decrement, 1000);

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

console.log(location);
console.log(location.href)

// location.href = "https://google.com";
// location.href = "/#sec-2";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

console.log(location.protocol);

console.log(location.hash);

// console.log(location.reload());

// window.location.replace("https://google.com"); // Remove the history of current page and replace it
// window.location.assign("https://google.com"); // Not remove the history and assign new page

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// window === Main Object (contains many objects) ==> document, location,
// location === Nested Object from window

// console.log(window);

// setTimeout(() => {
//   window.open("https://google.com", "_blank", "width= 400, height= 400, left= 200, top= 100");
// }, 2000);

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// console.log(window.print())

// let myNewWindow = window.open("https://google.com", "", "width=400, height=400")

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btnScroll = document.querySelector('.up');

window.onscroll = () => {
  if (window.scrollY >= 600) {
    btnScroll.style.display = 'block';
  } else {
    btnScroll.style.display = 'none';
  }
};

btnScroll.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  });
};

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// // Set
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = 'bold';
// window.localStorage["fontSize"] = '20px';

// // Get
// window.localStorage.getItem("color");
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // Remove One
// window.localStorage.removeItem("color");

// // Clear All
// // window.localStorage.clear();

// // Get Key
// console.log(window.localStorage.key(0));


// // Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem('background', 'red');
// window.sessionStorage.setItem('background', 'blue'); 

document.querySelector(".session .name").oninput = function () {
  window.sessionStorage.setItem('input-name', this.value);
}
window.onload = () => {
  document.querySelector(".session .name").value = window.sessionStorage["input-name"];
}

// 114 - BOM Challenge

// Without Local Storage And Comments

// var value = ["aa", "bb", "cc"];
// localStorage.setItem("testKey", JSON.stringify(value));
// var test = JSON.parse(localStorage.getItem("testKey"));
// alert(test);

let text = '';
let inputText = document.querySelector('.input');
let inputButton = document.querySelector('.add');
let tasks = document.querySelector('.tasks');
let delText = document.querySelector('#del');

inputText.addEventListener("input", function (e) {
  // console.log(e.target.value);
  text = e.target.value;
});
delText.addEventListener('click', (e) => {
  inputText.value = '';
})

inputButton.onclick = () => {

  let task = document.createElement("p");
  task.textContent = text;
  task.className = 'task';

  let span = document.createElement("span");
  span.textContent = 'Deleted';

  window.localStorage.setItem('tasks', JSON.stringify([{ id: Math.random(), title: text }]));
  console.log(localStorage.getItem("tasks"));
  
  tasks.appendChild(task);
  task.appendChild(span);
  // Delete Item
  span.onclick = () => {
    document.querySelector("#completed").append(task);
    // task.remove();
    task.style.display = 'none';
  }
}

/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = 'A', b, c, d, e = "default"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// // console.log(myFriends[4]);

// let [ , y, , z] = myFriends;

// console.log(y);
// console.log(z);

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [ , b]]] = myFriends;

// console.log(a); // Shady
// console.log(b); // Gamal

/*
  Destructuring
  - Destructuring Array => Swapping Variables ------ Amazing and Fun and Useful
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);

/*
  Destructuring
  - Destructuring Object
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user["theAge"]);
// console.log(user.theTitle);
// console.log(user["theCountry"]);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
// const { theName, theAge, theCountry } = user;
// const { theName, theAge, theTitle, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const { theName: n, theAge: g, theCountry, theColor: co = 'Red', skills: {html: ht, css},  } = user;

// console.log(n);
// console.log(g);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${ht}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

/*
  Destructuring
  - Destructuring Function Parameters
*/


// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetail(user);

// // function showDetails(obj) {
// //   console.log(`Your Name Is ${obj.theName}`);
// //   console.log(`Your Age Is ${obj.theAge}`);
// //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// // }

// function showDetail({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }


//============================================================
// Problem In jschallanger.com
// Cursor enters and leaves element

const element = document.querySelector("#element");

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? "orange" : "black";
};

// type in your code here
element.addEventListener("mouseleave", () => {
  toggleColor(false);
});
element.addEventListener("mouseenter", () => {
  toggleColor(true);
});
//============================================================


/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const { theName: n, theAge: a, skills: [, , three], addresses: { egypt: e, ksa } } = user;


console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e}`);

/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

switch (chosen) {
  case 1:
    const { title: t1, age: a1, available: v1, skills: [, last1] } = myFriends[chosen - 1];
    printChosen(t1, a1, v1, last1);
    break;
  case 2:
    const { title: t2, age: a2, available: v2, skills: [, last2] } = myFriends[chosen - 1];
    printChosen(t2, a2, v2, last2);
    break;
  case 3:
    const { title: t3, age: a3, available: v3, skills: [, last3] } = myFriends[chosen - 1];
    printChosen(t3, a3, v3, last3);
    break;

}
function printChosen(t, a, v, last) {
  console.log(t);
  console.log(a);
  console.log(v? 'Available': 'Not Available');
  console.log(last);
}

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(2).add(3);

let myUniqueData = new Set();
// Add Elements
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add('A');

// Check If Element is found Or Not
console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData, myUniqueData);
console.log(myData.length, myUniqueData.size);
console.log(myData[1], myUniqueData[1]);

// Delete Element
myUniqueData.delete(2);
// console.log(myUniqueData.delete(2)); // Return true if element is found and false if not
console.log(myUniqueData, myUniqueData.size);

// Delete All Elements
myUniqueData.clear();
console.log(myUniqueData);

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet);

// Size

console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]

let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());
// console.log(iterator.next().done);

// forEach

mySet.forEach((ele) => console.log(ele));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);
// WeakSet Only use (add, has, delete)
myws.add({C: 3})

console.log(myws);

/*
  Map Is Very Important (Like Dictionary in Python) --------------<<<<<<<<<<<<<<<<<<<<<<

  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// Dictionary In Python === Map In JavaScript NOt (Object);

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject, myEmptyObject, myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
  true: "Boolean",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number").set("10", "String").set(true, "Boolean").set({ a: 1 }, "Object");
myNewMap.set(function doSomeThig() { }, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log('#'.repeat(5));
console.log(myNewObject, Object.keys(myNewObject).length);
console.log(myNewMap, myNewMap.size);

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let mapBetter = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],

]);

// mapBetter.set(10, "Number");
// mapBetter.set("Name", "String");

console.log(mapBetter);
console.log(mapBetter.get(10));
console.log(mapBetter.get("Name"));
console.log(mapBetter.get(false));
console.log('#'.repeat(5));
console.log(mapBetter.has(false));
console.log('#'.repeat(5));
console.log(mapBetter.size);
// Delete Value by the key
console.log(mapBetter.delete("Name"));
console.log(mapBetter.size);
mapBetter.clear();
console.log(mapBetter.size);

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };
let myMapStrong = new Map();
myMapStrong.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMapStrong);
console.log('#'.repeat(5));

let wMapUser = { theName: "Elzero" };
let myWeakMap = new WeakMap();
// myWeakMap.set('name', "Object Value Only"); // Invalid Key (Use Only Objects);
myWeakMap.set(wMapUser, "Object Value Only");

wMapUser = null; // Override The Reference

console.log(myWeakMap);

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Mahmoud"));
console.log(Array.from("12345", function (n) {
  return +n + +n;
}));
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];
let mySett = new Set(myArray);
console.log(Array.from(mySett));

console.log([...new Set(myArray)]); // Future

function arrayFrom() {
  return Array.from(arguments);
}
console.log(arrayFrom("Mahmoud", "Ayman", 15, 9, 2000));

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArrayCopy = [10, 20, 30, 40, 50, "A", "B"];

// myArrayCopy.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArrayCopy.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArrayCopy.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArrayCopy.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArrayCopy.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArrayCopy);

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log('Test');
//   return e > 7;
// });

let check = nums.some(function (e) {
  console.log('Test');
  return e > myNumber;
}, myNumber);

// let check = nums.some((e) => e > 7);

console.log(check);

function checkValue(arr, val) {
  return arr.some((ele) => {
    return ele === val;
  });
}
console.log(checkValue(nums, 20));
console.log(checkValue(nums, 2));

let range = {
  min: 10,
  max: 20,
}
let checkNumberInRange = nums.some(function (ele) {
  console.log(this.min, this.max);
  return ele >= this.min && ele <= this.max;
}, range);
console.log(checkNumberInRange);

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationArray = Object.keys(locations).map((e) => +e);

let checkGTMain = locationArray.every(function (ele) {
  return ele > this;
}, mainLocation)

// let checkGTMain = locationArray.every((ele) => ele > mainLocation);

console.log(locationArray, checkGTMain);

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log('Mahmoud');
console.log(...'Mahmoud');
console.log([...'Mahmoud']);
console.log(Array.from('Mahmoud'));
console.log('Mahmoud'.split(''));

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

// let allArrays = myArray1.concat(myArray2);
let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends)
console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums))

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1) * [...n1, ...n2].length); // 210


let obj = { a: { b: { c: 3 } } };

console.log(obj.a)

/*
  Regular Expression (Introduction)
  - Email
  - IP
  - URL
  - Phone
  */

// let str1 = "10 20 100 1000 5000";
// let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

// let invalidEmail = "Osama@@@gmail....com";
// let validEmail = "o@nn.sa";

// let ip = "192.168.2.1"; // IPv4

// let url = "elzero.org";
// let url = "elzero.org/";
// let url = "http://elzero.org/";
// let url = "http://www.elzero.org/";
// let url = "https://.elzero.org/";
// let url = "https://www.elzero.org/";
// let url = "https://www.elzero.org/?facebookid=asdasdasd";

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;
console.log(myString.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/i;
console.log(tld.match(tldRe));

let numsr = "12345678910";
let numsrRe = /[0-2]/g;
console.log(numsr.match(numsrRe));

let notNums = "12345678910";
let notNumsRe = /[^0-2]/g;
console.log(notNums.match(notNumsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /os[5-9]os/ig;
console.log(practice.match(practiceRe));

/*
  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

let myString1 = "AaBbcdefG123!234%^&*";

let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(atozSmall));
console.log(myString.match(NotAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(NotAtozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(NotaAndcAnde));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specials));

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test("names"));
console.log(/(\bspam|spam\b)/gi.test("spamname"));
console.log(/(\bspam|spam\b)/gi.test("nameSpam"));

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums1 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let nums1Re = /0\d*0/ig;
console.log(nums1.match(nums1Re));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString2 = "We Love Programming";
let names1 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString2));
console.log(/^we/ig.test(myString2));
console.log(/lz$/ig.test(names1));
console.log(/^\d/ig.test(names1));

console.log(names1.match(/\d\w{5}(?=z)/ig))
console.log(names1.match(/\d\w{8}(?!Z)/ig))

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));

let reg = /@/ig;

console.log(txt.replaceAll(reg, "JavaScript"));
console.log(txt.replaceAll(/@/ig, "JavaScript"));

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
  let validResult = phoneRe.test(phoneInput);

  if (validResult === false) {
    return false;
  }
  return true;
}

// Test Your Regular Expression And Discussions

// Regexr;
// RegExTester;
// RegEx101;

/*
  Regular Expression
  - Challenge
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 =
"https://www.elzero.org:800080/articleselzero.phpfd?5klajdfs/dfa=23.";

// let re = /((https?:\/\/)?(www.)?\w+.\D\w+\D)+/gi; // Write Your Pattern Here
let urlRe = /(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\D+\w+\D+)?/gi; // Write Your Pattern Here
console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));
console.log(url6.match(urlRe));


// JavaScript OOP

/*
  What Is OOP ?

  -OOP Stand For => Object Oriented Programming
  -OOP Is A Paradigm or Style Of Code
  -OOP Use The Concept Of Object To Design A Computer Program
  -Its Not New => Simula Is The First OOP Programming Language At 1960
  -Some Languages Support OOP and Some Not
  -Object Is A Package Contains Properties and Functions 
  That Work Together To Produce Something in Your Application. Functions Here Called Methods

*/

// Lesson is slides in elzero.org

/*
  Constructor Function
*/

// function User(id, username, salary) {
//   // object.property = value user input it;
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, 'Elzero', 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/*
  Constructor Function
  - New Syntax
*/

// class User {
//   constructor(id, username, salary) {
//     // object.property = value user input it;
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);

/*
  Constructor Function
  - Deal With Properties And Methods
*/

// class User {
//   constructor(id, username, salary) {
//     // Properties
//     // object.property = value user input it;
//     this.i = id;
//     this.u = username || 'Unknown';
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.info = function () {
//       return `Hello ${this.u}, Your Salary is ${this.s}.`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u}, Your Salary is ${this.s}.`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 8000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.info());
// console.log(userOne.writeMsg());
// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.info); // Native Code
// console.log(userTwo.writeMsg); // Native Code

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   udateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.udateName('Mahmoud');
// console.log(userOne.u);

// let strOne = 'Elzero';
// let strTwo = new String('Elzero');
// console.log(typeof strOne);
// console.log(typeof strTwo);
// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);
// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

/*
  Class
  - Static Properties And Methods
*/

// class User {
//   // Static Property
//   static count = 0;
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }
//   // Static Methods
//   static sayHello() {
//     return `Hello From class`;
//   }
//   static countMembers() {
//     return `${this.count} count members.`;
//   }
// }


// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.u);
// console.log(userOne.count); // undefined because it's static
// console.log(User.count); // 0
// console.log(User.sayHello());
// console.log(User.countMembers());

/*
  Class
  - Inheritance
*/








// // CONST // //
//
// 1 Video Elzero -> 1 lesson FCC => 1 part McKinsey =>
// Then 1 eps (Series The Game Arabic);
// 1 game Chess (If you want to rest)
// ###### After Finishing course Elzero js => Read the book js with (FCC) and (college courses)