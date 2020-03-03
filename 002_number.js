/**
 * NUMBER
 * We're all just numbers, if you think about it. But even just one number can make a huge difference.
 * Run "node 002_number.js".
 * 
 * In JavaScript, number variables can be used to store both integer
 * and decimal values. There is also a specific type for BigInt, but
 * I won't get into any details about it here.
 * The differentiation between integer and decimals comes only from
 * the decimal separator, and if there's any number placed afterwards.
 * The native library "Math" can be used to do lots of different
 * things with numbers, keeping us from reinventing the wheel when
 * we need some specific value or treatment.
 */

// Let's work with some integer values.
var integer = 1;
var alsoInteger = 1.0000;
console.log('\r\n--INTEGER--');
console.log(`Integer: ${integer}`);
console.log(`Also Integer: ${alsoInteger}`);
console.log(`Are they the same? ${integer === alsoInteger}`);

// Now let's test how decimal values work, and a couple of Math functions.
var decimal = 2.5;
console.log('\r\n--DECIMAL--');
console.log(`Decimal: ${decimal}`);
console.log(`Round Automatically: ${Math.round(decimal)}`);
console.log(`Round Upwards: ${Math.ceil(decimal)}`);
console.log(`Round Downwards: ${Math.floor(decimal)}`);

// Math has a built-in PI function.
console.log('\r\n--PI--');
console.log(`PI: ${Math.PI}`);

// Math also can generate random numbers.
console.log('\r\n--RANDOM--');
var random = Math.random();
console.log(`Random number between 0 and 1: ${random}`);

// To define the minimum and maximum, we can follow this structure.
// We sum 1 to the minimum value inside the parenthesis if we want it to be inclusive.
random = (Math.random() * (20 - 10 + 1)) + 10;
console.log(`Random number between 10 and 20: ${random}`);
console.log(`Random integer between 10 and 20: ${Math.floor(random)}`);

/**
 * Returns a random integer number
 * @param {number} min The minimum number.
 * @param {number} max The maximum number.
 * @param {boolean} inclusiveMax Is the maximum number inclusive?
 * @returns {number} Random integer.
 */
const getRandom = ((min, max, inclusiveMax) => {
  return Math.floor((Math.random() * (max - min + (inclusiveMax ? 1 : 0))) + min);
});
console.log(`Between 10 and 40: ${getRandom(10, 40, true)}`);
console.log(`This will never be 11: ${getRandom(10, 11, false)}`);

// Simple identifications of minimum and maximum numbers.
// Check the 006_arrays.js file for more information about the "ellipsis" (...).
console.log('\r\n--MIN & MAX--');
var arrNumbers = [1, 2, 3, 4, 100, -200, 900, -300];
console.log(`Min number: ${Math.min(...arrNumbers)}`);
console.log(`Max number: ${Math.max(...arrNumbers)}`);

// Get the absolute number from a, well, number.
console.log('\r\n--ABSOLUTE--');
console.log(`Absolute of -1: ${Math.abs(-1)}`);

// Working with exponential.
console.log('\r\n--POWER--');
console.log(`2 to the power of 5: ${Math.pow(2, 5)}`);

// Parsing from other data types and different formats.
console.log('\r\n--PARSING--');
console.log(`True equals 1: ${Number(true)}`);
console.log(`False equals 0: ${Number(false)}`);
console.log(`Integer strings are OK: ${Number('25')}`);
console.log(`Decimal strings are OK: ${Number('25.75')}`);
console.log(`We need to use the . separator, though: ${Number('25,75')}`);
console.log(`Trailing or leading spaces don't matter: ${Number('    25        ')}`);
console.log(`Normal strings are not allowed: ${Number('Mauricio')}`);
console.log(`parseInt rounds (floor) the number: ${parseInt(2.5)}`);
console.log(`parseFloat works normally: ${parseFloat(2.5)}`);