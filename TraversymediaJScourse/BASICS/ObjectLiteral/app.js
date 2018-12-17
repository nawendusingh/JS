// Object literal
const person = {
  firstName:'Steve',
  lastName:'Smith',
  age:30,
  email:"steve@aol.com",
  hobbies:['music','sports'],
   address:{
     city:'miami',
     state:'FL'
   },
   getBirthYear:function (){
     // return 1988;
     return 2018-this.age;
   }
}
// we can remove hardcode in getBirthYear function by
// getBirthYear:function (){
//   return 2018-age;
// }
// but it wil give error
// so we have to use this keyword to access the object age
// this is pertaining to the object
let val;
val=person.firstName;
val=person['lastName'];
val=person.age;
val=person.hobbies;
val=person.hobbies[1];
val=person.address.state;
val=person.address['city'];
val=person.getBirthYear();
console.log(val);
// array of object
 const people=[
{name:'jack',age:30}   ,
{name:'jane',age:27}   ,
];

for (let i =0;i<people.length;i++){
  console.log(people[i].name);
}
