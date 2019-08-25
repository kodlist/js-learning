

//this keyword

/*A function's this keyword behaves a little differently in JavaScript compared to other languages. 
It also has some differences between strict mode and non-strict mode.*/

var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42


/*
	A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
*/


/*
In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
*/
// In web browsers, the window object is also the global object:
//console.log(this === window); // true

a = 37;
//console.log(window.a); // 37


console.log(this)         // prints {}

/* comment above line and uncomment below two lines and you get a different output. this in js is different to any other lanaguges*/
//this.b = "MDN";
//console.log(window.b)  // "MDN"

/*
	Function context :Inside a function, the value of this depends on how the function is called.
*/
function f2() {
  'use strict'; // see strict mode  // you comment this line and see the output
  return this;
}

console.log(f2() === undefined); // true


//To set the value of this to a particular value when calling a function, use call(), or apply()

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

console.log(whatsThis());          // 'Global'
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom'