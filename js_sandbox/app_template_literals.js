const name = 'Tim';
const age = 42;
const job = 'IT';
const city = 'Sydney';
let html;


// Without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

html = '<ul>' +
        '<li>Name: '+ name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Age: ' + job + '</li>' +
        '<li>Age: ' + city + '</li>';

function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Name: ${age}</li>
    <li>Name: ${job}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;



document.body.innerHTML = html;