// 2 types
//
// Primitive:
// stored directly in location where variable accesses
// stored on stack
// when u access it , u access its actual value
//
// 6 types:
// string,
// number,int decimals floats all numbers in JS
// boolean,
// null-->intentional empty values
// undefined-->un-assigned variable;all vars are undefined by default
// symbols(ES6)
//
// Reference:considered as Objects
// accesed by Reference and not values
// object that are stored in the Heap
// a pointer to loaction in memory
//
// Arrays
// obj literals
// functions
// dates
// object wrappers etc.
// **study on your own
//
// *Dynamically-typed language-->associated with values and not variables which essentially means that same variable can be reassigned to another value/type.
// statically typed e.g.-->Java,C++.
// we do not need to specify types
//
// supersets of JS and addons that allow  static typing-->Typescript,flowJS.


  // Primitive
  const name = 'John Doe';
  const age=45;
  const hasKids=true;

     // In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value, with the type tag for objects being 0 , and null was represented as the NULL pointer ( 0x00 on most platforms). As a result, null had 0 as a type tag, hence the bogus typeof return value (reference).
  const car =null;
// using let as we cant  use const for undefined
  let test;
//symbols
const sym =Symbol();

  console.log(typeof name);
  console.log(typeof age);
  console.log(typeof hasKids);
  console.log(typeof car);
  console.log(typeof test);
  console.log(typeof sym);


// Reference Type

const hobbies=['movies','music'];
// obj literal-->A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.
const address={
  city:'boston',
  state:'MA'
}
const today=new Date();
console.log(typeof hobbies);
console.log(typeof address);
console.log(today);
console.log(typeof today);

// primitive  is what you actually access when you  set this variable to the string for example,
// const name='john' you are actually accessing  john in memory
//
// data that's actually being accessed with these reference types they're being accessed from memory as a reference.
