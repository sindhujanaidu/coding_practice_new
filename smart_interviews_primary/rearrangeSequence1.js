// https://www.hackerrank.com/contests/smart-interviews/challenges/si-rearrange-sequence-1

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
 * Complete the 'rearrangeSequence1' function below.
 */

function rearrangeSequence1(arr, len) {
    // Write your code here
    let ans = 0;
    for(let i=0; i<len; i++) {
        let a = Number.MAX_VALUE;
        let b = Number.MIN_VALUE;
        for(let j=i; j<len; j++) {
            a = Math.min(a, arr[j]);
            b = Math.max(b, arr[j]);
            if((b-a) ==(j-i)) ans = Math.max(ans, b-a+1)
        }
    }
    return ans;
}

// SOLUTION 2
function rearrangeSequence1(arr, len) {
    // Write your code here
    let ans = 0;
    for(let i=0; i<len; i++) {
        let sum = 0;
        let a = Number.MAX_VALUE;
        let b = Number.MIN_VALUE;
        for(let j=i; j<len; j++) {
            sum += arr[j]
            a = Math.min(a, arr[j]);
            b = Math.max(b, arr[j]);
            if(sum ==(((b*(b+1))/2) - ((a*(a-1))/2))) {
                ans = Math.max(ans, b-a+1);
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
        const result = rearrangeSequence1(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
