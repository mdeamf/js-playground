// Declaring simple primitive variables.
var string = 'This is a string.'; // Simple string;
var integer = 25; // Integer number - no decimals present.
var decimal = 1.5; // Decimal number - it has decimals.
var boolean = true; // Boolean (true-false) value.
var symbol = Symbol(); // We can use this a symbol for object properties, for example.

// Declaring a constant variable
const constant = 'This can never be changed.';

// Declaring a function as a declaration.
function myDeclarativeFunction(string) {
  return `Declaration - ${string}`;
}

// Declaring a function as an expression.
const myExpressiveFunction = function (string) {
  return `Expression - ${string}`;
}

// Declaring an arrow function, for an even more simplified syntax.
const myArrowFunction = (string) => {
  return `Arrow - ${string}`;
}

// Comparing VAR with LET, and working with TRY-CATCH
if (true) {
  var hoistedVariable = 'This variable will be hoisted, and available out of this scope.';
  let scopeSpecific = 'This variable will not be available out of this scope.';
}
const compareVarLet = () => {
  try {
    return `Trying to access this works: ${hoistedVariable}. This, however, doesn't: ${scopeSpecific}.`;
  } catch {
    return 'Trying to access the scopeSpecific variable throws an error.';
  }
}

// Run "node 000_cheatsheet.js" to check these logs.
console.log('--PRIMITIVE VARIABLES--');
console.log(`String: ${string}`);
console.log(`Integer: ${integer}`);
console.log(`Decimal: ${decimal}`);
console.log(`Boolean: ${boolean}`);
console.log(`Constant: ${constant}`);
console.log('--FUNCTIONS--');
console.log(`${myDeclarativeFunction(string)}`);
console.log(`${myExpressiveFunction(string)}`);
console.log(`${myArrowFunction(string)}`);
console.log('--VAR vs LET | TRY-CATCH--');
console.log(`${compareVarLet()}`);
console.log('--TYPEOF VARIABLES--');
console.log(typeof true); // It will be a boolean primitive data type.
console.log(typeof new Boolean(true)); // It will be an object.
console.log(typeof new Boolean(true).valueOf()); // It will be a boolean primitive data type.