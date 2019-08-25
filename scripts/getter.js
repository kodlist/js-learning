

//The get syntax binds an object property to a function that will be called when that property is looked up.

var obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length == 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
}

console.log(obj.latest);
// expected output: "c"

//Syntax
//{get prop() { ... } }
//{get [expression]() { ... } }

// - prop
// The name of the property to bind to the given function.

// - expression
// Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.


// Examples:
//Defining a getter on new objects in object initializers

//This will create a pseudo-property latest for object obj, which will return the last array item in log
var obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test".


//If you want to remove the getter, you can just delete it:
delete obj.latest;
console.log(obj.latest);

//To append a getter to an existing object later at any time, use Object.defineProperty().
var o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)


