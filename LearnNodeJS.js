// -- The Plan --
// Start Learning Crash Course MERN Stack

// - database-> mongodb-> Node.js-> react ##
// -
// - 2 Lesson FCC !(important), with lessonc github

// ASP.net , rails ==> (Blocking Syncronous) - CPU-intensive apps
// Node.js ==> (NON-Blocking Asyncronous) - for I/O-intensive apps




// -------------------

// window (object) is not in Node js
// globalThis  (object) for Node

function displayName(name) {
  // window.console.log("Hello, " + name); // Error 
  globalThis.console.log("Hello, " + name); 
  console.log("Hello, " + name); 
}
displayName("Mahmoud");

// console.log(module);

module.exports.displayName = displayName; // puplic
// require("./nameofOtherFile") - you will export this in it
// then store it in const variable and use it
// ---------
// Node Modules
// 1- Path Module
const path = require("path");
// 2- OS Module
const os = require("os");
// 3- File System Module
const fs = require("fs");
// 4- Events Module
const EventEmitter = require("events");
// 5- HTTP Module
const http = require("http");
// ----------

// ! Complete crash course Node.js (!Important)
// * 1 lesson zaday
// ? graduation project

// Todo, @param, !, *, ?

// --------------------------

let obj1 = {
  name: "ahmed"
}
obj2 = obj1;
obj2.name = "ali";
console.log(obj1);

// --------------------------

function display() {
  // console.log(globalThis);
  // console.log(global);
  console.log(this === globalThis);
}

let data = {
  myFunc: () => {
    console.log(this === globalThis);
  },
};
data.myFunc();
display();

// --------------------------

let arr = [1, 2, 3, 4, 5];

arr.forEach((ele, index, array) => {
  // console.log(ele);
  console.log(ele, array[index]);
});

// --------------------------

// The time is now and you're late
// Start 3 subjects college (1 / 9)
// ! G Project - NLU - Deep L



