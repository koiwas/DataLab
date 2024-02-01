// strict mode
'use strict';

// array
let arr = ['Red', 'Green', 'Blue'];
console.log(arr);
console.log(arr[0]);

console.log(arr.length);
console.log(arr[arr.length - 1]);

// array operation
let colors = ['Red', 'Green', 'Blue'];

// append to end
colors.push('Black');
console.log(colors);

// append to start
colors.unshift('White');
console.log(colors);

// update
colors[1] = 'Aka'
console.log(colors);

// insert
let insertArr = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'B');
console.log(insertArr);

// delete
insertArr.splice(1, 1);
console.log(insertArr);

// delete begining
insertArr.shift();
console.log(insertArr);

// delete ending
insertArr.pop();
console.log(insertArr);

// merge
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = arr1.concat(arr2)
console.log(mergedArr)
