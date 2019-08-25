
//When using the same name for your properties, the second property will overwrite the first.
var a = {x: 1, x: 2};
console.log(a); // {x: 2}

//In ECMAScript 5 strict mode code, duplicate property names were considered a SyntaxError.

function haveES2015DuplicatePropertySemantics() {
  	'use strict';
 
    ({prop: 1, prop: 2});

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  
}

let bool1 = haveES2015DuplicatePropertySemantics();
console.log('---- line 19 ---- '+ bool1);

