


openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
}
finally {
  closeMyFile(); // always close the resource
}

//Returning from a finally block
(function() {
  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
      return;
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
})();