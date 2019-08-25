

//Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). 
//An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).


//Expressions - Object initializer
var object1 = {a: 'foo', b: 42, c: {}};

console.log(object1.a);
// expected output: "foo"


var a = 'foo';
var b = 42;
var c = {};
var object2 = {a: a, b: b, c: c};

console.log(object2.b);
// expected output: 42


