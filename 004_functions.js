/**
 * FUNCTIONS
 * When you realize you're doing the same thing over and over again, maybe
 * it's time to consider it's not just another routine, but a FUNCTIONality.
 * 
 * A function is a collection of code that perform a specific procedure
 * and can be reused anytime, anywhere - as long as it is in the scope
 * of that "anywhere".
 * A function can return a value to the original caller, or it can perform
 * a single action without returning a specific value.
 */

// A simple function that doesn't return any value.
function myFunction() {
  console.log('This is a simple function');
}
myFunction(); // This will log the text.
var myFn = myFunction(); // This will log the text too, but without any returns.
console.log('This is myFn:', myFn);

// A function that returns a string value.
function myFunction2() {
  return 'This is a simple function';
}
var myFn2 = myFunction2();
console.log('This is myFn2:', myFn2);

// Function with a parameter
function multiply(a, b) {
  return a * b;
}
console.log('2 * 5 = ', multiply(2, 5));

// Functions as DECLARATIONS
function myDeclarativeFunction(string) {
  return `Declaration - ${string}`;
}
console.log(myDeclarativeFunction('Hello there!'));

// Functions as EXPRESSIONS
const myExpressiveFunction = function (string) {
  return `Expression - ${string}`;
}
console.log(myExpressiveFunction('Hello again!'));

// Functions as ARROW FUNCTIONS
const myArrowFunction = (string) => {
  return `Arrow - ${string}`;
}
console.log(myArrowFunction('Goodbye now!'));

// JSDocs can be used to integrate with the IntelliSense of the editor.
// It always needs to be positioned right before the function.
// Hold the mouse pointer over the function definition, or type the function name to test it.
/**
 * This is the description of the function
 * @param {string} par1 Description of parameter 1
 * @param {number} par2 Description of parameter 2
 * @param {boolean} par3 Description of parameter 3
 */
function jsDocs(par1, par2, par3) {
  console.log(par1, par2, par3);
}
jsDocs('Hello', 2, true);

// This is an anonymous function.
// It's useful for specific things. In this case, I'm just printing something.
// I used an arrow function wrapped around parenthesis, and passed the parameters right after it.
((printThis, number) => {
  console.log(printThis, number);
})('Testing my anonymous function...', 10);