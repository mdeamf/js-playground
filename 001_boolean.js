/**
 * BOOLEAN
 * You have only two options in life: TRUE or FALSE! ZERO or ONE! COOL or... not cool?
 * Run "node 001_boolean.js".
 * 
 * Boolean values in JavaScript work just as they work
 * in basically every other programming language, there is
 * no mystery to them.
 * You can set a variable to true or false, and do whatever
 * you want with it. "It just works".
 * You can also use the Boolean object as an object wrapper,
 * but I honestly have never seen a practical application
 * for such a functionality.
 * The "!" operator signifies "NOT", and that's important to
 * know when you're working with conditions, or just inverting
 * a certain expression.
 */

/**
 * Check the value of the boolean parameter and log a string.
 * @param {string} string Just a string to differentiate the test cases.
 * @param {boolean} truth The value to be checked.
 */
const tellTruth = (string, truth) => {
  console.log(`Test Case: ${string}`);
  console.log(truth ? 'I am telling the truth!\r\n' : 'Yeah, I\'m a big liar!\r\n');
}

// Let's tell the truth!
var tellingTheTruth = true;
tellTruth('TRUE Variable', tellingTheTruth);
tellTruth('TRUE Value', true); // This also works the same way, obviously.

// Let's lie...
tellingTheTruth = false;
tellTruth('FALSE Variable', tellingTheTruth);
tellTruth('FALSE Value', false); // Once again, this also works.

// Inverting the value of the boolean variable.
tellingTheTruth = true;
tellTruth('TRUE Inverted', !tellingTheTruth);
tellTruth('TRUE Double Inverted', !!tellingTheTruth);

// Using the Boolean object.
// FALSE: 0, -0, null, false, NaN, undefined or an empty string.
// TRUE: Everything else.
var boolObj = new Boolean(1);
console.log('Not very practical: ', boolObj.valueOf());
var boolObj = new Boolean(0);
console.log('Not very practical too: ', boolObj.valueOf());
var boolObj = new Boolean('Testing');
console.log('Not very practical too, again: ', boolObj.valueOf());