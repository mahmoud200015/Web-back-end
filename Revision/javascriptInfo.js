// // * JavaScript.Info => to learn full javascript
// // Todo, @param, !, *, ?

// // write here

// // * Introduction to JS - Js

// // JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.
// // Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.
// // There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.
// // =====

// /*
// As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

// The benefit of a separate file is that the browser will download it and store it in its cache.

// Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

// That reduces traffic and makes pages faster.
// -----

// If src is set, the script content is ignored.
// A single <script> tag can’t have both the src attribute and code inside.

// This won’t work:

// <script src="file.js">
//   alert(1); // the content is ignored, because src is set
// </script>
// -----
// */
// // =====

// /*
// alert("Hello")

// [1, 2].forEach(alert);
// The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.

// If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.

// That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

// Here’s how the engine sees it:

// alert("Hello")[1, 2].forEach(alert);
// Looks weird, right? Such merging in this case is just wrong. We need to put a semicolon after alert for the code to work correctly.

// This can happen in other situations also.
// */
// // =====

// // So basically we add "use strict" at top to use modern features of the JS language
// // "use strict" explaintion
// "use strict"
// // let hasLicence = false;
// // let passTest = true;
// // if (passTest) HasLicence = true;
// // console.log(hasLicence);
// // let interface = "interface";
// // console.log(interface);

// /*
// An assignment without use strict
// Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

// // note: no "use strict" in this example

// num = 5; // the variable "num" is created if it didn't exist

// alert(num); // 5
// This is a bad practice and would cause an error in strict mode:

// "use strict";

// num = 5; // error: num is not defined
// */
// // ? without 'use strict' no error , with it shows error;
// // =====

// /*
// Reuse or create?
// And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.

// As a result, their variables are like boxes into which people throw different things without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check.

// Such programmers save a little bit on variable declaration but lose ten times more on debugging.

// An extra variable is good, not evil.

// Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code.
// */

// /*
// Summary
// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.
// Variables should be named in a way that allows us to easily understand what’s inside them.
// */
// // Tasks
// let name = "John";
// let admin = name;
// console.log(admin);
// let ourPlanetName = "Earth";
// let currentUserName = "John";
// const BIRTHDAY = '18.04.1982'; // make birthday uppercase? true
// // const AGE = someCode(BIRTHDAY); // make age uppercase? false
// // =====

// let infit = Infinity;
// console.log(Infinity, -Infinity, NaN);
// console.log(NaN ** 0);

// /*
// Mathematical operations are safe
// Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

// The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
// */
// // the "n" at the end means it's a BigInt
// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);
// console.log(BigInt(100));

// /*
// // null (data type)
// let age = null;
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.
// */

// /*
// // undefined
// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined
// ---

// ! …But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.
// */

// /*
// typeof null == object (wrong in JS);
// The result of typeof null is "object".
// That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
// */

// /*
// typeof alert == function (wrong in JS);
// The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.
// */

// /*
// ! * Summary
// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.
// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.
// In the next chapters, we’ll concentrate on primitive values and once we’re familiar with them, we’ll move on to objects.
// */

// /*
// // Tasks
// let name = "Ilya";

// alert( `hello ${1}` ); // ? hello 1

// alert( `hello ${"name"}` ); // ? hello name

// alert( `hello ${name}` ); // ? hello Ilya
// */

// // ========

// /*
// Summary
// We covered 3 browser-specific functions to interact with visitors:

// alert
// shows a message.
// prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
// All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

// There are two limitations shared by all the methods above:

// The exact location of the modal window is determined by the browser. Usually, it’s in the center.
// The exact look of the window also depends on the browser. We can’t modify it.
// That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.
// */

// let string = String(10);
// console.log(string, (10).toString());
// let number = Number("10z");
// console.log(number, parseInt("10z"));
// let boolean = Boolean(null); // null, undefined, NaN, 0, empty String
// console.log(boolean);

// /*
// Summary
// The three most widely used type conversions are to string, to number, and to boolean.

// String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

// The conversion follows the rules:

// Value	Becomes…
// undefined	NaN
// null	0
// true / false	1 / 0
// string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// Follows the rules:

// Value	Becomes…
// 0, null, undefined, NaN, ""	false
// any other value	true


// */

// // =========

// /*
// Terms: “unary”, “binary”, “operand”
// Before we move on, let’s grasp some common terminology.

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

// let x = 1;

