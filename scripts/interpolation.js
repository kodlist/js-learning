

// interpolation in js using ${}

var obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


//example-2:

/***************************************************************/

var userX = {
  id: 44,
  displayName: 'jxy',
  fullName: {
    firstName: 'Jeff',
    lastName: 'Doe'
  }
};

function userId_X({id}) {
  return id;
}

function whois_X({displayName, fullName: {firstName: name}}) {

	console.log(' displayname : '+displayName);
	//console.log(fullName);
	//console.log(fullName.firstName);
	console.log(userX.fullName);
	console.log('name '+ name);
  return `${displayName} is ${name}`;
}

console.log('-------------------')
console.log(userId_X(userX)); // 44
console.log(whois_X(userX));  // "jdoe is John"


/***************************************************************/


//example-3

//The following function illustrates the use of hasOwnProperty(): the inherited properties are not displayed.
console.log('example-3.............')
var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  } 
}

// Output:
// "obj.color = red"