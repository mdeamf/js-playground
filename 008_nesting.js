/**
 * NESTING
 * Children are the future of our nation!
 * But in JavaScript, we call them Nested Objects or Nested Arrays.
 * 
 * Inside objects and arrays, we can have other objects and other arrays,
 * and so on. This process is called "Nesting", and these objects and 
 * arrays are called "Nested Objects" and "Nested Arrays".
 * The less nesting we have, the more "flattened" a JavaScript Object is.
 */

// Creating an object with a nested object inside it.
var obj = {
  name: 'John',
  age: '24',
  address: {
    street: 'Paulista Avenue',
    number: 123,
    city: 'Sao Paulo',
    state: 'SP',
    country: 'Brazil'
  }
};
console.log('This is our object:', obj);
console.log('This is our nested object:', obj.address);

var arr = [{
  department: 'IT',
  members: [{
    name: 'John',
    weekHours: 40
  }, {
    name: 'Maria',
    weekHours: 44
  }]
}];
console.log('This is our array:', arr);
console.log('This is our sub-array:', arr[0].members);
console.log('This is our item in a sub-array:', arr[0].members[1]);