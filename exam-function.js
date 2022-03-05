"use strict";

const test = [1, 1, 2, 3, 5, 8];

const test2 = [28, 23, 90, 17];

const test3 = [1,4,5,6,7,8,9,9,7,6,5,4,4,3,3,4,5,6];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const result1 = sumArray(test);

const result2 = sumArray(test2);

console.log(result1);
console.log(result2);
console.log(sumArray(test3));

