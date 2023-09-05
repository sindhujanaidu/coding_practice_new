// https://www.hackerrank.com/contests/smart-interviews/challenges/si-sum-of-subarrays


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sumOfSubArrays' function below.
 */

function sumOfSubArrays(arr, a, b) {
    // Write your code here
    //from cum sum array you can just find sum of indices using below formula
    return a == 0? arr[b] : arr[b]-arr[a-1];
}

// find cumulative sum array
function getCumSum(arr) {
    let res = [];
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
        res.push(sum);
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    const arr = readLine().trim().split(" ").map(e => parseInt(e));
    const cum_sum = getCumSum(arr);
    const Q = parseInt(readLine().trim());
    for(let j=0; j<Q; j++) {
        const [a, b] = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = sumOfSubArrays(cum_sum, a, b);
        ws.write(ans + '\n');
    }
    ws.end();
}
