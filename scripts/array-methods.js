

//toString()
//The join() method also joins all array elements into a string.
//The pop() method removes the last element from an array:
//The push() method adds a new element to an array (at the end):
//The shift() method removes the first array element and "shifts" all other elements to a lower index. Shifting is equivalent to popping, working on the first element instead of the last.
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// delete(): JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
//The splice() method can be used to add new items to an array:
//The concat() method creates a new array by merging (concatenating) existing arrays:
//The slice() method slices out a piece of an array into a new array. The slice() method creates a new array. It does not remove any elements from the source array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined


var i;
var text = "";
for (i = 0; i < fruits.length; i++) {
  text += fruits[i] + " ";
}

console.log(' text :  ', text);


////The splice() method can be used to add new items to an array:
////The first parameter (2) defines the position where new elements should be added (spliced in).
////The second parameter (0) defines how many elements should be removed.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");


//Bad:
var i;
for (i = 0; i < arr.length; i++) { }

//Better Code:
var i;
var l = arr.length;
for (i = 0; i < l; i++) { }