// x = -x;
// alert( x ); // -1, unary negation was applied
// An operator is binary if it has two operands. The same minus exists in binary form as well:

// let x = 1, y = 3;
// alert( y - x ); // 2, binary minus subtracts values
// Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.
// */

// /*
// ! new - important
// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
// */

// /*
// // example on Assignment Operator
// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0

// // ------

// let a, b, c;

// a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4
// */

// /*
// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )
// */

// /*
// // Tasks
// let a = 1, b = 1;

// let c = ++a; // ? 2 2
// let d = b++; // ? 1 2

// let a = 2;

// let x = 1 + (a *= 2); // ? 5 4

// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 12
// */

// // ====================

// /*
// Not a real dictionary, but Unicode order
// The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

// For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). We’ll get back to specific details and consequences of this in the chapter Strings.
// */

// /*
// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.
// */

// /*
// Strange result: null vs 0
// Let’s compare null with a zero:

// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true
// Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
// */

// /*
// Avoid problems
// Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:

// Treat any comparison with undefined/null except the strict equality === with exceptional care.
// Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
// */

// /*
// Summary
// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
// */

// /*
// 5 > 4 = true
// "apple" > "pineapple" = false
// "2" > "12" = false ----------true
// undefined == null = true
// undefined === null = false
// null == "\n0\n" = true ------false
// null === +"\n0\n" = false
// */

// // =========

// // if statement

// /*
// We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.
// */

// /*
// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

// The syntax is:

// let result = condition ? value1 : value2;
// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
// */

// /*
// The purpose of the question mark operator ? is to return one value or another depending on its condition.
// Please use it for exactly that. Use if when you need to execute different branches of code.

// ! user ternary when you want to assign variable
// ! to result of the condtion, otherwise use if(...)
// */

// // Tasks
// /*
// "use strict";
// if ("0") {
//   alert( 'Hello' );
// }
// ----
// let userAnswer = prompt( ‘What is the “official” name of JavaScript?’);
// if (userAnswer == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know? ECMAScript!");
// }
// ------
// "use strict";
// let numberFromUser = prompt("Write any number?", 0);
// if (numberFromUser > 0) {
//   alert(1);
// } else if (numberFromUser < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }
// ---------
// let result = (a + b < 4)? 'Below': 'Over';

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// ---------
// let message = (login == 'Employee')? 'Hello':
//               (login == 'Director')? 'Greetings':
//               (login == '')? 'No login' : '';

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
// */

// // ===============

// /*
// Given multiple OR’ed values:

// result = value1 || value2 || value3;
// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.

// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.
// */

// /*
// ? Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
// */

// /*
// ! In the example below, only the second message is printed:

// true || alert("not printed");
// false || alert("printed");
// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.
// */

// /*
// ! The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.
// */

// /*
// ? A double NOT !! is sometimes used for converting a value to boolean type:

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false
// */

// // Tasks
// /*
// alert( null || 2 || undefined ); == 2
// -----
// alert( alert(1) || 2 || alert(3) ); == 1, 2
// -----
// alert( 1 && null && 2 ); == null
// -----
// alert( alert(1) && alert(2) ); == 1, undefined
// -----
// alert( null || 2 && 3 || 4 ); == 3
// -----
// if (age >= 14 && age <= 90) {}
// -----
// if (!(age >= 14 && age <= 90)) {}
// -----
// if (-1 || 0) alert( 'first' ); == print, -1
// if (-1 && 0) alert( 'second' ); == not print, 0
// if (null || -1 && 1) alert( 'third' ); == print, 1
// -----
// let login = prompt("Who's there?:", "");
// if (login === "Admins") {
//   let password = prompt("Enter Password:", "");
//   if (password == "TheMaster") {
//   alert("Welcome!");
//   } else if (password == "" || password == null) {
//   alert("Canceled");
//   } else {
//   alert("Wrong Password");
//   }
// } else {
//   if (login == "" || login == null) {
//   alert("Canceled");
//   } else {
//   alert("I don't know");
//   }
// }
// */

// // ============

// // create on api with method "POST"
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "dafa",
//     userID: 1
//   }),
//   headers: {
//     'Content-type': "application/json; charset=UTF-8",
//   }
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// // update on api with method "PUT"
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   // This is equivalent to /comments?postId=1
// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Todo all codes on fetch api in this website
// ! https://jsonplaceholder.typicode.com/guide/

