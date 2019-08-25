//The set syntax binds an object property to a function to be called when there is an attempt to set that property.


var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// expected output: Array ["EN", "FA"]


//Syntax:

//{set prop(val) { . . . }}
//{set [expression](val) { . . . }}


// - prop
// The name of the property to bind to the given function.

// - val
// An alias for the variable that holds the value attempted to be assigned to prop.

// - expression
// Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.


//If you want to remove the setter, you can just delete it:
delete language.current;

//Defining a setter on existing objects using defineProperty
//To append a setter to an existing object later at any time, use Object.defineProperty().
var o = {a: 0};

Object.defineProperty(o, 'b', { set: function(x) { this.a = x / 2; } });

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5