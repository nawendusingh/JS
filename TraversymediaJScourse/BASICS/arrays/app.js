// store multiple value in 1 var ;mutable
// iterable
 const numbers=[43,56,33,23,44,37,5];
 const numbers2 = new Array(22,45,56,78,89);
const fruit=['Apple','banana','orange','pear'];
const mixed=[1,'hello',true,undefined,null,{a:1,b:2},new Date()];

// console.log(mixed);
let val;
// array length
val=numbers.length;

// check if is Array
val=Array.isArray(numbers);

// get single value
val=numbers[3];

// insert
numbers[2]=100;

// find index
val=numbers.indexOf(23);

// mutating arrays
// add on the end
numbers.push(250);
// add to front
numbers.unshift(120);
// remove number from end
numbers.pop();
// remove from front
numbers.shift();
// splice values
numbers.splice(1,3);

// reverse
numbers.reverse();

// concatenate arrays
val=numbers.concat(numbers2);

// sorting sorts by first number(200<50) so fix using compare function only in case of numbers
val=fruit.sort();
val=numbers.sort();
// ascending
val=numbers.sort(function(x,y){
  return x-y;
});
// descending
val=numbers.sort(function(x,y){
  return y-x;
});

// find  return first number less than 50
function under50(num){
  return num<50;
}

 val=numbers.find(under50);
console.log(numbers);
console.log(val);
