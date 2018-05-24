// Create some arrays
const numbers = [44,57,21,2,89,7,24];
const numbers2 = new Array(31,89,57,3,90,11);
const fruit = ['Apple','orange','banana','pear'];
const mixed = [34,'hi',true,undefined,null, {a:1,b:2}, Date()];

console.log(mixed);

let val;

// Get array length
val = numbers.length;
// Check if there is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of a value
val = numbers.indexOf(100);


// Mutating arrays

// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(130);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // REverse 
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// // Sort arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y) {
//   return x - y;
// })

// // Reverse sort
// val = numbers.sort(function(x, y) {
//   return y - x;
// })

// Find
function over50(num) {
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);
