/**
 * ECMASCRIPT 6/7 FUNCTIONS
 * A long time ago... In 2015...
 * Wait, that's not too long ago! Although it's basically ages in computer-years.
 * 
 * ECMAScript 6 was finalized in 2015, and it introduced a lot of new
 * functionalities that extend the power of JavaScript.
 * ECMAScript 7, 8, 9 and 10 continued the job ES6 began, introducing lots
 * of cool new mechanics we can use to facilitate our lives.
 * Let's test some of them!
 * IMPORTANT: Be aware that some functionalities will only be available
 * depending on the version of NodeJS and Browser you're running.
 */

// DEFAULT PARAMETER VALUES => If they're not passed, instead of "undefined", it will default to a pre-determined value.
function sum(x, y = 10) {
  return x + y;
}
console.log('Let\'s sum 15 with... Wait, I forgot.', sum(15));

// IS IT AN INTEGER? => Returns a boolean according to the number that was passed as a parameter.
console.log('Is 25 an integer?', Number.isInteger(25));
console.log('Is 2.5 an integer?', Number.isInteger(2.5));
console.log('Is 25.0 an integer?', Number.isInteger(25.0));

// PADSTART & PADEND =>  Add a character to a string, until it reaches de minimum size.
var str = '10';
console.log('Code 10, but 10 characters, pad at the start:', '1'.padStart(10, '0'));
console.log('Code 10, but 10 characters, pad at the end:', '1'.padEnd(10, '0'));

// FLAT => Concatenates sub-arrays with the parent array. Only available on NodeJS v11+.
var arr = [1, 2, [3, 4]];;
console.log('This is my flattened array:', arr.flat());