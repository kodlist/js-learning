


//Remember: JavaScript counts positions from zero. First position is 0.
//If a parameter is negative, the position is counted from the end of the string.

//This example slices out a portion of a string from position -12 to position -6:

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);

//If you omit the second parameter, the method will slice out the rest of the string:

//substring() is similar to slice().

//The difference is that substring() cannot accept negative indexes.
//If you omit the second parameter, substring() will slice out the rest of the string.


//substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part.

//The replace() method does not change the string it is called on. It returns a new string.

//A string is converted to upper case with toUpperCase():
//A string is converted to lower case with toLowerCase():
//concat() joins two or more strings:

//The concat() method can be used instead of the plus operator. These two lines do the same:
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");


//The trim() method removes whitespace from both sides of a string:


var str = "HELLO WORLD";
str.charAt(0);            // returns H

var str = "HELLO WORLD";

str.charCodeAt(0);         // returns 72


var str = "HELLO WORLD";
str[0];                   // returns H



//Converting a String to an Array
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt = "I can eat bananas all day";
var x = txt.slice( 10 , 17);

console.log( x );
console.log( x[0] );
console.log( x.length );