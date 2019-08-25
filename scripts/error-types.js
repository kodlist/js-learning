

//Error Types:

// THIS WILL CAUSE AN ERROR
function f() {};
//const f = 5;   //SyntaxError: Identifier 'f' has already been declared

var Foo = class {}; // constructor property is optional
class Foo {}; // Throws TypeError, doesn't allow re-declaration

//Syntax: new TypeError([message[, fileName[, lineNumber]]])

try {
  throw new TypeError('Hello', "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "Hello"
  
}

console.log(v2);  // not error but prints undefined
var v2 = 22;

//console.log(v1);  //ReferenceError: v1 is not defined
let v1 = 10;

  // this doesnt fail
//console.log('The value of z4 is ' + z4);
let z4 ;


const z1 = 'mehar';
console.log('The value of z1 is ' + z1); // The value of x1 is undefined




