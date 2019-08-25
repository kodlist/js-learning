//Semicolons in JavaScript




//Required: When two statements are on the same line

var i = 0; i++        // <-- semicolon obligatory
                      //     (but optional before newline)
var i = 0             // <-- semicolon optional
    i++               // <-- semicolon optional

//The semicolon in JavaScript is used to separate statements, but it can be omitted if the statement is followed by a line break (or there’s only one statement in a {block}). 

//Optional: After statements
var i;                        // variable declaration
i = 5;                        // value assignment
i = i + 1;                    // value assignment
i++;                          // same as above
var x = 9;                    // declaration & assignment
var fun = function() {};   // var decl., assignmt, and func. defin.
alert("hi");                  // function call


//Avoid!
//1. After a closing curly bracket

// NO semicolons after }:
if  (/*...*/) {/*...*/} else {/*...*/}
for (/*...*/) {/*...*/}
while (/*...*/) {/*...*/}

// BUT:
do {/*...*/} while (/*...*/);

// function statement: 
function (arg) { /*do this*/ } // NO semicolon after }



//2. After the round bracket of an if, for, while or switch statement

// It won't harm to put a semicolon after the { } of an if statement (it will be ignored, and you might see a warning that it's unnecessary).
// But a semicolon where it doesn't belong (such as after the round  (brackets) of an if, for, while, or switch statement) is a very bad idea

if (0 === 1); { alert("hi") }

// equivalent to:

if (0 === 1) /*do nothing*/ ;
alert ("hi");

//This code will alert "hi", but not because 0 equals 1,
// but because of the semicolon. It makes JavaScript think that you have an empty statement there, 
//and everything to the right of it is treated as no longer belonging to the if conditional and thus independent of it.


for (var i=0; i < 10; i++)  {/*actions*/}       // correct
for (var i=0; i < 10; i++;) {/*actions*/}       // SyntaxError

//How to fix your semicolons

//The JavaScript syntax proofing tool JSLint, which is built into the Codecademy code editor, does a pretty good job of finding unnecessary semicolons – or missing ones.