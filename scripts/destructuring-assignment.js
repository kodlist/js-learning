//Destructuring assignment

/*
	The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

*/


[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]


({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}


var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// Array destructuring assignment 
var foo = ['one', 'two', 'three'];

var [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"


//A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7


/********************************************************************/

//Object destructuring


//The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.
//However, ({a, b} = {a: 1, b: 2}) is valid, as is var {a, b} = {a: 1, b: 2}
//{a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true




//Assigning to new variable names
// /A property can be unpacked from an object and assigned to a variable with a different name than the object property.
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true