
//Map in javascript:

// Syntax: new Map([iterable])

/*
	iterable :  An Array or other iterable object whose elements are key-value pairs (arrays with two elements, e.g. [[ 1, 'one' ],[ 2, 'two' ]]). Each key-value pair is added to the new Map; null values are treated as undefined.

	Properties:

			a. Map.length
			b. To count how many elements are in a Map, use Map.prototype.size.

*/

//Iterating over a Map
//A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
//The keys of an Object are String and Symbol, whereas they can be any value for a Map, including functions, objects, and any primitive.
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
//Maps can be merged, maintaining key uniqueness:
//Maps can be merged with Arrays, too:

let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3



/*********************************/

var myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

myMap.size;       // 2
myMap.has('bar'); // true

myMap.clear();

myMap.size;       // 0
myMap.has('bar')  // false




//Using the Map object


var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
  console.log(myMap.get(keyString));    // "value associated with 'a string'"
  console.log(myMap.get(keyObj));       // "value associated with keyObj"
  console.log(myMap.get(keyFunc));      // "value associated with keyFunc"

  console.log(myMap.get('a string'));   // "value associated with 'a string'"
                         // because keyString === 'a string'
 console.log(myMap.get({}));           // undefined, because keyObj !== {}
 console.log(myMap.get(function() {})); // undefined, because keyFunc !== function () {}



 //Maps can be iterated using the forEach() method:
 var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
 myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});