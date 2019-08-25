//You cannot declare a constant with the same name as a function or variable in the same scope. 

// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// THIS WILL CAUSE AN ERROR TOO
function f() {
  const g = 5;
  var g;

  //statements
}

//However, the properties of objects assigned to constants are not protected, so the following statement is executed without problems.
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';


//Also, the contents of an array are not protected, so the following statement is executed without problems
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];



const z1 = 'mehar';
console.log('The value of z1 is ' + z1); // The value of x1 is undefined



//const z2;  // this fails SyntaxError: Missing initializer in const declaration

let z3 ;  // this doesnt fail
console.log('The value of z3 is ' + z3);

/*console.log('The value of z1 is ' + z1); // Uncaught ReferenceError: y1 is not defined
const z1;*/

  // this fails 
console.log('The value of z3 is ' + z4);
let z4 ;