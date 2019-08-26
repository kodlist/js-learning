

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

console.log(' ---- line 10 '+ (typeof multiply(2, 1, 2, 3) === 'Map') )

console.log(' ---- line 10 '+ (typeof multiply(2, 1, 2, 3) === 'object') )