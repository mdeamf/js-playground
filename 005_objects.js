/**
 * OBJECTS
 * Why create multiple variables for information from the same scope
 * when you can have one single record for everything?
 * 
 * An object is basically a record with sub-values that can be easily accessed,
 * and it's the first step in JavaScript to get closer to Object Orientation.
 * If you're familiar with Classes and OOP, understanding JavaScript Objects
 * shouldn't be a problem for you. If you have no idea what I'm talking about,
 * I recommend going after some resources about it before diving in.
 * One of the cool differentiators of JavaScript Objects is that you don't
 * need to define a class before using it - actually, Classes were only introduced
 * in ECMAScript 6 (2015).
 */

// To define a simple object, just use braces {} and this format => property: value.
var obj = {
  property1: 'value',
  property2: 2,
  property3: true
};

// If we log our object like this, we'll view the entire definition.
console.log('My object:', obj);

// However, we can't inject it into a string (implicit toString())
console.log(`I can't log the entire object like this: ${obj}`);

// We access the properties of an object using the dot ==> object.property
console.log(`But I can access its specific properties like this: ${obj.property1}`);

// With the typeof operator, we can understand the different data types.
console.log(`My type is ${typeof obj}, but my properties are ${typeof obj.property1}, ${typeof obj.property2} and ${typeof obj.property3}.`);

// Checking if the object has a certain property.
console.log('Does my object contain property1?', obj.hasOwnProperty('property1'));
console.log('Does my object contain property100?', obj.hasOwnProperty('property100'));

// We can iterate through the properties in this case, since they're numbered.
// Instead of a dot, we can use brackets to access the property, passing a string inside the brackets.
for (var i = 1; i < 4; i++) {
  console.log(`Accessing property ${i}: ${obj['property' + i.toString()]}`);
}

// The Object native object has some methods we can use to help us.
// Object.keys generate an array based on the keys of the object, and we can iterate through them.
for (var key of Object.keys(obj)) {
  console.log(`Accessing property ${key}: ${obj[key]}`);
}

// Object.entries generates an array of objects, containing the key and values.
for (var [key, value] of Object.entries(obj)) {
  console.log(`Key: ${key} | Value: ${value}`);
}