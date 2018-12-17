// var name = 'jane Doe';
// console.log(name);
// // u can reassign variable if you use var or let
// name  ='steve sith';
// console.log(name);
// // init a var but not assign.console will return undefined
// var greetings;
// console.log(greetings);
// greetings = 'Hello';
// console.log(greetings);


// LET works same way in global scope
// let name = 'jane Doe';
// console.log(name);
// name  ='steve sith';
// console.log(name);


// CONST
// const name='John';
// console.log(name);
// reassignment does not work on const var
// name='sara';
// always have to assign value or an error
// const greetings;


// we can change objects assigned to var, we cant reassign it
const person={
  name:'John',
  age:30
}
person.name='Sara';
person.age=32;
console.log(person);

const numbers=[1,2,3,4,5];
numbers.push(6);
// assignment to const var not allowed but object can be changed
// numbers=[1,2,3,4,5,6];
console.log(numbers);


//  Use const unless needed to change values,initialize or in loop/iterator
// makes code more readable,robust,secure
