/**
 * REGULAR EXPRESSION
 * I want my string to obey me!
 * But I don't want it to feel too much oppressed.
 * 
 * Regular Expressions are not exclusive to JavaScript, clearly, but JavaScript
 * offers some built-in support.
 * A Regular Expression is a form of expressing the format you want your
 * string to be formatted or presented - like validating the string without
 * needing to interpret it manually or using iterators.
 * Regular Expressions have a whole documentation about them, and it's very
 * broad. This file will only showcase some of the more basic cases.
 */

// A regular expressions begins and ends with forward slashes.
// It has this format: /<pattern>/<modifiers>
var regex = /myexpression/;

// There is also a nice constructor.
regex = new RegExp(/myexpression/);

// Let's test our Regular Expression.
var str1 = 'This is myexpression right here!';
var str2 = 'This is somethingelse right here!';
var str3 = 'This is MYEXPRESSION right here!';
console.log(`Checking if "${str1}" contains "myexpression":`, regex.test(str1));
console.log(`Checking if "${str2}" contains "myexpression":`, regex.test(str2));
console.log(`Checking if "${str3}" contains "myexpression":`, regex.test(str3));

// MODIFIER: i => Case Insensitive
regex = new RegExp(/myexpression/, 'i'); // Same thing as /myexpression/i
console.log(`Checking if "${str3}" contains "myexpression":`, regex.test(str3));

// REPLACE => We can use RegExp to replace characters.
var str1 = str1.replace(regex, 'anotherexpression');
console.log('This is my replaced string:', str1);

// MODIFIER: g => Considers all occurrences, and not just the first one.
var str4 = '\r\nHi, hello, hi, hello, hi!\r\nHi, hello, hi!\r\n';
console.log('This will replace only the first "hi":', str4.replace(/hi/, ''));
console.log('This will replace only the first "Hi":', str4.replace(/hi/i, ''));
console.log('This will replace all the "Hi"s:', str4.replace(/hi/ig, ''));

// ASSERTION: ^ => Search only the beginning (left). Place it before the search value.
console.log('This will not find "H":', new RegExp(/^H/).test('Oh, hello!'));
console.log('This will find "H":', new RegExp(/^H/).test('Hello!'));

// ASSERTION: $ => Search only the end (right). Place it after the search value.
console.log('This will not find "!":', new RegExp(/!$/).test('Oh, hello! :)'));
console.log('This will find "!":', new RegExp(/!$/).test('Hello!'));

// MODIFIER: m => Considers all the lines, if there are line breaks.
var str5 = '\r\nThis is a sentence.\r\nAnd is another line of a sentence.\r\n';
console.log('This will not replace "And":', str5.replace(/^And/i, ''));
console.log('This will replace "And":', str5.replace(/^And/im, ''));

// GROUPS: [] => Use brackets to define groups of characters.
var str6 = 'My name is John';
console.log('Has the letters "n", "a", "M" and "J":', new RegExp(/[naMJ]/).test(str6));
console.log('Has the letters "n", "a", "M" and "Z":', new RegExp(/[naMZ]/).test(str6));

// GROUPS: - => Use hyphens to denote range.
console.log('Only lowercase letters allowed:', new RegExp(/[a-z]/).test(str6));

// GROUPS: | => Use pipes to denote "OR".
console.log('Only letters allowed:', new RegExp(/[a-z|A-Z]/).test(str6));
console.log('Only numbers allowed:', new RegExp(/[0-9]/).test(str6));

// QUANTIFIER: {} => The amount of characters to consider. 5 numbers, hyphen, 4 numbers.
var phoneNumber = new RegExp(/[0-9]{5}\-[0-9]{4}/);
console.log('Invalid Brazilian phone number:', phoneNumber.test('123456789'));
console.log('Invalid Brazilian phone number:', phoneNumber.test('1234-56789'));
console.log('Valid Brazilian phone number:', phoneNumber.test('12345-6789'));