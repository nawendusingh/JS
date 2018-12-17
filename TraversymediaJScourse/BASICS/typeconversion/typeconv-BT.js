let val;

val=5;

console.log(val);
console.log(typeof val);
console.log(val.length);
// number to string
 val= String(5);

 console.log(val);
 console.log(typeof val);
 console.log(val.length);

val= String(4+4);
console.log(val);
console.log(typeof val);
console.log(val.length);
// bool to string
val= String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);
// date to String
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);
 // array to String
 val=[1,2,3,4,5]
 console.log(val);
 console.log(typeof val);
 console.log(val.length);


//can also use a function  toString()
val= (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);
val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

// **string to number
// toFixed() allows to specify decimals and works on numbers only
val=Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('hello');
val=Number([1,2,3]);

// parseInt()
val = parseInt('100');
val = parseInt('100.30');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = parseFloat('100.30');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


// Type coercion same as type conversion but JS does it for you
const val1=5;
const val2=6;
const sum=val1+val2;
console.log(sum);
console.log(typeof sum);

// JS convert val4 to a string itself
const val3='5';
const val4=6;
const sum2=val3+val4;
console.log(sum2);
console.log(typeof sum2);
