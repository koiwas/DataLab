// strict mode
'use strict';

// literal
console.log(12345); // 数値リテラル
console.log('12345'); // 文字列リテラル

// type
console.log(typeof 12345);
console.log(typeof '12345');

console.log('123' + 456) // string + number = string
console.log(Number('123') + 456) // string -> number + number = number

// variable var->let
let myColor = 'red';
console.log(myColor); // camelCase

myColor = 'blue';
console.log(myColor);

// let color = 'yellow'; // SyntaxError: Identifier 'color' has already been declared

// constant
const TAX_RATE = 10; // snake_case
console.log(TAX_RATE);
// TAX_RATE = 3.1415; // TypeError: Assignment to constant variable.

// template literal
let lastName = 'shiba';
let firstName = 'taro';
let message1 = 'こんにちは! ' + lastName + ' ' + firstName + ' ' + 'さん';
console.log(message1);

let message2 = `こんにちは! ${lastName} ${firstName} さん`;
console.log(message2);

// operator
let num = 1;

num++; // num += 1
console.log(num);

num--; // num -= 1
console.log(num);

// summary
let weight = 60;
let height = 1.7;
let bmi = weight / (height * height);
console.log(bmi);
