
// Set - collections - These objects represent collections which use keys; these contain elements which are iterable in the order of insertion.

//The Set object lets you store unique values of any type, whether primitive values or object references.

// Syntax: - new Set([iterable]);

//Set objects are collections of values. 
//You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false




console.log('-------***************************----------')

var mySet = new Set();

mySet.add({a: 1, b: 2}); 
// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
for (let item of mySet) console.log(item);

console.log("****====*****")
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
for (let item of mySet.keys()) console.log(item);

console.log('---- line 38 -----')
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
for (let item of mySet.values()) console.log(item);

console.log('---- line 42 -----')
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);



console.log('-------line 49----------')

function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();