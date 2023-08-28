// https://www.hackerrank.com/contests/smart-interviews/challenges/si-rearrange-sequence-2

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
 * Complete the 'rearrangeSequence3' function below.
 */

function rearrangeSequence3(arr, len) {
    // Write your code here
    let ans = 0;
    for(let i=0; i<len; i++) {
        let sum = 0, count = 0;
        let map = {};
        let a = Number.MAX_VALUE;
        let b = Number.MIN_VALUE;
        for(let j=i; j<len; j++) {
            if(arr[j] in map) {
                count++;
            } 
            else {
                sum += arr[j];
            }
            map[arr[j]] = 1;
            a = Math.min(a, arr[j]);
            b = Math.max(b, arr[j]);
            if(sum ==(((b*(b+1))/2) - ((a*(a-1))/2))) {
                ans = Math.max(ans, b-a+1+count);
            }
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e=>parseInt(e));
        const result = rearrangeSequence3(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
