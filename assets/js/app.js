"use strict";

const a = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7];
const c = [8, 9, 10];
const d = [1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11]];

// Reverse the Array
const reverseArr = function (arr) {
    let b = [];
    for (let item = arr.length - 1; item >= 0; item--) {
        b.push(arr[item]);
    }
    console.log("Reverse =>", b);
};
reverseArr([1, 2, 3, 4, 5, 6, 7]);

//Merge the Arrays
const mergeArr = function (arr1, arr2, ...others) {
    console.log("Merge =>", [...arr1, ...arr2, ...others]);
};
mergeArr([1, 2, 3, 4, 5], [6, 7, 8, 9], 10);

//Unique the array
const uniqueArr = function (arr) {
    console.log("Unique =>", [...new Set(arr)]);
};
uniqueArr(a);

//Flat array
const flatArr = function (arr) {
    const flat = [];
    for (const i of arr) {
        if (Array.isArray(i)) {
            flat.push(...i);
        } else {
            flat.push(i);
        }
    }
    console.log("Flat =>", flat);
};
flatArr(d);

//Frequency array
const frequencyArr = function (arr, i) {
    let count = 0;
    const frequence = arr[i];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === frequence) {
            count++;
        }
    }
    console.log(`Frequence => ${arr} | Count of ${i} : ${count}`);
};
frequencyArr(a, 6);
