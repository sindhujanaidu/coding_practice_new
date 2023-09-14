// https://www.hackerrank.com/contests/smart-interviews/challenges/si-closing-triplets


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
 * Complete the 'closingTriplets' function below.
 */

function closingTriplets(A, lenA, B, lenB, C, lenC) {
    // Write your code here
    let p1 = 0, p2 = 0, p3 = 0;
    let ans = 9999999999;
    while(p1<lenA && p2<lenB && p3<lenC) {
        let max = Math.max(A[p1], B[p2], C[p3]);
        let min = Math.min(A[p1], B[p2], C[p3]);
        ans =  Math.min(ans, max - min);
        if(A[p1] == min) {
            p1++;
        } else if(B[p2] == min) {
            p2++;
        } else {
            p3++;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const lenA = parseInt(readLine().trim());
        const A = readLine().trim().split(" ").map(e => parseInt(e)).sort((a,b) => a-b);
        const lenB = parseInt(readLine().trim());
        const B = readLine().trim().split(" ").map(e => parseInt(e)).sort((a,b) => a-b);
        const lenC = parseInt(readLine().trim());
        const C = readLine().trim().split(" ").map(e => parseInt(e)).sort((a,b) => a-b);
        let ans = closingTriplets(A, lenA, B, lenB, C, lenC);
        ws.write(ans + '\n');
    }
    ws.end();
}
