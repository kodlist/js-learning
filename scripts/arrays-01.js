//An array is a single object that contains multiple values enclosed in square brackets and separated by commas. 

let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;

console.log(shopping)

let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];

console.log(random[2][3])

let myVariable = [1,'Bob','Steve',10];


//Converting between strings and arrays

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
//myArray;

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray.push('Cardiff');

console.log(myArray);
myArray.push('Bradford', 'Brighton');

console.log(myArray);
//You can also go the opposite way using the join() method. Try the following:
let myNewString = myArray.join(',');
console.log(myNewString);

//to add or remove an item at the end of an array we can use push() and pop() respectively.

//unshift() and shift() work in exactly the same way as push() and pop(), respectively, except that they work on the beginning of the array, not the end.