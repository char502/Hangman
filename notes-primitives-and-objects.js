// primitive value: a value that does not have properties

// string
// number
// boolean
// null - will never have object properties
// undefined - will never have object properties

const myStr = "Hello World";
console.log(myStr.split(""));

// When access a property on a string, it converts it to an object
// String, numbers and booleans are primitives but they also have an object wrapper
// This object wrapper is what gives it all of the functionality that can see above (i.e. when calling split method for a string etc)

const otherStr = new String("Phone");
console.log(otherStr);

const numTest = new number(5);
console.log(numTest);

// ========================================================================
// Anything not in the above list is an object i.e.

// Objects
// Arrays
// functions

// ========================================================================
// === PROTOTYPE CHAINS ===
// Object prototype chain:
// Object: myObject --> Object.prototype --> null
// Array prototype chain (shows the array linking to the object prototype, it is the customised version of an object)
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype ==> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const getScore = () => 1;
console.log(getScore);

// ========================================================================

const array = ["Luke", "Madison"];
console.log(array);
console.log(array.hasOwnProperty(length));
// length is on array itself
// filter is on Array prototype

// ========================================================================

// the prototype chain for objects is as follows:
// Object: myObject --> Object.prototype --> null
// object gets checked, if false, prototype gets checked if false, null indicates this is where the chain ends

// =========================================================================
// This is an object literal:
// when the syntax of the language allows us to define a value of a specific type (an object) using a series of characters
// The prototype of the object is then setup automatically (behind the scenes)
// rather than needing to use the 'new' keyword or constructor function
// =========================================================================

const product = {
  name: "Influence"
};

// hasOwnProperty
// console.log(product.hasOwnProperty("age"));
// console.log(product.hasOwnProperty("hasOwnProperty"));
console.log(product);

Object.prototype.someNewMethod = () => "This is the new function";

console.log(product.someNewMethod());