// ===========

// Nullish coalescing operator '??'

/*
The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.
In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

We can rewrite result = a ?? b using the operators that we already know, like this:

result = (a !== null && a !== undefined) ? a : b;
*/

// let user = "Admin";
// console.log(user ?? "Unknown");

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

/*
! The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.

// example
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
*/

/*
/ precdence of ?? is like || -- take care
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
*/

/*
Summary
The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.
*/

// ============

/*
! remember
|| = return the first truthy value , precedence = 3
&& = return the first falsy value , precedence = 4
?? = return teh first defined value , precedence = 3
*/

/*
for...loop
The general loop algorithm works like this:

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
*/

/*
Inline variable declaration
Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.

for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable
Instead of defining a variable, we could use an existing one:

let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop
*/

/*
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
---------
The continue directive helps decrease nesting
A loop that shows odd values could look like this:

for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue.

But as a side effect, this created one more level of nesting (the alert call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.
*/

/*
! important and new
? label name for loob to use it inside it
  labelName: for (...) {
    ...
  }
// example
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
*/
// "use strict";
// labelForLoop: for (let I = 0; I < 5; I++) {
//   if (I === 3)
//     break labelForLoop;
//   console.log(I)
// }

/*
Summary
We covered 3 types of loops:

while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.
To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
*/

// Tasks

// let i = 3;
// while (i) {
//   console.log(i--); // last value shows = 1;
// }
// console.log(i)

/*
let i = 0;
while (++i < 5) alert( i ); 1, 2, 3, 4, 
let i = 0;
while (i++ < 5) alert( i ); 1, 2, 3, 4, 5

Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i < 11; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

Replace "for" with "while"
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
let i = 0;
while(i < 3) {
  conosle.log(`number ${i}!`);
  i++;
}

while (true) {
  let num = prompt("Enter a number greater than 100:", 0);
  if (num > 100 && !num) {
    break;
  }
}


*/

// ===================

/*
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}

The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists).
*/

/*
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
*/
// Tasks
/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/
// if (browser === 'Edge') {
//   console.log('you have got the Edge!');
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   console.log("Oday we support these browsers too");
// } else {
//   console.log("We hope that this page looks od!")
// }
/*
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
// switch (a) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//   case 3:
//     console.log('2,3');
// }

// =====================


// find prime numbers from {1 to num}

// "use strict";
// // let n = prompt("Enter a number(n) to know te primes from 1 to n:");

// let num = 10;
// let primer = true;
// let arr = [];
// while (num > 1) {
//   primer = true;
//   // check on number if prime or not
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       // console.log(num, i);
//       primer = false;
//       break;
//     }
//   }
//   // console.log(primer);
//   if (primer) arr.push(num);
//   num--;
// }
// console.log(arr);

// // // check on number if prime or not
// // for (let i = 2; i < num; i++) {
// //   if (num % i === 0) {
// //     // console.log(num, i);
// //     primer = false;
// //     break;
// //   }
// // }
// // console.log(primer);

// =========================

// ! Functions

/*
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
*/

/*
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
*/

/*
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
*/

/*
? Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.
*/

/*
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
*/

/*
! In other words, to put these terms straight:

- A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
- An argument is the value that is passed to the function when it is called (it’s a call time term).

We declare functions listing their parameters, then call them passing arguments.
*/

/*
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
*/

/*
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
*/

/*
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
*/

/*
* Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
*/

/*
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
*/

/*
If a function does not return a value, it is the same as if it returns undefined:

function doNothing() {  // empty  }

alert( doNothing() === undefined ); // true
An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
*/

/*
If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
*/

/*
? Naming a function
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
*/

/*
A few examples of breaking this rule:

getAge – would be bad if it shows an alert with the age (should only get).
createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).
*/

/*
Ultrashort function names
Functions that are used very often sometimes have ultrashort names.

For example, the jQuery framework defines a function with $. The Lodash library has its core function named _.

These are exceptions. Generally function names should be concise and descriptive.
*/

/*
// Prime Numbers with function

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
*/

/*
Summary
A function declaration looks like this:

function name(parameters, delimited, by, comma) {
  // code 
}
Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
A function can return a value. If it doesn’t, then its result is undefined.
To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

Function naming:

A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
A function is an action, so function names are usually verbal.
There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.
Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.
*/

// Tasks

