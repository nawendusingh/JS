// functions
// blocks of code that can be defined and called later/sametime

// function declarations
// () is for parameters
function greet(firstName='John', lastName='Turturro'){
    // anything inside here is function scope

  // setting default values in ES5
  // if(typeof firstName==='undefined'){firstName='John'};
  // if(typeof lastName==='undefined'){lastName='Doe'};



  // usually we return smthing from a function instead of logging
  // console.log('hello');
   return 'hello ' + firstName + ' ' +lastName;
}
// calling a function with console log
// greet();

// calling a function with return statement
// console.log(greet());

 // console.log(greet('John','wayne'));

 // this will return undefined
 // console.log(greet());


// function expression  most useful in closures,hoisting etc.
// usually a anonymous function

// const square = function(x){
//      return x*x;
// }
//
// console.log(square(8));

// immediately invokable functions
// IIFEs:function you declare and run at the same time;to do this we need it to be a  expression;so make it an expression by putting it in parentheses
// dont forget to add parentheses at the end
// (function(){
//   console.log('IIFE');
// })();


// also takes parameter
// (function(name){
//   console.log('Hello '+name);
// })("Brad");
 // IIFEs useful  in design patterns like module pattern


// Property methods:when a function is put inside object its called methods
const todo={
  add:function(){
    console.log('Add Todo');
  },
  edit:function(id){
    console.log(`Edit todo ${id}`);
  }
}
 todo.add();
 todo.edit(22);

 // can also define function for object outside it

todo.delete =function(){
  console.log('Delete Todo');
}
 todo.delete();
