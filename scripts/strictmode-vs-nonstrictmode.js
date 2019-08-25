// strict mode vs non-strict mode


//Strict mode for scripts

//'use strict';
var v = "Hi! I'm a strict mode script!";
console.log(v = 'mehar');
console.log(v);

'use strict';
var v1 ;
console.log(v1);
console.log(v1 = 'mehar');

'use strict';
mistypeVariable = 17;
console.log(mistypeVariable);

// Assignment to a getter-only property
'use strict';
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError
console.log(obj2.x)

console.log(v4)
let v4 ;