// not required - work normal like the other - no different

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
//   return (age > 18) || confirm("Did parents allow you?");
//   return (age > 18) ? true : confirm("Did parents allow you?");
// }

// function min(num1, num2) {
//   return num1 > num2 ? num2 : num1;
// }

// console.log(min(2, 5) == 2);
// min(3, -1) == -1;
// min(1, 1) == 1;

// function pow(x, n) {
//   return x ** n;
//   return Math.pow(x, n);
//   for (let i = 1; i < n; i++) {
//     x *= x;
//   }
//   return x;
// }


// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// =========================

// Function expressions

/*
let sayHi = function() {
  alert( "Hello" );
};
*/

/*
Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

Surely, a function is a special value, in the sense that we can call it like sayHi().

But it’s still a value. So we can work with it like with other kinds of values.

We can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
*/

/*
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};

? Why is there a semicolon at the end?
*/

/*
We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.
*/

/*
https://javascript.info/function-expressions#function-expression-vs-function-declaration

Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}
Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};
*/

/*
* A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

* A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.
*/

/*
! very important\\

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

…If it were a Function Expression, then it wouldn’t work:

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
*/

/*
nother special feature of Function Declarations is their block scope.

* In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

If we use Function Declaration, it won’t work as intended:

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined
// Reason: That’s because a Function Declaration is only visible inside the code block in which it resides.

*/

/*
This code works as intended:

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

--------------

Or we could simplify it even further using a question mark operator ?:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
*/

/*
? When to choose Function Declaration versus Function Expression?
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
*/

/*
Todo: Summary
Functions are values. They can be assigned, copied or declared in any place of the code.
If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
If the function is created as a part of an expression, it’s called a “Function Expression”.
Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
Function Expressions are created when the execution flow reaches them.
In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
*/

// ===================

// Arrow functions, the basics

/*
let sum = (a, b) => a + b;

comment// This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};


alert( sum(1, 2) ); // 3
*/

/*
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
*/

/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
*/

/*
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
*/

/*
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
*/

// Tasks

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// ========================

// console.log("mahmoud".length);

// function stringLength(string = "") {
//   let count = 0;
//   while (string[count] !== undefined) {
//     // console.log(string[count]);
//     // if (string[count] === undefined)
//     //   break;
//     count++;
//   }
//   return count;
// }

// console.log(stringLength("mahmoud"));

// function reverseString(string = "") {
//   let length = stringLength(string);
//   let reverse = "";
//   for (let i = length - 1; i >= 0; i--) {
//     reverse += string[i];
//   }
//   return reverse;
// }

// console.log(reverseString("1mahmoud0"));

// *JavaScript specials (revision on all above quickly)

// Code structure
// https://javascript.info/javascript-specials#code-structure

// Strict mode
// https://javascript.info/javascript-specials#strict-mode

// Variables
// https://javascript.info/javascript-specials#variables

// Interaction
// https://javascript.info/javascript-specials#interaction

// Operators
// https://javascript.info/javascript-specials#operators

// Loops
// https://javascript.info/javascript-specials#loops

// The “switch” construct
// https://javascript.info/javascript-specials#the-switch-construct

// Functions
// https://javascript.info/javascript-specials#functions

// ===========================

// Code quality

// This chapter explains coding practices that we’ll use further in the development.

// Debugging in the browser

/*
The command “debugger”
We can also pause the code by using the debugger command in it, like this:

function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
}
Such command works only when the development tools are open, otherwise the browser ignores it.
*/

/*
Please open the informational dropdowns to the right (labeled with arrows). They allow you to examine the current code state:

Watch – shows current values for any expressions.

You can click the plus + and input an expression. The debugger will show its value, automatically recalculating it in the process of execution.

Call Stack – shows the nested calls chain.

At the current moment the debugger is inside hello() call, called by a script in index.html (no function there, so it’s called “anonymous”).

If you click on a stack item (e.g. “anonymous”), the debugger jumps to the corresponding code, and all its variables can be examined as well.

Scope – current variables.

Local shows local function variables. You can also see their values highlighted right over the source.

Global has global variables (out of any functions).

There’s also this keyword there that we didn’t study yet, but we’ll do that soon.
*/

