// https://www.hackerrank.com/contests/smart-interviews/challenges/si-sum-of-or-of-subarrays


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

function checkBit(n, i) {
    return (n>>i) & 1;
}

/*
 * Complete the 'sumOfOrOfSubarrays' function below.
 */

function sumOfOrOfSubarrays(n, arr) {
    // Write your code here
    let ans = 0;
    for(let b = 0; b<31; b++) {
        let s = 0;
        for(let i=0; i<n; i++) {
             s++;
            // console.log(checkBit(arr[i], b), s)
            if(checkBit(arr[i], b) == 1) {
                // console.log(checkBit(arr[i], b))
                ans = ans + ((n-i)*s*(1<<b))
                s = 0;
            } else {
                // s++;
            }
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        // console.log(arr)
        let ans = sumOfOrOfSubarrays(n, arr);
        ws.write(ans + '\n');
    }
    ws.end();
}
