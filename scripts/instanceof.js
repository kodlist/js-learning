

//Syntax: object instanceof constructor

// instanceof

// It is important that you use closed paranthesis for the expression or object that you would use in console.log.
// eg: console.log('--------'+ (o instanceof Object)); // true, because:  -- if you dont use paranthesis then you will get random result or unwanted result.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true



/*********************************************************/

// defining constructors
function C() {}
function D() {}

var o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
//o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
//o instanceof D;

console.log('--------'+ (o instanceof C)) ;
console.log('--------'+ (o instanceof D)) ;

console.log('-------- line 38 ---------');
console.log('--------'+ (o instanceof Object)); // true, because:
console.log('--------'+ (C.prototype instanceof Object)); // true

C.prototype = {};
var o2 = new C();

console.log('--------'+ (o2 instanceof C)); // true