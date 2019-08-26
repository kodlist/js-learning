


// JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside 
// the outer function (and all other variables and functions that the outer function has access to). 
// However, the outer function does not have access to the variables and functions defined inside the inner function.
// This provides a sort of encapsulation for the variables of the inner function. 

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer 
                             //function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');
   
console.log(myPet())

