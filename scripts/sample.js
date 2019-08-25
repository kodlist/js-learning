function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// expected output: "Eagle"

console.log(Car.name);

var v1 = { key1 : 'val1'};
console.log(v1.name);
console.log(' ---- line 16 --- '+v1.key1);
var v2 =  { 'key1' : 'val2'};
console.log(v2.key1)