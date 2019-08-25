

// operators precendence

// * has precendence over addition

console.log(1 + 2 * 3); // 1 + 6
// expected output: 7

var a = 1;
var b = 2;
var c = 3;

// default precedence
var v1 = a + b * c     // 7
console.log(v1);
// evaluated by default like this
var v2 = a + (b * c)   // 7
console.log(v2);

// now overriding precedence 
// addition before multiplication   
var v3 = (a + b) * c   // 9
console.log(v3);


var a = 6;
var b = 2;

var v4 = c + a / b ;
console.log(v4 );

var v5 = a % b;
console.log(v5 )