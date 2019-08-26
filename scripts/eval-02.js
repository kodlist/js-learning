


var x = 2;
var y = 39;
var z = '42';
console.log(' ---- line 7 '+ (eval('x + y + 1'))); // returns 42
console.log(' ---- line 8 '+ (eval(z))) ;           // returns

var x1 = 5;
var str = "if (x1 === 5) {  console.log('z is 42'); z = 42;} else z = 0;"   ;

console.log('z is ', eval(str));