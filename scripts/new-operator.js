/*The new operator lets developers create an instance of a user-defined object type or
  of one of the built-in object types that has a constructor function. The new keyword does the following things:

Creates a blank, plain JavaScript object;
Links (sets the constructor of) this object to another object;
Passes the newly created object from Step 1 as the this context;
Returns this if the function doesn't return its own object.*/



function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log('---- line 18 ----');
console.log(car1.make);
// expected output: "Eagle"


/// the above function Car(make, model, year) has been supressed by the below Car() function

function Car() {}
car2 = new Car();
car3 = new Car();
 
console.log(" ---- line 28 ---- "+car2.color);    // undefined
 
Car.prototype.color = "original color";
console.log(car2.color);    // original color
 
car2.color = 'black';
console.log(car2.color);   // black


function Bus(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

var bus1 = new Bus('Eagle', 'Talon TSi', 1993, 'rand');
console.log(bus1.owner)