

//var - Declares a variable, optionally initializing it to a value.
//let - Declares a block-scoped, local variable, optionally initializing it to a value.
//const - Declares a block-scoped, read-only named constant.


/**
 * The difference between var and let
 */


//You can declare a variable in two ways:

var x = 42 ;

//This syntax can be used to declare both local and global variables, depending on the execution context.

//With the keyword const or let
let y = 13 ; //This syntax can be used to declare a block-scope local variable.



//You can also simply assign a value to a variable For example, z = 42. This form creates an undeclared global variable.
 z = 42 ;
//It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.




myName = 'Chris';

function logName() {
  console.log(myName);
}

logName();

var myName;
console.log('name : '+myName);


// next example
if (true) {
  var x = 5;
}
console.log(x);  // x is 5

//This behavior changes, when using the let declaration introduced in ECMAScript 2015 or es6.

if (true) {
  let x1 = 5;
}
console.log(x1);  // ReferenceError: x1 is not defined



var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;
// This one may puzzle you until you read 'Variable hoisting' below

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x1;
console.log('The value of x is ' + x1); // The value of x1 is undefined

console.log('The value of y is ' + y1); // Uncaught ReferenceError: y1 is not defined
let y1;







// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);


// trying to redeclare a constant throws an error -  Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;



var myName = 'Chris';
var myName = 'Bob';

//But the following would throw an error on the second line:
let myName = 'Chris';
let myName = 'Bob';

//You'd have to do this instead:
let myName = 'Chris';
myName = 'Bob';


//For these reasons and more, we recommend that you use let as much as possible in your code, rather than var. 
//There is no reason to use var, unless you need to support old versions of Internet Explorer with your code (it doesn't support let until version 11; the modern Windows Edge browser supports let just fine)