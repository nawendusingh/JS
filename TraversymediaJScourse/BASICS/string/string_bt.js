const firstName='William';
const lastName='Johnson';
const age=36;
const str= 'hello there my name is brad';
const tags='web dev,web design,programming';

let val;
val = firstName + lastName;
// concatenation
val=firstName+' '+lastName;

// append
val='Brad ';
val+='Traversy';

val='hello my name is '+firstName+' and i am '+age+' years old';

// escaping
val='That\'s awesome.I can\'t wait';
// or use double quotes
// Length is a property and not method
val=firstName.length;

// concat method
val=firstName.concat(' ',lastName);

// change case method
val=firstName.toUpperCase();
val=lastName.toLowerCase();


// treats str as read only arrays not much useful though
val=firstName[0];
 // indexof method
 val=firstName.indexOf('l');
 val=firstName.lastIndexOf('l');


// charAt()
val=firstName.charAt('2');

// *******get last character
val=firstName.charAt(firstName.length -1);

// substring
val=firstName.substring(0,4);

// slice mostly used with arrays
val=firstName.slice(0,4);
val=firstName.slice(-3);

// split
// user submits comma seperated values turn it to array
val=str.split(' ');
val=tags.split(',');

//replace
val=str.replace('brad','Jack');

// includes
val=str.includes('hello');
console.log(val);