/*
Summary
As we can see, there are three main ways to pause a script:

A breakpoint.
The debugger statements.
An error (if dev tools are open and the button  is “on”).
When paused, we can debug: examine variables and trace the code to see where the execution goes wrong.

There are many more options in developer tools than covered here. The full manual is at https://developers.google.com/web/tools/chrome-devtools.

The information from this chapter is enough to begin debugging, but later, especially if you do a lot of browser stuff, please go there and look through more advanced capabilities of developer tools.

Oh, and also you can click at various places of dev tools and just see what’s showing up. That’s probably the fastest route to learn dev tools. Don’t forget about the right click and context menus!
*/

// ===================

// Coding Style

/*
Our code must be as clean and easy to read as possible.
That is actually the art of programming – to take a complex task and code it in a way that is both correct and human-readable. A good code style greatly assists in that.
*/

// rules
// No space between the function name and parentheses between the parentheses and the parameter
// A space between parameters
// Curly brace { on the same line, after a space
// Indentation 2 spaces, A space after for/if/while…
// Spaces around operators, Spaces around a nested call
// A semicolon ; is mandatory
// Lines are not very long
// An empty line between logical blocks
// } else { without a line break

/*
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

The code above is more readable because the “special case” of n < 0 is handled early on. Once the check is done we can move on to the “main” code flow without the need for additional nesting.
*/

// https://javascript.info/coding-style#automated-linters

/*
Automated Linters
Linters are tools that can automatically check the style of your code and make improving suggestions.

The great thing about them is that style-checking can also find some bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you don’t want to stick to one particular “code style”.

Here are some well-known linting tools:

JSLint – one of the first linters.
JSHint – more settings than JSLint.
ESLint – probably the newest one.
All of them can do the job. The author uses ESLint.

Most linters are integrated with many popular editors: just enable the plugin in the editor and configure the style.

For instance, for ESLint you should do the following:

Install Node.js.
Install ESLint with the command npm install -g eslint (npm is a JavaScript package installer).
Create a config file named .eslintrc in the root of your JavaScript project (in the folder that contains all your files).
Install/enable the plugin for your editor that integrates with ESLint. The majority of editors have one.
//--------------
Here the directive "extends" denotes that the configuration is based on the “eslint:recommended” set of settings. After that, we specify our own.

It is also possible to download style rule sets from the web and extend them instead. See https://eslint.org/docs/user-guide/getting-started for more details about installation.

Also certain IDEs have built-in linting, which is convenient but not as customizable as ESLint.

*/

/*
Summary
All syntax rules described in this chapter (and in the style guides referenced) aim to increase the readability of your code. All of them are debatable.

When we think about writing “better” code, the questions we should ask ourselves are: “What makes the code more readable and easier to understand?” and “What can help us avoid errors?” These are the main things to keep in mind when choosing and debating code styles.

Reading popular style guides will allow you to keep up to date with the latest ideas about code style trends and best practices.
*/

// Tasks - fix the code to make code style in it

/*
function pow(x, n) {
  let result = 1;
  
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", ''); 
let n = prompt("n?", '');

if (n <= 0) {
  alert(`Power ${n} is not supported, 
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}
*/

// =========================

// Comments (good - bad)

/*
? Bad comments
Novices tend to use comments to explain “what is going on in the code”. Like this:

// This code will do this thing (...) and that thing (...)
// ...and who knows what else...
very;
complex;
code;

But in good code, the amount of such “explanatory” comments should be minimal. Seriously, the code should be easy to understand without them.
There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be rewritten instead”.
*/

/*
* Bad
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}

* Good
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
*/

/*
* Bad
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

* Good - notice that (call function before itself)
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    //...
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    //...
  }
}
*/

/*
? Good comments
So, explanatory comments are usually bad. Which comments are good?

-Describe the architecture
Provide a high-level overview of components, how they interact, what’s the control flow in various situations… In short – the bird’s eye view of the code. There’s a special language UML to build high-level architecture diagrams explaining the code. Definitely worth studying.
-Document function parameters and usage
There’s a special syntax JSDoc to document a function: usage, parameters, returned value.
*/

/*
! Comments that explain the solution are very important. They help to continue development the right way.

!Any subtle features of the code? Where they are used?
!If the code has anything subtle and counter-intuitive, it’s definitely worth commenting.
*/

/*
? Summary
An important sign of a good developer is comments: their presence and even their absence.

Good comments allow us to maintain the code well, come back to it after a delay and use it more effectively.

!Comment this:
Overall architecture, high-level view.
Function usage.
Important solutions, especially when not immediately obvious.

!Avoid comments:
That tell “how code works” and “what it does”.
Put them in only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require them.

Comments are also used for auto-documenting tools like JSDoc3: they read them and generate HTML-docs (or docs in another format).
*/

