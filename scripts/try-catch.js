try {
  nonExistentFunction();
}
catch(e) {
  console.log(' catch error ');
  console.error('inner', e.message);
  //console.error(e);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}


/*try {
  nonExistentFunction();
}
finally {
	console.log('--------===========-----------');
  console.log('finally..........')
  console.log('--------===========-----------');
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}*/