// https://www.hackerrank.com/contests/smart-interviews/challenges/si-largest-concatenated-number


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
 * Complete the 'largestConcatenatedNum' function below.
 */

// ================= SOLUTION 1 using string + int comparision with sort builtin
function largestConcatenatedNum(arr, len) {
    return arr.sort((a,b) => parseInt(String(a) + String(b)) < parseInt(String(b) + String(a)) ? 1 : -1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().trim().split(" ").map(a=>parseInt(a));
        const result = largestConcatenatedNum(arr, len);
        ws.write(result.join("") + '\n');
    }
    ws.end();
}
