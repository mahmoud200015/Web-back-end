// ! Complete vidoe revsion on fcc youtube (!Important)
// * 1 lesson zaday
// ? graduation project

// Todo, @param, !, *, ?

// --------------------------

// JS Advanced - https://www.youtube.com/playlist?list=PLYyqC4bNbCIdvviLNbvYKfvHqszFPnUkj
// ----------

// All Lessons
// External JS Files
// Error Handling - Try , Catch
// ! API
// Postman Program (test API)
// Request Components (URL - TYPE - PARAMS - HEADERS)
// Connection API with JS
// Object oriented programming in javascript (OOP)
// GET - POST - PATCH - DELETE
// 


// ---------
// use in all JS files
"use strict"

// Error Handling - Try , Catch
// try {
//   console.log('first');
//   x
// } catch (error) {
//   console.log("Display when Error");
//   console.log(`Error: ${error}`);
// } finally {
//   console.log("Display anyway");
// }

// if (true) {
//   throw "Throw in JS - know the error and give it";
// }
// ----------

class Animal {
  constructor(name, color) {
    this._name = name; // private property
    this.color = color;
  }

  getName() {
    return this._name;
  }
  getColor() {
    return this.color;
  }
}
let cat = new Animal("cat", "black");
console.log(cat._name);
console.log(cat.getName());
console.log(cat.getColor());

