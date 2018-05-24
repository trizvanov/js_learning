const person = {
  firstName: 'Tim',
  lastName: 'Rizvanov',
  age: 42,
  email: 'blah@gmail.com',
  hobbies: ['sports', 'music'],
  address: {
    city: 'Sydney',
    state: 'NSW',
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

let val;

val = person;
// Get specific value

val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);


const people = [
  {name: 'Daniel', age: 14},
  {name: 'Julia', age: 36},
  {name: 'Tim', age: 42}
];

for (let i = 0; i < people.length; i++){
  console.log(people[i].name);
}