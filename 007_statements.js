/**
 * STATEMENTS
 * Each instruction is a statement. Each statement is executed.
 * It's that simple. If it doesn't work, we did something wrong - probably.
 * 
 * In this file, I decided to dedicate some time to the most common statements
 * and keywords. Some of these have already been used in other files,
 * and some of them are so common it's almost useless to talk about them,
 * but I still think it's interesting to work through them.
 */

// IF => Conditional statement.
if (true) {
  console.log('This is true, so we got here.');
}

// IF ... ELSE => Conditional statement with fallback.
if (1 === 2) {
  console.log('This is not true, we won\'t get here!');
} else {
  console.log('But we will get here.');
}

// IF ... ELSEIF ... ELSE => More fallbacks.
if (1 === 2) {
  console.log('This is not true, we won\'t get here!');
} else if (1 === 1) {
  console.log('But we will get here.');
} else {
  console.log('This is not true, we won\'t get here!');
}

// BREAK => Terminates the loop.
var array = [1, 2, 3, 4, 5];
for (let a of array) {
  console.log('Item:', a);
  if (a === 3) {
    break;
  }
}

// CONTINUE => Goes to the next loop.
for (let a of array) {
  console.log('Item:', a);
  if (a === 3) {
    continue;
  }
}

// DO-WHILE => Do something while the condition is not met.
var index = 0;
do {
  console.log('Current index', index);
  index++
} while (index < 7)

// TRY-CATCH => Fallback if an error happens.
try {
  var obj;

  // Trying to access a property of an undefined variable.
  console.log(obj.someProperty);
} catch (err) {
  console.log('An error happened! This is the error:', err);
}

// SWITCH => Basically a simplified IF-ELSEIF statement, treating specific cases.
var string = 'Hello';
switch (string) {
  case 'Goodbye':
    console.log('Goodbye people!');
    break;
  case 'Hello':
    console.log('Hello people!');
    break;
  default:
    console.log('None of the conditions were met, I don\'t know what to say.');
    break;
}