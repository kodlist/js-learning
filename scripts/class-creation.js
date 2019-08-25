/*The class expression is one way to define a class in ECMAScript 2015. 
Similar to function expressions, class expressions can be named or unnamed.
 If named, the name of the class is local to the class body only. JavaScript classes use prototype-based inheritance.*/


//syntax:
/*
var MyClass = class [className] [extends] {
  // class body
};
*/


 var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}

console.log(new Rectangle(5,8).area());
// expected output: 40
console.log(Rectangle.name);

var Foo = class {}; // constructor property is optional
var Foo = class {}; // Re-declaration is allowed

console.log(Foo instanceof Object); // true
console.log(Foo instanceof Function); // true

//class Foo {}; // Throws TypeError, doesn't allow re-declaration



/* Named class expressions */
/*
	If you want to refer to the current class inside the class body, you can create a named class expression. This name is only visible in the scope of the class expression itself.
*/
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
var bar = new Foo();
console.log(' ---- line 49 ---- ' + bar.whoIsThere()); // "NamedFoo"


console.log(NamedFoo.name); // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"