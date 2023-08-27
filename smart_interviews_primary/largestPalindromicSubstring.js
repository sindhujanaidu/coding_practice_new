// https://www.hackerrank.com/contests/smart-interviews/challenges/si-largest-palindromic-substring/problem


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
 * Complete the 'largestPalindromicSubstring' function below.
 */

function largestPalindromicSubstring(arr, p1, p2, n) {
    // Write your code here
    while((p1>=0) && (p2<n) && (arr[p1] == arr[p2])){
        p1--;
        p2++;
    }
    return p2-p1-1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const arr = readLine().trim().split("");
        let ans = 0;
        for(let j=0; j<len; j++) {
            ans = Math.max(ans, largestPalindromicSubstring(arr, j-1, j+1, len));
            ans = Math.max(ans, largestPalindromicSubstring(arr, j, j+1, len));
        }
        ws.write(ans + '\n');
    }
    ws.end();
}
