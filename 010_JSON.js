/**
 * JSON
 * This JSON is not connected to Friday the 13th in any way.
 * 
 * JSON (JavaScript Object Notation) is a format to transmit data from
 * one endpoint to another using JavaScript Objects as its main
 * defining factor.
 * However, JSON and JavaScript Objects are different in concept and
 * usability: JSON is a "stringified" JavaScript Object.
 */

// Creating an example of a JSON.
var json = '{ "message": "Hello World!" }';
console.log('This is my JSON:', json);
console.log('This doesn\'t work, because it\'s a string:', json.message);

// Parsing our JSON into a JavaScript Object, so we can access its properties.
var jsobject = JSON.parse(json);
console.log('This is my JS Object:', jsobject);
console.log('This works, because it was parsed:', jsobject.message);

/**
 * Every JSON needs to have double quotes on its keys, and string values.
 * Number and Boolean values don't need to be wrapped around double quotes.
 * JSON is a string because it's a more universal data type, therefore we can transmit
 * the same information between a wide variety of programming languages and frameworks,
 * and the specific libraries will take care of parsing to their specific paradigms.
 */

var json2 = `
  {
    "message": "Hello World",
    "number": 1,
    "bool": false,
    "array": [1, 2, 3]
  }
`;
console.log('This is the array inside this JSON:', JSON.parse(json2).array);

var json3 = `
  "invalid": "json"
  "will": "throw an error"
`;
try {
  var parsed3 = JSON.parse(json3);
} catch (err) {
  console.log('Yep, the JSON is invalid, and here\'s the error:', err);
}