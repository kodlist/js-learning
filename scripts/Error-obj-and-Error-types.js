

//The Error Object

//JavaScript has a built in error object that provides error information when an error occurs.

//The error object provides two useful properties: name and message.



//Error Object Properties
//  property ---------------- // Description
//  name     ---------------- // Sets or returns an error name
//  message  ---------------- // Sets or returns an error message (a string)

//Error Name Values : Six different values can be returned by the error name property:

//Error Name	     Description
//EvalError          An error has occurred in the eval() function
//RangeError         A number "out of range" has occurred
//ReferenceError     A ReferenceError is thrown if you use (reference) a variable that has not been declared:
//SyntaxError        A SyntaxError is thrown if you try to evaluate code with a syntax error.
//TypeError          A TypeError is thrown if you use a value that is outside the range of expected types:
//URIError           An error in encodeURI() has occurred. A URIError is thrown if you use illegal characters in a URI function:




var num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}



try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

