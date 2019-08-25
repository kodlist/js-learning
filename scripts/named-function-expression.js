

//If you want to refer to the current function inside the function body, you need to create a named function expression.


var math = {
  'factit': function factorial(n) {
    console.log(n)
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
};

let output = math.factit(3) //3;2;1;

console.log('---- line 18 ---- '+ output);



/* The variable the function expression is assigned to will have a name property */

var foo = function() {}
foo.name // "foo"

console.log('---- line 25 ----'+ foo.name);

var foo2 = foo
foo2.name // "foo"

var bar = function baz() {}
bar.name // "baz"

console.log(foo === foo2); // true
console.log(typeof baz); // undefined
//console.log(bar === baz); // false (errors because baz == undefined)