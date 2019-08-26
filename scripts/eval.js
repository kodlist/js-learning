



// /The eval() function evaluates JavaScript code represented as a string.
// eval() is a function property of the global object.

//The argument of the eval() function is a string. If the string represents an expression, eval() evaluates the expression.
// If the argument represents one or more JavaScript statements, eval() evaluates the statements. 
//Do not call eval() to evaluate an arithmetic expression; JavaScript evaluates arithmetic expressions automatically.


// Syntax: eval(string)



console.log(eval('2 + 2'));     //// returns 4
// expected output: 4

console.log(eval(new String('2 + 2')));  //// returns a String object containing "2 + 2"
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false



///Do not ever use eval!

//eval() is a dangerous function, which executes the code it's passed with the privileges of the caller.

//Bad code with eval:

function looseJsonParse1(obj){
    return eval(obj);
}
console.log(looseJsonParse1(
   "{a:(4-1), b:function(){}, c:new Date()}"
))

//Better code without eval:
function looseJsonParse2(obj){
    return Function('"use strict";return (' + obj + ')')();
}
console.log(looseJsonParse2(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
