/**
 * STRING
 * Can no programming language live without a STRING data type, right?
 * I mean, as far as I know, when it comes down to high-level programming languages
 * that actually interact with the interface, it's quite necessary.
 * 
 * A string is basically "an array of characters", as I'm sure you've heard
 * before. And, that's right! It's so right that we can even use some iterators
 * functions on this data type, similar to arrays.
 * In JavaScript, anything that's a text is represented as a string. It's a very
 * versatile data type, since whatever we wrote inside it isn't susceptible
 * to any automatic validation - unless you did something wrong before runtime.
 */

// The most simplistic way of having a string.
// Use \ to "escape" characters.
var string = 'Hello, I\'m a string!';
var stringDoubleQuotes = "I'm also a string, I can escape single quotes automatically!";
console.log(string);
console.log(stringDoubleQuotes);

// Let's to some interesting things with these strings.
var str1 = 'First string';
var str2 = 'Second string';
console.log('Concatenate strings like this: ' + str1 + '|' + str2 + '\r\n');
console.log(`Or like this: ${str1} | ${str2}`);
console.log(`The size of str1 is ${str1.length}!`);

// Now, how about we iterate through each character of the string? It's an array of characters, after all!
for (var s of str1) {
  console.log(`Content: '${s}'`);
}

// The indexOf() function is really important to interpret strings.
// It's zero-index based, so the first letter is on position 0.
// If it doesn't exist, it will return -1.
console.log(`First position of 'F': ${str1.indexOf('F')}`);
console.log(`First position of 't': ${str1.indexOf('t')}`);
console.log(`First position of 'T': ${str1.indexOf('T')}`);
console.log(`Last position of 's': ${str1.lastIndexOf('s')}`);

// Substring can generate another string based on positions.
// If the second parameter isn't explicit, it gets everything afterwards.
console.log(`Substring starting on position 2: ${str1.substring(2)}`);
console.log(`Substring starting on position 2: ${str1.substr(2)}`);

// substring() works with Initial Position X Final Position parameters.
// substr() works with Initial Position X Character Count parameters.
console.log(`Substring from 2 to 3: ${str1.substring(2, 3)}`);
console.log(`Substring from 2, and 3 characters after it: ${str1.substr(2, 3)}`);

// Working with both Substrings and Indexes.
console.log(`Substring starting on 'string': ${str1.substring(str1.indexOf('string'))}`);
console.log(`Substring starting on 'string': ${str1.substr(str1.indexOf('string'))}`);
console.log(`Substring starting on 'rst' and ending before 'ing': ${str1.substring(str1.indexOf('rst'), str1.indexOf('ing'))}`);
console.log(`Substring starting on 'string', and 5 characters after it: ${str1.substr(str1.indexOf('string'), 5)}`);

// Analyzing the indexOf() results.
if (str1.indexOf('First') !== -1) {
  console.log('Got \'em!');
}

if (str2.indexOf('Second') !== -1) {
  console.log('Got \'em!');
}

if (str1.indexOf('Second') === -1) {
  console.log('Mission Failed, we\'ll get them next time...');
}