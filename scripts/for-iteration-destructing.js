

// for loop

//Syntax: 
/*
for (variable of iterable) {
  statement
}
*/

//variable :

 // On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

function* foo(){
  yield 1;
  yield 2;
}

for (let o of foo()) {
  console.log(o);
  // expected output: 1

  break; // closes iterator, triggers return
}

//You can use const instead of let too


//Iterating over a String
let iterable1 = 'boo';

for (let value of iterable1) {
  console.log(value);
}
// "b"
// "o"
// "o"



/***********************************************************/
//For of iteration and destructuring

var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"