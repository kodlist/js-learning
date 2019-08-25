


// instanceof

// It is important that you use closed paranthesis for the expression or object that you would use in console.log.
// eg: console.log(' ---- line 16 ---- ' + (simpleStr instanceof String));  -- if you dont use paranthesis then you will get random result or unwanted result.

var simpleStr = 'This is a simple string'; 
var myString  = new String();
var newStr    = new String('String created with constructor');
var myDate    = new Date();
var myObj     = {};
var myNonObj  = Object.create(null);

console.log( simpleStr instanceof String);
console.log( myString instanceof String);
console.log(newStr instanceof String);
console.log(myString  instanceof Object);
console.log('----- line 15 ---------')
console.log(' ---- line 16 ---- ' + (simpleStr instanceof String)); // returns false, checks the prototype chain, finds undefined
console.log(" ---- line 17 ---- " + (myString  instanceof String)); // returns true
console.log(' ---- line 18 ---- ' + (newStr    instanceof String)); // returns true
console.log(' ---- line 19 ---- ' + (myString  instanceof Object)); // returns true

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false