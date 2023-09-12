// https://www.hackerrank.com/contests/smart-interviews/challenges/si-number-of-valid-subarrays


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
 * Complete the 'validSubArrays' function below.
 */

function validSubArrays(arr, len) {
    // Write your code here
    let map = {}, ans = 0, sum = 0, count = 0;
    for(let i=0; i<len; i++) {
        sum = sum + (arr[i] == 0 ? -1 : 1);
        if(sum == 0) {
            count++;
        }
        if(sum in map) {
            count += map[sum];
            map[sum] += 1;
        } else {
            map[sum] = 1;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = validSubArrays(arr, len);
        ws.write(ans + '\n');
    }
    ws.end();
}
