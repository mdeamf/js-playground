/**
 * PROTOTYPE
 * Aw man... Here we go again.
 * 
 * Prototypes are JavaScript's way of working with inheritance, and honestly, they're
 * one of my least favorite subject of the entire tool. Either way, they're extremelly
 * important to understand, so let me try to gather my thoughts.
 * First of all, prototypes are much more important in their concept rather than their execution,
 * as they're much more theoretical than practical, so I recommend going out of your way
 * to read some documentation and articles about it to understand it better.
 * Before ES6, when we still didn't have classes, Factories and Constructors were the only ways
 * of creating inheritable objects.
 */

// Let's say you have an array.
var array = [10, 20, 30];

// Let's say you want to create a function for this array, define it, and use it.
array.myCoolFunction = () => {
  console.log('This is my cool function!');
};
array.myCoolFunction();

// The above code will definitely work, but it will stay integrated for the "array" variable.
// To create a function that will affect every array, we can change the Array prototype.
// The below code will also work. And, with that, we've used the Prototype inheritance to create a new method for the entire Array class.
// It's important to note that it's not recommended to change the native JavaScript prototypes like this.
Array.prototype.myNewFunction = () => {
  console.log('This is my new function!');
};
array.myNewFunction();

// Now, let's create a simple Constructor function.
function MyCoolConstructor(name) {
  this.name = name;
  this.myCoolFunction = () => {
    console.log(`Oh yeah, this is ${this.name}'s cool function!`);
  };
}
var myCoolObject = new MyCoolConstructor('Coolio');
myCoolObject.myCoolFunction();

// The above code will work, but with one problem: memory wasting.
// Every new object will instantiate this new method, and occupy an unnecessary amount of memory.
// What can we do? Well, we can use the Prototype for the Constructor too!
function MyNewConstructor(name) {
  this.name = name;
}
MyNewConstructor.prototype.myNewFunction = () => {
  console.log(`Oh yeah, this is ${this.name}'s cool function!`);
};
var myNewObject = new MyNewConstructor('Newlio');
myNewObject.myNewFunction();

// Another often discussed topic is Prototype Chain. Basically, there are just a small amount of native data types in JavaScript.
// Roughly, they are: undefined, null, boolean, number, string, and object.
// Every other type, like Date and Array, extends from one of these types' prototypes - in their cases, Object - creating a chain.
// At the top of the Prototype Chain, we have "null".
// Example 1 - Object | Object.prototype <== null
// Example 2 - Array | Array.prototype <== Object.prototype <== null
// Example 3 - Function | Function.prototype <== Object.prototype <== null
// Example 4 - MyNewConstructor | MyNewConstructor.prototype <== Object.prototype <== null
// Inherited prototypes are found using the "__proto__" property.
console.log('Array:', Array.prototype);
console.log('Array is:', Array.prototype.constructor);
console.log('Array is extended from:', Array.prototype.__proto__.constructor);
console.log('Object:', Object.prototype);
console.log('Object is:', Object.prototype.constructor);
console.log('Object is extended from:', Object.prototype.__proto__); // Null, if we try to access "constructor" it will throw an error.

// Let's try to extend from previously created Constructor functions.
// The second Object will be created based on the first, adding some new stuff to the first object.
function FirstConstructor() {}
FirstConstructor.prototype = {
  someProperty: 'someValue'
}
var firstObj = new FirstConstructor();
firstObj.newProperty = 'newValue';

function SecondConstructor() {}
SecondConstructor.prototype = firstObj;
var secondObj = new SecondConstructor();

// Let's see the Prototype chain we just created.
// Since we're talking about instantiated objects instead of classes, we don't need the "prototype" property like with Array, Object and so on.
console.log('firstObj\'s Prototype (self):', firstObj);
console.log('firstObj\'s Parent Prototype (FirstConstructor):', firstObj.__proto__);
console.log('firstObj\'s Parent\'s Parent Prototype (Object):', firstObj.__proto__.__proto__);
console.log('firstObj\'s Parent\'s Parent\'s Parent Prototype (Null):', firstObj.__proto__.__proto__.__proto__);
console.log('secondObj\'s Prototype (self):', secondObj);
console.log('secondObj\'s Parent Prototype (firstObj):', secondObj.__proto__);
console.log('secondObj\'s Parent\'s Parent Prototype (FirstConstructor):', secondObj.__proto__.__proto__);
console.log('secondObj\'s Parent\'s Parent\'s Parent Prototype (Object):', secondObj.__proto__.__proto__.__proto__);
console.log('secondObj\'s Parent\'s Parent\'s Parent\'s Parent Prototype (Null):', secondObj.__proto__.__proto__.__proto__.__proto__);

// What are the use cases? Good question.
// There's a whole discussion about the differences and pros-cons of Constructors, Factories and Classes.
// Nowadays, I think Classes are taking the Object Orientation into a whole new direction, making the use of Prototypes
// a bit less frequent. Either way, we can totally use it just like the MyNewConstructor example, or we can use
// on the native JavaScript types (like String.prototype) to include some polyfills and new functionalities that might
// not be available on your working and deployment environment - like creating the new padStart and padEnd functions.