const name = 'John';
const age = 30;
const job = 'Web Dev';
const city = 'Miami';
let html;
// lot of times we will be inserting HTML from javascript
// when u fetch through ajax; u want to put in a unordered list and table with dynamic data;creating a HTML string  with HTML and with dynamic data that u want to insert.

// ES5 way
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
//
// html='<ul>' +
//           '<li>Name: ' + name + '</li>' +
//           '<li>Age: ' + age + '</li>' +
//           '<li>Job: ' + job + '</li>' +
//           '<li>City: ' + city + '</li>' +
//           '</ul>' ;


// with ES6
function hello(){
  return 'hello';
}

// we can also use function conditional expressions etc inside
html=`
  <ul>
      <li>Name: ${name}</li>
      <li>Age:${age}</li>
      <li>Job:${job}</li>
      <li>City:${city}</li>
      <li>${2+2}</li>
      <li>${hello()}</li>
      <li>${age>30 ? 'over 30' : 'under 30'}</li>
</ul>
`;


 document.body.innerHTML = html;
