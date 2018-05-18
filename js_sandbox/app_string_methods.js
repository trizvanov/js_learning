const firstName = 'Timur';
const lastName = 'Rizvanov';
const age = 42;
const str = 'Hello there, my name is Tim';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

// Contatenation
val = firstName + ' ' + lastName;

// Append
val = 'Tim ';
val += 'Rizvanov';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('i');
val = firstName.lastIndexOf('m');

// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1);

// Substring
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

// Split
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace('Tim', "Daniel");

// includes
val = str.includes('Daniel');

console.log(val);