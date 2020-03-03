/**
 * PROMISES
 * I promise you that I will, someday, return.
 * 
 * Promises are the way JavaScript has to work with asynchronous
 * routines. For example, an HTTP request or a SQL query are both
 * asynchronous, and not synchronous, and therefore these functions
 * could return a Promise.
 * The way Promises work is that they allow us to write code that will
 * only execute after these routines are properly completed, syncing
 * everything properly.
 */

// Creating a simple promise.
// Every promise created like this has "reject" and "resolve" functions.
// You can call them according to what you consider failing and working properly.
let promise = new Promise((resolve, reject) => {
  // Let's generate a random number.
  var random = (Math.random() * (20 - 10 + 1)) + 10;

  // Let's wait 2 seconds, just to make it seem like an asynchronous, slow request.
  setTimeout(() => {
    if (random >= 15) {
      resolve('It works! ' + random);
    } else {
      reject('It does not work... ' + random);
    }
  }, 2000);
});

// Let's call the promise we just created.
promise
  // If we used "resolve", the parameters will be the value in the ".then" statement.
  .then((result) => {
    console.log('Here\'s the result:', result);
  })
  // If we used "reject", the parameters will be the value in the ".catch" statement.
  .catch((error) => {
    console.log('Here\'s the error:', error);
  });

// We can also create more versatile functions that accept parameters, returning a promise.
let promise2 = function (multiplier) {
  return new Promise((resolve, reject) => {
    var value = multiplier * 3;

    // Let's wait 5 seconds, just to make it seem like an asynchronous, slow request.
    setTimeout(() => {
      if (value >= 30) {
        resolve('It\'s over 30! ' + value);
      } else {
        reject('It\' less than 30... ' + value);
      }
    }, 5000);
  });
}

// Both these promises will run almost at the same time, seeing as they're not chained.
promise2(10)
  .then((result) => {
    console.log('I sent 10, and got:', result);
  })
  .catch((error) => {
    console.log('I sent 10, and it returned this error:', error);
  });

promise2(5)
  .then((result) => {
    console.log('I sent 5, and got:', result);
  })
  .catch((error) => {
    console.log('I sent 5, and it returned this error:', error);
  });

// You can chain promises returning the next promise from the .then() function.
// IMPORTANT: This promises will begin together with the previous ones, as they're not chained.
promise2(10)
  .then(() => {
    console.log('Finished the first one!');
    return promise2(20);
  })
  .then(() => {
    console.log('Finished the second one!');
    return promise2(40);
  })
  .then(() => promise2(50)) // Or we can return directly, since it's an arrow function.
  .then((result) => {
    console.log('This promise waited for every other one to finish:', result);
  })
  .catch((error) => {
    console.log('Something went wrong with one of them:', error);
  });

console.log('This code will be executed before the promise ends, because it\'s outside .then() and .catch(), so it will not wait');