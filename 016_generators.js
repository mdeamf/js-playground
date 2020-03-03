/**
 * GENERATOR
 * It has results for everyone! 
 * 
 * A Generator is a special kind of function that has (yields) multiple
 * results, that can be accessed as they're properly needed.
 * It can be used kind of like a "prepared statement", where we'll 
 * access the return values individually.
 */

/**
 * Creates a counter for an X amount of attempts.
 * @param {*} x The amount of attempts.
 */
function* generateAttempts(x) {
  var i = 1;
  while (i <= x) {
    yield i;
    i++;
  }
}

// Let's create four attempts.
var fourAttempts = generateAttempts(4);

// Let's attempt something 10 times.
for (let i = 0; i < 10; i++) {
  // The "next()" method returns an object with the yielded value (value) and a boolean indicating if the generator is over (done).
  var attempt = fourAttempts.next();
  if (!attempt.done) {
    console.log(`This is attempt number ${attempt.value}...`);
  } else {
    console.log('You exceeded the amount of attempts!');
  }
}