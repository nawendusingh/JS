// Loops
// for while do-while
// for each ;for in

// **FOR
// cant use const in for loop
// declaration;conditon;increment
// for(let i=0;i<10;i++ ){
//
// if (i===2){
//   console.log('my favorite number is '+i);
//
// }
// console.log('Number ' + i)  ;
// }
 // if u want to skip logging second time use continue

 // for(let i=0;i<10;i++ ){
 //
 // if (i===2){
 //   console.log('my favorite number is '+i);
 //   continue;
 // }
 // if (i===5){
 //   console.log('stopping the loop');
 //   break;
 // }
 // console.log('Number ' + i)  ;
 // }


// **While

// let i =0;
// // only condition required
// while(i<10){
// console.log('Number ' + i);
//   i++;
// }


// *DO WHILE
// always gonna run no matter what

// let i=100;
// do{
//   console.log("number " + i);
//   i++;
// }
// while(i<10);

// Arrays  has specific method for looping but can be done  with for loops too
// not suggested though
const cars=['ford','chevy','honda','toyota'];
//
// for(let i=0;i<cars.length;i++){
//   console.log(cars[i]);
// }

// For EAch:array loops;it takes in a anonymous function

// cars.forEach(function(car){
//   console.log(car);
// });

// it can tk 3 things in parameters:  iterators,index,array
// cars.forEach(function(car,index, array){
//   console.log(`${index}: ${car}`);
//   console.log(array);
// });


// **MAP
// const users=[
//   {id : 1, name : 'John' },
//   {id : 2, name: 'jack' },
//   {id : 3, name : 'Walter' }
// ];
//
// // we tk this array of object s and create an array of IDs
// const ids=users.map(function(user){
//   return user.id;
// });
//
// console.log(ids);


// **FOR IN used for objects
// const user={
//   firstName:'John',
//   lastName:'Doe',
//   age:40
// }
//
// // key value pairs x gives the key
// for(let x in user){
//   console.log(`${x} : ${user[x]}`)
// }
