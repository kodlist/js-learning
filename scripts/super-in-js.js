
//Syntax:

/*
* 	super([arguments]); // calls the parent constructor.
	super.functionOnParent([arguments]);
*
*/

/*
	When used in a constructor, 
	the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.
*/

//Using super in classes

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
  	super(length, length);
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
  /*sayName() {
    console.log('Hi, I am a ', this.name + ' mehar.');
  }*/
}

var rec1 = new Square(2);

rec1.sayName();

var rec2 = new Rectangle(2); // it is ok even if given one parameter in constructor and js won't complain/

rec2.sayName();