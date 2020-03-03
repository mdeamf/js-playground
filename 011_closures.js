/**
 * CLOSURES
 * Encapsulation can be complicated, but simplicity can help us understand it easily.
 * 
 * Closure is a form of creating a function from a function,
 * with specific parameters or not, changing the expected
 * behavior or not.
 * Basically, it's like we're creating a prototype, and from
 * that prototype, we generate other functions.
 */

/**
 * Creates a function that will multiply the number "b" by "a".
 * @param {*} a Multiplier.
 * @param {*} b Number being multiplied.
 */
function createMultiplier(a) {
  return function (b) {
    return a * b;
  }
}

// From that function, we can generate another function that always multiply by 2.
// In that way, we create a function that always returns twice the parameter that was passed.
const twice = createMultiplier(2);
console.log('3 * 2 =', twice(3));

const multiplyBy10 = createMultiplier(10);
console.log('3 * 10 =', multiplyBy10(3));