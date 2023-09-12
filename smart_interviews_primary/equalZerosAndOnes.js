// https://www.hackerrank.com/contests/smart-interviews/challenges/si-equal-0s-and-1s


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
 * Complete the 'subArrayWithEqual0And1' function below.
 */

function subArrayWithEqual0And1(arr, len) {
    // Write your code here
    let map = {}, ans = -1000, sum = 0;
    for(let i=0; i<len; i++) {
        sum = sum + (arr[i] == 0 ? -1 : 1);
        if(sum == 0) ans = Math.max(ans, i+1);
        if(sum in map) {
            // console.log
            ans = Math.max(ans, i - map[sum]);
        } else {
            map[sum] = i;
        }
    }
    return ans == -1000 ? 0 : ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = subArrayWithEqual0And1(arr, len);
        ws.write(ans + '\n');
    }
    ws.end();
}
