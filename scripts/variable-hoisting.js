

//You can declare a variable in two ways:

var x = 42 ;

//This syntax can be used to declare both local and global variables, depending on the execution context.

//With the keyword const or let
let y = 13 ; //This syntax can be used to declare a block-scope local variable.



//You can also simply assign a value to a variable For example, x = 42. This form creates an undeclared global variable.
 x = 42 ;
//It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.


//****************************** Variable hoisting start ******************************//

//Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception. 
//This concept is known as hoisting; variables in JavaScript are in a sense "hoisted" or lifted to the top of the function or statement.
// However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.


/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
(function() {
  console.log(' line 39  : '+myvar); // undefined
  var myvar = 'local value';
})();


(function() {
  console.log(' line 45  : '+myvar); // undefined
  //var myvar = 'local value';   // if you comment this line you get myvar as 'my value'
})();


function logname(){
  console.log(' line 51 : '+myvar); // undefined
  var myvar = 'local value'; // if you comment this line you get myvar as 'my value'
}

logname();


//The above examples will be interpreted the same as below:


/**
 * Example 1
 */
var x;   //see line 29 and 30 
console.log(x === undefined); // true
x = 3;
 
/**
 * Example 2
 *  
 * see line 36 to 41 
 *
 */
var myvar = 'my value';
 
(function() {
  var myvar;
  console.log("line 78 : "+myvar); // undefined
  myvar = 'local value';
})();


//**************************  Variable hoisting done ********************************//

