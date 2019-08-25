

//Using extends

//syntax: class ChildClass extends ParentClass { ... }

//The extends keyword can be used to subclass custom classes as well as built-in objects.

//The .prototype of the extension must be an Object or null.

class Polygon{

	 constructor(length1, length2) { }

}
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';

    this.height = length;
    this.width = length;
  }

   area() {
    return this.height * this.width;
  }
}

console.log(new Square(2).area());

//Using extends with built-in objects : This example extends the built-in Date object.

class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log(this.getMonth());
    return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
  }
}

console.log(new myDate().getFormattedDate());

///Extending null
//Extending from null works like with a normal class, except that the prototype object does not inherit from Object.prototype.
/*class nullExtends extends null {
  constructor() {}
}*/

/*Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype) // null

new nullExtends(); //ReferenceError: this is not defined*/