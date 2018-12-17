// switches
// same as if else
// use when u have a lot of cases

const color='red';

switch(color){
  case 'red':
    console.log('color is red;');
    break;
  case 'blue':
    console.log('color is blue;');
    break;
    default:
    console.log('color is not defined;');
}

let day;

switch(new Date().getDay()){
  case 0:
    day='Sunday';
    break;
  case 1:
    day='MOnday';
    break;
  case 2:
    day='Tuesday';
    break;
  case 3:
    day='Wednesday';
    break;
  case 4:
    day='Thursday';
    break;
  case 5:
    day='Friday';
    break;
  case 6:
    day='Saturday';
    break;
}
console.log(`${day}`);
