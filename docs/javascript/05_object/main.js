// strict mode
'use strict';

// basic
let user1 = new Object();
user1.name = 'Taro Yamada';
user1.gender = 'man';
user1.birthyear = 1990;

console.log(user1);

user1.prefecture = 'Kanagawa';
console.log(user1);

// initializer
let user2 = {name: 'Hanako Tanaka', gender: 'female', birthyear: '1992'};
console.log(user2)

user2['prefecture'] = 'Tokyo'
console.log(user2)

// dot nation
console.log(user1.name);

// bracket nation
console.log(user2['name']);

// count
console.log(Object.keys(user1).length);

// get key
let keys =  Object.keys(user1);
console.log(keys);

// merge
let obj1 = {a:1, b:2, c:3};
let obj2 = {d:4, e:5, f:6};
let mergedObj = Object.assign(obj1, obj2);

console.log(mergedObj);

// method
let user3 = {
    name: 'Taro',
    gender: 'man',
    birthyear: 1990,
    calcAge: function(thisYear) {
        // console.log(this);
        return thisYear - this.birthyear;
    }
}
console.log(user3.calcAge(2021));
