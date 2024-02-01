// strict mode
'use strict';

// for
// for(初期化; 条件; 式)
for(let i = 1; i <= 3; i++) {
    console.log(i);
}

let arr = ['a', 'b', 'c'];
// for(let i = 0; i < 3; i++) {
//     console.log(arr[i]);
// }
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// nesting
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

const scores = [
    [100, 99, 98],
    [90, 89, 88],
    [80, 79, 78]
];

// console.log(scores[0][0]);
for(let i = 0; i < scores.length; i++) {
    for(let j = 0; j < scores[i].length; j++) {
        console.log(scores[i][j]);
        }
}

// while --> 条件によっては1回も実行しない
let i = 1;
while(i <= 3) {
    console.log(i);
    i++;
}

let j = 4;
while(j <= 10) {
    console.log(j);
    if(j === 6) {
        break;
    }
    j++;
}

// do while --> 条件に関わらず最低1回実行
let k = 1;
do {
    console.log(k);
    k++;
} while(k <= 3);

// forEach
let colors = ['Red', 'Blue', 'Green'];
// for(i = 0; i < 3; i++) {
//     console.log(colors[i]);
// }
colors.forEach(function(color) {
    console.log(color);
})

// for...of
const foods = ['apple', 'banana', 'kiwi'];
for(const food of foods) {
    console.log(food);
}

// summary
function calcScore(score_list) {
    let total = 0;
    // total score
    for(let i = 0; i < score_list.length; i++) {
        total += score_list[i]
    }
    // average score
    let average = total / score_list.length

    console.log(`total score is ${total}`);
    console.log(`average score is ${average}`);
}

let testScores = [100, 90, 80, 70, 60];
calcScore(testScores);
