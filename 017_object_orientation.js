/**
 * OBJECT ORIENTATION
 * "Different classes are only cool when they're connected to Object Orientation Programming"
 * - Karl Max, definitely
 * 
 * Since ECMAScript 6 (2015), JavaScript offers some nice Object Orientation capabilities like other
 * programming languages, such as Java. These capabilities include the instantiation of new
 * objects based on Classes, Constructors and Factories.
 * If you are not familiar with Object Orientation, I suggest that you do some research before
 * proceeding.
 * Behind the curtains, a lot of things are happening. Classes hide the true nature of
 * JavaScript inheritance, which is connected to Prototypes, but it's nice that we can
 * still use some functions and keywords that facilitate our day-to-day work.
 * 
 * Please, check the Prototype file to take a look at some more possibilities with Constructors.
 */

// CLASSES => Simple and clean, they define the form an object will take.
class ComputerClass {
  constructor(os, code, name) {
    this.os = os;
    this.code = code;
    this.name = name;
  }

  printDetails() {
    console.log(`I have a ${this.os} named ${this.name}, code ${this.code}.`);
  }
}

// Let's instantiate two objects of this class and run one of the methods.
var myComputer = new ComputerClass('Windows', 123, 'MyComp');
myComputer.printDetails();
var myOtherComputer = new ComputerClass('Mac', 456, 'MyMac ');
myOtherComputer.printDetails();

// CONSTRUCTORS => We create a function that uses the "this" notation to instantiate the new object.
function ComputerConstructor(os, code, name) {
  this.os = os;
  this.code = code;
  this.name = name;
}
// I will refer to prototypes in the final file - it's my least favorite subject.
// But basically, it allows us to create inheritable properties and methods.
ComputerConstructor.prototype.printDetails = () => {
  console.log(`I have a ${os} named ${name}, code ${code}.`);
}
var myConsComputer = new ComputerConstructor('Windows XP', 321, 'MyConsComp');
myConsComputer.printDetails();

// FACTORIES => Similar to constructors, we return a full object that doesn't need the "new" operator.
function ComputerFactory(os, code, name) {
  return {
    os,
    code,
    name,
    printDetails: () => {
      console.log(`I have a ${os} named ${name}, code ${code}.`);
    }
  }
}

var myFactComputer = ComputerFactory('Macintosh', 654, 'MyFactComp');
myFactComputer.printDetails();