// / ===================

// ! Ninja code "Learning without thought is labor lost; thought without learning is perilous"
// https://javascript.info/ninja-code

/*
Programmer ninjas of the past used these tricks to sharpen the mind of code maintainers.

Code review gurus look for them in test tasks.

Novice developers sometimes use them even better than programmer ninjas.

Read them carefully and find out who you are – a ninja, a novice, or maybe a code reviewer?
*/

// Brevity is the soul of wit
// One-letter variables
// Use abbreviations
// Soar high. Be abstract.
// Attention test
// Smart synonyms
// Reuse names
// Underscores for fun
// Show your love
// Overlap outer variables
// Side-effects everywhere!
// Powerful functions!
//
/*
? Summary

All “pieces of advice” above are from the real code… Sometimes, written by experienced developers. Maybe even more experienced than you are ;)

Follow some of them, and your code will become full of surprises.
Follow many of them, and your code will become truly yours, no one would want to change it.
Follow all, and your code will become a valuable lesson for young developers looking for enlightenment.

! Don't do this in your code never.
*/

// ========================

// Todo Automated testing with Mocha

// Why do we need tests?
// Behavior Driven Development (BDD)
// Development of “pow”: the spec
// The development flow
// The spec in action
// Initial implementation
// Improving the spec
// Improving the implementation
// Nested describe
// * before/after and beforeEach/afterEach
// Extending the spec
// Summary


// Testing for few tests (not efficient for more cases)
// describe("pow", function () {
//   it("2 raised to power 3 is 8", function () {
//     assert.equal(pow(2, 3), 8);
//   });

//   it("3 raised to power 4 is 81", function () {
//     assert.equal(pow(3, 4), 81);
//   });
// });

// describe("pow", function () {
//   describe("raises x to power 2", function () {
//     function makeTest(x) {
//       let expected = x * x;
//       it(`${x} in the power of 2 is ${expected}`, function () {
//         assert.equal(pow(x, 2), expected);
//       })
//     };
//     for (let i = 1; i <= 5; i++) {
//       makeTest(i);
//     }
//   });
//   // describe.only -- it.only
//   describe("raises x to power 3", function () {
//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} in the power of 3 is ${expected}`, function () {
//         assert.equal(pow(x, 3), expected);
//       })
//     };
//     for (let i = 1; i <= 5; i++) {
//       makeTest(i);
//     }
//   });

//   it("for negative n the result is NaN", function () {
//     assert.isNaN(pow(2, -1));
//   });

//   it("for non-integer n the result is NaN", function () {
//     assert.isNaN(pow(2, 1.5));
//   });
  
// });

/*
* Other assertions
Please note the assertion assert.isNaN: it checks for NaN.

There are other assertions in Chai as well, for instance:

assert.equal(value1, value2) – checks the equality value1 == value2.
assert.strictEqual(value1, value2) – checks the strict equality value1 === value2.
assert.notEqual, assert.notStrictEqual – inverse checks to the ones above.
assert.isTrue(value) – checks that value === true
assert.isFalse(value) – checks that value === false
…the full list is in the docs
*/

/*
Summary
In BDD, the spec goes first, followed by implementation. At the end we have both the spec and the code.

The spec can be used in three ways:

As Tests – they guarantee that the code works correctly.
As Docs – the titles of describe and it tell what the function does.
As Examples – the tests are actually working examples showing how a function can be used.
With the spec, we can safely improve, change, even rewrite the function from scratch and make sure it still works right.

That’s especially important in large projects when a function is used in many places. When we change such a function, there’s just no way to manually check if every place that uses it still works right.

Without tests, people have two ways:

To perform the change, no matter what. And then our users meet bugs, as we probably fail to check something manually.
Or, if the punishment for errors is harsh, as there are no tests, people become afraid to modify such functions, and then the code becomes outdated, no one wants to get into it. Not good for development.
Automatic testing helps to avoid these problems!

If the project is covered with tests, there’s just no such problem. After any changes, we can run tests and see a lot of checks made in a matter of seconds.

Besides, a well-tested code has better architecture.

Naturally, that’s because auto-tested code is easier to modify and improve. But there’s also another reason.

To write tests, the code should be organized in such a way that every function has a clearly described task, well-defined input and output. That means a good architecture from the beginning.

In real life that’s sometimes not that easy. Sometimes it’s difficult to write a spec before the actual code, because it’s not yet clear how it should behave. But in general writing tests makes development faster and more stable.

Later in the tutorial you will meet many tasks with tests baked-in. So you’ll see more practical examples.

Writing tests requires good JavaScript knowledge. But we’re just starting to learn it. So, to settle down everything, as of now you’re not required to write tests, but you should already be able to read them even if they are a little bit more complex than in this chapter.
*/

