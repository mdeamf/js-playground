/**
 * ASYNC/AWAIT
 * How about we make it simples, ay?
 * 
 * This is basically a continuation of Promises, as we'll still be talking about them.
 * On the last file, we used the .then().catch() notation to execute and
 * chain promises.
 * However, there's an even simpler way to work with promises, and that's
 * by using asynchronous functions and the await operator.
 * It works the same way as the previous operators, but has a different syntax,
 * which, in my opinion, is much cleaner.
 */

// Let's recycle the previous promise.
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

// We use the "ASYNC" keyword before the function to denote that we'll use the AWAIT operator.
async function runPromises() {
  // Since we don't have .then().catch() anymore, we wrap the promises around a TRY-CATCH statement.
  try {
    console.log('Starting...')
    await promise2(10);
    console.log('First promise: OK');
    await promise2(20);
    console.log('Second promise: OK');
    
    // We can also get the result of these promises, obviously.
    const result = await promise2(50);
    console.log('Third promise:', result);

    // Now, let's throw an error...
    await promise2(1);
  } catch (err) {
    console.log('Something went wrong...', err);
  }
}

runPromises();