// Date & Time
// date object
let val;
// if we dont pass anything,it will be todays date
const today=new Date();
let birthday =new Date('9-10-1981 11:25:00');
// console.log(birthday);
 birthday =new Date('September 10 1981');
 birthday =new Date('9/10/1981');
val=today;
// just in case u want to convert to a string to use some str functions
// val=today.toString();

// date is 0-based in JS
val=today.getMonth();
val=today.getDate();
val=today.getDay();
val=today.getFullYear();
val=today.getHours();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();
// time spent since Jan 1st 1920
val=today.getTime();
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
console.log(birthday);
val=today.setHours(3);
val=today.setMinutes(30);
val=today.setSeconds(25);
console.log(birthday);
console.log(val);
// console.log(typeof val);
