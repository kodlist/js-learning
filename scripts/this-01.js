

// this : the myth in javascript

//To set the value of this to a particular value when calling a function, use call(), or apply()

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called.. if you remove this keyword in this function. you will see diff output
}

console.log(whatsThis());          // 'Global' // it will print 'Global' if you remove 'this' keyword inside the 'whatsThis()'
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom'