var o = {};
var o = {a: 'foo', b: 42, c: {}};

var a = 'foo', b = 42, c = {};
var o = {a: a, b: b, c: c};


let a1 = o.b;

console.log('---- line 10 ---- '+ a1);
console.log('---- line 11 ---- '+ o.a);



var object = {};

object.a1 = 23;
object.a2 = 'mehar';

console.log('---- line 20 ---- '+ object.a2);

console.log('---- line 22 ---- '+ object['a2']);


var a = 'foo', 
    b = 42,
    c = {};

var o = { 
  a: a,
  b: b,
  c: c
};

//With ECMAScript 2015, there is a shorter notation available to achieve the same:

var a = 'foo', 
    b = 42, 
    c = {};

// Shorthand property names (ES2015)
var o = {a, b, c};

// In other words,
console.log((o.a === {a}.a)); // true
console.log((o.a === 'foo')); // true

