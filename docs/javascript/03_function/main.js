// strict mode
'use strict';

// function
function getRegtangle(height, width) {
    return height * width;
}

console.log(getRegtangle(3, 5));

// anonymous function
const calcRegtangle = function(height, width) {
    return height * width;
}

console.log(calcRegtangle(3, 5));

// arrow function

const Regtangle = (height, width) => {
    return height * width;
}

console.log(Regtangle(3, 5));

// function constructor
const get = new Function('height', 'width', 'return height * width');

console.log(get(3, 5));

// callback function

// #1
// const displaymessage = function() {
//     console.log('Timeout!')
// }

// setTimeout(displaymessage, 3000);


// #2
// function greeting(name) {
//     console.log(`Hello! ${name}-san.`)
// }

// function inputUserName(callback) {
//     let name = prompt('あなたのお名前を入力してください')
//     callback(name);
// }

// inputUserName(greeting);
