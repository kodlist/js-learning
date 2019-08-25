// Computed property names (ES2015)
var i = 0;
var a = {
  ['foo' + ++i] : i,
  ['foo' + ++i] : i,
  ['foo' + ++i] : i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param] : 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)] : 4
};

console.log(config); // {size: 12, mobileSize: 4}



// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
console.log( typeof [1, 2, 4] === 'object');

var arr = [1, 2, 3];
console.log( ' ---- line 28 ---- '+ arr.length);
console.log( ' ---- line 28 ---- '+ arr.isArray);


// Array destructuring assignment 

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


//Parsing an array returned from a function
function f() {
  return [1, 2];
}

var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2

//Ignoring some returned values
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3