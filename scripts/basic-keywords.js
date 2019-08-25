

//Basic keywords and general expressions in JavaScript.


// ************* this ****************************//

//this: A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.
// Value : A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42

console.log("this "+ this); // value can be : A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

// ******** this in - Global context ********** //

//In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.


// In web browsers, the window object is also the global object:
/*console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"*/


// ******** this in - Function context ********** //

//Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser. 


/*function f1() {
  return this;
}

// In a browser:
f1() === window; // true 

// In Node:
f1() === global; // true*/



// In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined, as shown in the following example:

function f2() {
  'use strict'; // if you comment this line u get error.
  return this;
}
console.log('==============');
let f = f2();
console.log(f);
//console.log(f2() === undefined); // true

//To set the value of this to a particular value when calling a function, use call(), or apply() as in the following examples.
// An object can be passed as the first argument to call or apply and this will be bound to it.

//Example 1
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
let v1 = whatsThis.call(obj);  // 'Custom'
let v2 = whatsThis.apply(obj); // 'Custom'
console.log(v1 +" "+ v2);


//Example 2

function add(c, d) {
  return this.a + this.b + c + d;
}

console.log(add(2, 2)); // returns NaN

var o = {a: 1, b: 3};

console.log('---- '+add.call(o, 5, 7)); //16 

//The bind method

function fbind() {
  return this.a;
}

var g = fbind.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o1 = {a: 37, fbind: fbind, g: g, h: h};
console.log(o1.a, o1.fbind(), o1.g(), o1.h()); // 37,37, azerty, azerty