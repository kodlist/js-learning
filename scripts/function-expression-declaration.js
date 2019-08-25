

//Function expressions in JavaScript 

console.log(func1) // undefined 
//even though the variable name is hoisted, the definition isn't. so it's undefined.
//func1(); 
// TypeError: func1 is not a function

var func1 = function() {
   console.log('bar');
};
console.log('---- line 13 ---- '); 
func1();
console.log('---- line 15 ---- '+func1);  //prints variable, in here it prints the function defined as string
console.log('---- line 16 ---- '); 
console.log('---- line 17 ---- '+func1()); // returns undefined
console.log('---- line 18 ---- '); 
console.log(func1) ;


var func2 = function() {
   console.log('2');
   return 2;
};
console.log('---- line 26 ---- '); 
func2();
console.log('---- line 28 ---- '+func2);  // prints variable, in here it prints the function defined as string
console.log('---- line 29 ---- '); 
console.log('---- line 30 ---- '+func2()); // returns 2
console.log('---- line 31 ---- '); 
console.log(func2) ;

console.log('---- line 34 ---- '+ var1);  // ReferenceError: var1 is not defined
let var1 = 22;

let x1;
console.log('The value of x is ' + x1); // The value of x1 is undefined

var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;




//Function declarations in JavaScript

