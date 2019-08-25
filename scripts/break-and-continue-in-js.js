

//The break statement "jumps out" of a loop.

//The continue statement "jumps over" one iteration in the loop.



var text ;
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { 
  	break;
  	 }
  text += " " + i ;
}
console.log( text )

//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

//This example skips the value of 3:

var text1 ;
var i1;
for (i1 = 0; i1 < 10; i1++) {
  if (i1 === 3) {
   continue; 
 }
  text1 += " " + i1 + " ";
}

console.log( text1 )