/**
 * HIGH ORDER FUNCTIONS
 * Why can't two different functions be friends?
 * 
 * In JavaScript, as we've seen before, functions are almost (if not just) like
 * variables. Therefore, we can actually pass functions as parameters
 * to other functions, and that is usually called "Callback".
 * This is a very quick and simple demonstration. Callbacks and High Order Functions
 * are harder to understand in concept, not in execution.
 */

/**
 * Sum two numbers and do something with them with the callback.
 * @param {number} a Any random number.
 * @param {number} b Any random number.
 * @param {function} callback A callback to treat the resulting sum.
 */
function executeSum(a, b, callback) {
  var sum = a + b;
  callback(sum);
}

function logResult(value) {
  console.log('The result is:', value);
}

executeSum(2, 5, logResult);

// You can also use Anonymous Functions.
executeSum(2, 5, result => {
  console.log('Our result is:', result);
})