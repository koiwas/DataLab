// strict mode
'use strict';

// =
let num = 1;
let str = '1';
console.log(num == str); // true
console.log(num === str); // false

// &&
console.log(true && true); // true
console.log(true && false); // false

// ||
console.log(true || false); // true
console.log(false || false); // false

// !
console.log(!true); // false

let hasDriverLicense = true;
let hasGoldLicense = true;

if (hasDriverLicense && hasGoldLicense) {
    console.log('You are a good driver!!!');
}

// ternary operator
let age = 20;
let beverage = (age >= 20) ? 'ビール' : 'コーラ'
console.log(beverage)

// if
let score = 80;

if (score >= 80) {
    console.log('your score is A');
} else if (score >= 60) {
    console.log('your score is B');
} else {
    console.log('your score is C');
}

// nested if
let number = 6;

if (number % 2 ===0) {
    if (number % 3 === 0) {
        console.log(`${number}は2かつ3の倍数です`);
    } else {
        console.log(`${number}は2の倍数です`)
    }
} else if (number % 3 === 0) {
    console.log(`${number}は3の倍数です`)
} else {
    console.log(`${number}は2の倍数でも3の倍数でもありません`)
}

if ((number % 2 === 0) && (number % 3 === 0)) {
    console.log(`${number}は2かつ3の倍数です`);
} else if (number % 2 === 0) {
    console.log(`${number}は2の倍数です`);
} else if (number % 3 === 0) {
    console.log(`${number}は3の倍数です`);
} else {
    console.log(`${number}は2の倍数でも3の倍数でもありません`);
}

// switch
let rank = 5;

switch (rank) {
    case 1:
        console.log('You are No.1');
        break;
    case 2:
        console.log('You are No.2');
        break;
    case 3:
        console.log('You are No.3');
        break;
    default:
        console.log('You are out of rank');
        break;
}

// summary
let result = Math.floor(Math.random() * 5) + 1;

switch (result) {
    case 1:
        console.log('大吉');
        break;
    case 2:
        console.log('中吉');
        break;
    case 3:
        console.log('小吉');
        break;
    case 4:
        console.log('吉');
        break;
    case 5:
        console.log('凶');
        break;
    default:
        console.log('不正な値です');
        break;
}
