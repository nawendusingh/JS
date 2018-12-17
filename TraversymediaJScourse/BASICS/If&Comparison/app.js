const id=100;
// const id='100'; will also work though its unadvisable

// Equal to
// if (id==101){
//   console.log('correct');
// }else{
//   console.log('Incorrect');
// }
//
// // Not Equal to
// if (id!=101){
//   console.log('correct');
// }else{
//   console.log('Incorrect');
// }
// ****** triple equals sign will if types dont match
// use most of the times
// if (id===101){
//   console.log('correct');
// }else{
//   console.log('Incorrect');
// }
// if (id !==101){
//   console.log('correct');
// }else{
//   console.log('Incorrect');
// }

// Test if undefined
// if (typeof id!=='undefined'){
//   console.log(`the Id is ${id}`);
// }else{
//   console.log('No Id');
// }
 // greater or less than

 // if (id >101){
 //   console.log('correct');
 // }else{
 //   console.log('Incorrect');
 // }

// ELSEIF
  // const color='red';
  // if(color ==='red'){
  //   console.log(`color is ${color}`);
  // }else if( color==='blue'){
  //   console.log('color is blue');
  // }else{
  //   console.log('No color');
  // }


// Logical operators
const name='steve';
age=15;
// AND
// if(age>0 && age<12){
//   console.log(`${name} is a child`);
// }else if(age>=13 && age<=19){
//   console.log(`${name} is a teen`);
// }else{
//   console.log(`${name} is adult`);
// }


 // OR ||
 // if (age<16||age>65){
 //   console.log(`${name} cant run`);
 // }else{
 //   console.log(`${name} can run`);
 // }

// Ternaery
console.log(id===100 ? 'Correct' : 'Incorrect');


// without Curly braces
if (id===100)
        console.log('correct');
else
        console.log('Icorrect');
