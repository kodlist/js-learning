


/*

There is a diff between for...of and for...in :

The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.


The for...in statement iterates over all non-Symbol, enumerable properties of an object.
for...in should not be used to iterate over an Array where the index order is important.
The for...in loop statement will return all enumerable properties, including those with non–integer names and those that are inherited.

*/

// examples for for .... in

//example-1 : : for...in
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
}

console.log(string1);
// expected output: "123"

//example-2 : for...in
var obj1 = {a: 1, b: 2, c: 3};
    
for (const prop in obj1) {
  console.log(`obj1.${prop} = ${obj1[prop]}`);
}

//example-3 : for...in


//The following function illustrates the use of hasOwnProperty(): the inherited properties are not displayed.
console.log('example-3.............')
var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();
console.log('--------------- line 51 -----------');

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  } 
}




/******************************************************************/

// example for : for...of

//example-1: for-of

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

let iterable1 = [10, 20, 30];

for (const value of iterable1) {
  console.log(value);
}
// 10
// 20
// 30

let iterable2 = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable2) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable2) {
  console.log(value);
}
// 1
// 2
// 3

let iterable3 = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable3) {
  console.log(value);
}
// 1
// 2
// 3

console.log('**********************************************************')

//Difference between for...of and for...in

//Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.
//The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
//The for...of statement iterates over values that the iterable object defines to be iterated over.

//The following example shows the difference between a for...of loop and a for...in loop when used with an Array.

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable4 = [3, 5, 7];
iterable4.foo = 'hello';

for (let i in iterable4) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

//Every object will inherit the objCustom property 
//and every object that is an Array will inherit the arrCustom property since these properties have been added to Object.prototype and Array.prototype, respectively.
//The object iterable inherits the properties objCustom and arrCustom because of inheritance and the prototype chain.


//This loop logs only enumerable properties of the iterable object, in arbitrary order. 
//It doesn't log array elements 3, 5, 7 or hello because those are not enumerable properties, 
//in fact they are not properties at all, they are values. It logs array indexes as well as arrCustom and objCustom, which are.
// If you're not sure why these properties are iterated over, there's a more thorough explanation of how array iteration and for...in work.
console.log('------line 141-------')
for (let i in iterable4) {
  if (iterable4.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

console.log('**********************************************************')