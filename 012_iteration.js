/**
 * ITERATION
 * Up and down and all around.
 * That's basically how iteration works.
 * 
 * There are many ways to iterate (or loop) through arrays in
 * JavaScript, and some of them offer special functionalities.
 * Here are some of the most popular and most used.
 */

var array = [{
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

// FOR ... OF => Iterates directly through each item of the array. Supports async.
for (let item of array) {
  console.log('FOR ... OF', item.name);
  console.log('FOR ... OF', item.age);
}

// FOR ... IN => Iterates directly through each index of the array. Supports async.
for (let index in array) {
  console.log('FOR ... IN', index);
}

// FOREACH => Iterates through each item and index. Does not support async.
array.forEach((value, index, arr) => {
  console.log('Array:', arr);
  console.log(`Value: ${value.name} | Index: ${index}`);
})

// MAP => Performs a function on each item of the array and generates a new one.
var ageDouble = array.map((value, index) => {
  console.log(`Duplicating age index ${index}, ${value.name}, ${value.age}`);
  return value.age * 2;
})
console.log('New array after MAP, only ages:', ageDouble);

// REDUCE => Reduces the array to a single value.
var ageTotal = ageDouble.reduce((total, value, index, arr) => {
  return total + value;
})
console.log('New array after REDUCE, summing ages from ageDouble:', ageTotal);

// EVERY => Checks if a condition is met in every item, and returns a boolean.
var age25 = array.every(value => {
  return value.age >= 25;
});
console.log('Everyone is older than 25:', age25);

// SOME => Checks if a condition is met in at least one item, and returns a boolean.
age25 = array.some(value => {
  return value.age >= 25;
});
console.log('Someone is older than 25:', age25);

// FIND => Returns the first item that meets a certain criteria.
age25 = array.find(value => {
  return value.age === 25;
});
console.log('This is the first person who is 25 years old:', age25.name);