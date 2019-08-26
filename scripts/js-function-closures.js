

//Closures


function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();    
  return counter; 
}


console.log(add());
console.log(add());

//JavaScript Closures
//Remember self-invoking functions? What does this function do?
//A closure is a function having access to the parent scope, even after the parent function has closed.
//The variable add is assigned the return value of a self-invoking function.
//The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
//This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
//This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
//The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

var add1 = ( function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

console.log('----------')
console.log( (typeof add1 === 'function') );
console.log(add1());  // at this call, the return is inner function and counter is set to 1.
console.log(add1());  // at this call, here we call add1 which is actually holding inner function (from above line) and hence the counter is plus 1 so we have counter 2.
console.log(add1());  // here we call add1 which is actually holding inner function, // the counter is now 3

