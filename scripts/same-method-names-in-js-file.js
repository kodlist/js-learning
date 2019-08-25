

function method_1() { 
   
    return true;  
}
let bool2= method_1();

console.log('---- line 8 ---- '+ bool2);

function method_1() { 
   
    return false;  
}
let bool3= method_1();
console.log('---- line 15 ---- '+ bool3);


// comment below method until line 25 and see the output of above two methods. this is totally diff to Java.
function method_1(a, b) { 
   
    return a + b;  
}
let out1 = method_1(2,3);
console.log('---- line 15 ---- '+ out1);



function method_2(a, b) { 
   
    return a + b;  
}
let out2 = method_2(2,3);
console.log('---- line 15 ---- '+ out2);

function method_2(a, b, c) { 
   
    return a + b + c;  
}
let out3 = method_2(2,3, 4);
console.log('---- line 15 ---- '+ out3);