/*
describe("string", function()) = group of it()
it("string", function()) = group of assert.
assert.(equal, strictEqual, isNaN, isTrue)
*/

// =======================

// Polyfills and transpilers

/*
The JavaScript language steadily evolves. New proposals to the language appear regularly, they are analyzed and, if considered worthy, are appended to the list at https://tc39.github.io/ecma262/ and then progress to the specification.

Teams behind JavaScript engines have their own ideas about what to implement first. They may decide to implement proposals that are in draft and postpone things that are already in the spec, because they are less interesting or just harder to do.

So it’s quite common for an engine to implement only part of the standard.

A good page to see the current state of support for language features is https://kangax.github.io/compat-table/es6/ (it’s big, we have a lot to study yet).

As programmers, we’d like to use most recent features. The more good stuff – the better!

On the other hand, how to make our modern code work on older engines that don’t understand recent features yet?

There are two tools for that:

Transpilers.
Polyfills.
Here, in this chapter, our purpose is to get the gist of how they work, and their place in web development.
*/

/*
Summary
In this chapter we’d like to motivate you to study modern and even “bleeding-edge” language features, even if they aren’t yet well-supported by JavaScript engines.

Just don’t forget to use a transpiler (if using modern syntax or operators) and polyfills (to add functions that may be missing). They’ll ensure that the code works.

For example, later when you’re familiar with JavaScript, you can setup a code build system based on webpack with the babel-loader plugin.

Good resources that show the current state of support for various features:

https://kangax.github.io/compat-table/es6/ – for pure JavaScript.
https://caniuse.com/ – for browser-related functions.
P.S. Google Chrome is usually the most up-to-date with language features, try it if a tutorial demo fails. Most tutorial demos work with any modern browser though.
*/

// ====================

// Objects: the basics

// Objects {}

/*
An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
*/

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// let fruit = "apple";
// let user = {
//   // an object
//   name: "John", // by key "name" store value "John"
//   age: 30, // by key "age" store value 30
//   "multi words": "access by bracket",
//   [fruit]: 5,
// };

// console.log(user.name)
// user.isAdmin = true;
// console.log(user.isAdmin);
// delete user.isAdmin;
// // console.log(user.isAdmin);
// console.log(user["multi words"]); // preferable to (square bracket notation)
// console.log(user);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user2 = makeUser("John Aske", 30);
// console.log(user2.name); // John

// function changeSyntacMakeUser(name, age) {
//   return {
//     name, // same as name: name
//     age: 30,
//   }
// }
// let user3 = changeSyntacMakeUser("Mahmoud", 23);
// console.log(user3.name, user3.age);

// console.log(user3["property not exisiting"] === undefined);

// // better syntax for (check property is exisi)
// // "key" in Object

// console.log("first" in user3);
// console.log("name" in user3);
// console.log(user3.hasOwnProperty("first"));
// // We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code.

// // The "for..in" loop

// for (let key in user) {
//   console.log(`${key}: ${user[key]},`);
// }

// /*
// ?Integer properties? What’s that?
// The “integer property” term here means a string that can be converted to-and-from an integer without a change.

// So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

// // Number(...) explicitly converts to a number
// // Math.trunc is a built-in function that removes the decimal part
// alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property
// */

// /*
// ! Summary

// Objects are associative arrays with several special features.

// They store properties (key-value pairs), where:

// Property keys must be strings or symbols (usually strings).
// Values can be of any type.
// To access a property, we can use:

// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
// Additional operators:

// To delete a property: delete obj.prop.
// To check if a property with the given key exists: "key" in obj.
// To iterate over an object: for (let key in obj) loop.
// What we’ve studied in this chapter is called a “plain object”, or just Object.

// There are many other kinds of objects in JavaScript:

// Array to store ordered data collections,
// Date to store the information about the date and time,
// Error to store the information about an error.
// …And so on.
// They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

// Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.
// */

// // Tasks
// "use strict"

// // let user = {
// //   name: "john",
// //   surname: "smith",
// // }
// // user.name = "Pete";
// // delete user.name;

// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//   for (let key in obj) {
//     if (key) {
//       return false;
//     }
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// console.log(menu);

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// console.log(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof key === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// ==============================

// Object references and copying

// ! The key of the lesson:
/*
*One of the fundamental differences of objects versus primitives 
is that objects are stored and copied “by reference”, 
whereas primitive values: strings, numbers, booleans, etc
– are always copied “as a whole value”.
*/

/*
A variable assigned to an object stores not the object itself, but its “address in memory” 
– in other words “a reference” to it.
*/

/*
? * When an object variable is copied, 
? the reference is copied, 
? but the object itself is not duplicated.
*/

/*
let user = { name: "John" };

let admin = user; // copy the reference
*/

// Comparison by reference
/*
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
----------
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false
*/

/*
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete

It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

In other words, the const user gives an error only if we try to set user=... as a whole.

That said, if we really need to make constant object properties, it’s also possible, but using totally different methods. We’ll mention that in the chapter Property flags and descriptors.
*/


// Cloning and merging, Object.assign

/*
let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object
*/

/*
We also can use Object.assign to perform a simple object cloning:

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
Here it copies all properties of user into the empty object and returns it.

There are also other methods of cloning an object, e.g. using the spread syntax clone = {...user}, covered later in the tutorial.
*/

// !! Very IMPORTANT !!
// let user = {
//   name: "John",
//   age: 30,
// };
// let clone = user; // copy the reference (change in it affect in obj user)
// // change in the follwing not affect in the obj user
// let clone1 = { ...user };
// let clone2 = Object.assign({}, user);
// let clone3 = {};
// for (let key in user) {
//   clone3[key] = user[key];
// }
// console.log(user == clone)
// console.log(user == clone1)
// console.log(user == clone2)
// console.log(user == clone3)


// let cloneTrue = user;
// let clone = {};
// let cloneAnotherWay = {};
// let clone3 = Object.assign({}, user);
// console.log(clone3);
// console.log(clone3 == user);
// Object.assign(cloneAnotherWay, user);
// console.log(cloneAnotherWay);
// console.log(cloneAnotherWay == user);

// for (let key in user) {
//   clone[key] = user[key];
// }
// console.log(clone);
// console.log(clone == user);
// console.log(cloneTrue == user);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let clone = user; // wrong
// console.log(clone.sizes = user.sizes);

/*
// Wrong way to clone nested objects
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
*/

// To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

// structuredClone
// The call structuredClone(object) clones the object with all nested properties.

// Here’s how we can use it in our example:
/*
// The Right Way 
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
*/

/*
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
*/

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let clone = structuredClone(user);
// console.log(clone);
// let arr = [10, 20];
// let clonarr = structuredClone(arr);
// console.log(clonarr);

/*
Summary
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).
*/

// !! Very IMPORTANT !!
// let user = {
//   name: "John",
//   age: 30,
// };
// let clone = user; // *copy the reference (change in it affect in obj user)
// *change in the follwing not affect in the obj user
// let clone1 = { ...user };
// let clone2 = Object.assign({}, user);
// let clone3 = {};
// for (let key in user) {
//   clone3[key] = user[key];
// }
// let clone4 = structuredClone(user);

// console.log(user == clone)
// console.log(user == clone1)
// console.log(user == clone2)
// console.log(user == clone3)
// console.log(user == clone4);


// =====================

// Garbage collection

/*
Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.

What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?
*/

// Reachability
// “reachable” values:=> are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
// 1- There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.
// 2- Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.

// unreachable is removed
// There’s a background process in the JavaScript engine that is called garbage collector.
//    It monitors all objects and removes those that have become unreachable.

// ? A simple example on reachable
/*
// user has a reference to the object
let user = {
  name: "John"
};
----------
Here the arrow depicts an object reference. 
The global variable "user" references the object {name: "John"} 
(we’ll call it John for brevity). 
The "name" property of John stores a primitive, 
so it’s painted inside the object.

*/

// * If the value of user is overwritten, 
// the reference is lost: user = null;
/*
* Now John becomes unreachable. 
* There’s no way to access it, no references to it. 
* Garbage collector will junk the data and free the memory.
*/

// Two references
