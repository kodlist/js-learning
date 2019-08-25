

// static methods vs class object methods

/*The static keyword defines a static method for a class. 
Static methods aren't called on instances of the class. 
Instead, they're called on the class itself. 
These are often utility functions, such as functions to create or clone objects.*/

//Syntax:  static methodName() { ... }


class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());


//In order to call a static method within another static method of the same class, you can use the this keyword.
class StaticMethodCall {
  static staticMethod() {
    return 'Static method has been called A';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
console.log(StaticMethodCall.staticMethod()); 
// 'Static method has been called'

console.log(StaticMethodCall.anotherStaticMethod()); 
// 'Static method has been called from another static method'


/* ------------------------------------------ */
class StaticMethodCall_B {
  constructor() {
    console.log(StaticMethodCall_B.staticMethod()); 
    // 'static method has been called.' 

	//console.log(this.constructor.staticMethod()); 
   // console.log(this.staticMethod());  /// throws TypeError: this.staticMethod is not a function. uncomment the above line and comment this line and then execute.
    // 'static method has been called.' 
  }

  static staticMethod() {
    return 'static method has been called. B';
  }
}

new StaticMethodCall_B();


/*-----------------------------*/


/*
How a static method is implemented on a class.
That a class with a static member can be sub-classed.
How a static method can and cannot be called.
*/

class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)

console.log(tp.triple());   // 'tp.triple is not a function'. //TypeError: tp.triple is not a function