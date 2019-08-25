

//Unpacking fields from objects passed as function parameter

var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userId( {id} ) {
  return id;
}

function whois( { displayName, fullName } ) {

	console.log(' displayname : '+displayName);
	console.log(fullName.firstName);
	console.log(user.fullName);
	//console.log('name '+ name);
	console.log('---- line 22 ----');
 // return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"




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
	console.log(fullName);
	console.log(fullName.firstName);
	console.log(userX.fullName);
	console.log('name '+ name);
  return `${displayName} is ${name}`;
}

console.log('-------------------')
console.log(userId_X(userX)); // 42
console.log(whois_X(userX));  // "jdoe is John"