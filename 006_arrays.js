/**
 * ARRAYS
 * Arrays, collections, matrixes... Arrays are almost impossible
 * to live without nowadays. 
 * 
 * An array is an iterable collection of values or objects, and that's
 * the most basic definition possible. For example, if we have multiple numbers
 * we want to work with, instead of declaring multiple variables, we can
 * create a single array and store each number as an item inside that array.
 * We can have array of different data types, and most importantly: we
 * can have an array of objects, to create even cooler and more complex
 * interfaces.
 */

// An array is defined with brackets.
var array = [];
console.log('An empty array:', array);

// Just like Objects, arrays can't be logged like this.
console.log('This doesn\'t work properly...' + array);

// .push => Add an item at the end of the array.
array.push(1);
console.log('My array with one item: ', array);
array.push(10);
array.push(50);
array.push(100);
console.log('My array with four items: ', array);

// .unshift() => Add an item.
array.unshift(0);
console.log('My array with a new item on the beginning: ', array);

// .pop() => Remove the last element of the array.
array.pop();
console.log('100 has been removed', array);

// .shift() => Remove the first element of the array.
array.shift();
console.log('0 has been removed', array);

// .length => Returns the size (length), as a number, of the array.
console.log(`My array has ${array.length} items`);

// We can access elements through the index (number), using brackets.
// Arrays are also zero-index based.
console.log(`My third item is ${array[2]}`);

// Of course, we can use that information to iterate.
for (var index = 0; index < array.length; index++) {
  console.log(`The index ${index} is ${array[index]}`);
}

// We can change the element directly.
array[1] = 5000;
console.log('My array has now changed:', array);

// .splice() => Remove or substitute items
// First parameter is the index, second parameter is the amount of items to delete.
array.splice(1, 1);
console.log('5000 doesn\'t exist anymore!', array);

// The third optional parameter is the value to substitute the previous one.
array.splice(0, 1, 5000);
console.log('Now it\'s changed:', array);
array.splice(0, 2, 123456);
console.log('Changing two items for one:', array);

// Overwriting the array for more examples.
array = [10, 100, 1000, 10000];
console.log('New array for more examples:', array);

// .slice() => Create a new array, slicing some part of the original array out.
console.log('Let\'s slice the first and second elements out:', array.slice(2));

// The second optional parameter determines the amount of items to slice out.
console.log('Let\'s slice from the first to the third:', array.slice(0, 3));

// .indexOf() => Same as with strings, returns the index of the item.
console.log('Index of 1000:', array.indexOf(1000));
console.log('Index of 50:', array.indexOf(50));

// .filter() => A function to filter our array, iterating through each item (f).
// If the function returns true, it will include the item in the new array.
console.log('Elements >= 100:', array.filter(f => f >= 100));
console.log('Elements < 100:', array.filter(f => f < 100));
console.log('Elements with at least three zeroes:', array.filter(f => {
  // Let's iterate through each character and count the zeros.
  var zeroCounter = 0
  for (var s of f.toString()) {
    if (s === '0') {
      zeroCounter++
    }
  }
  return zeroCounter >= 3; // This will return a boolean. If it's true, it will be on the new filtered array.
}));

// Now, let's talk about an Array of Objects.
var arrayOfObjects = [{
    name: 'John',
    age: 24
  },
  {
    name: 'Maria',
    age: 25
  },
  {
    name: 'Ann',
    age: 20
  }
];
console.log('An array of objects:', arrayOfObjects);

// We can also iterate through each item using the For...Of statement instead of using indexes.
for (var object of arrayOfObjects) {
  console.log(`Name: ${object.name} | Age: ${object.age}`);
}

// We can also filter just like before.
console.log('Ages less than or equal to 24', arrayOfObjects.filter(f => f.age <= 24));

// We can also concatenate arrays in different ways.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log('This will create sub-arrays:', [arr1, arr2]);
console.log('This will concatenate them:', [...arr1, ...arr2]);
console.log('This also works:', arr1.concat(arr2));

// Remember that items don't need to be of the same data type or object notation (although it is recommended).
var arr3 = [
  12,
  'My text',
  {
    name: 'Mauricio'
  }
];
console.log('Confusing array:', arr3);
console.log('Concatenating everything:', [...array, ...arrayOfObjects, ...arr1, ...arr2, ...arr3]);

// .join() => Transform an array into a string, joining each item by the defined parameter.
var strJoin = [1, 2, 3].join(' and ');
console.log('This is my joined string:', strJoin);

// String.split() => The opposite of .join(), transforming a string into an array
var arrJoin = strJoin.split(' and ');
console.log('This is my splitted string:', arrJoin);

// And finally, we can reverse/invert it.
console.log('This is my splitted string, reversed:', arrJoin.reverse());