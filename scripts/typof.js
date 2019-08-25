
//Syntax : The typeof operator is followed by its operand:

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";

typeof Number('1') === 'number'; // Number tries to parse things into numbers
typeof String(1) === 'string'; // String converts anything into a string, safer than toString
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy

// Objects
typeof {a: 1} === 'object';
console.log('line 22')
console.log(typeof {a: 1} === 'object')

console.log("---- line 25 ---- ");
console.log( "---- line 26 ---- " +  (typeof function() {} === 'function'));
console.log( typeof function() {} === 'function');
typeof class C {} === 'function';
console.log("---- line 29 ---- " +  (typeof class C {} === 'function'));
console.log(typeof Number('1'))



// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
var str = new String('String');
var num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

var func = new Function();

typeof func; // It will return 'function'