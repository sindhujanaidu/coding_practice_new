// https://www.hackerrank.com/contests/smart-interviews/challenges/si-flip-bits/problem

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
 * Complete the 'flippingBits' function below.
 */

function flippingBits(a, b) {
    // Write your code here
    let num = a ^ b;
    let count = 0;
     while(num > 0) {
        if((num & 1) == 1) {
            count++;
        }
        num = num >> 1;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<T; i++) {
        const [x, y] = readLine().replace(/\s+$/g, '').split(" ").map(e => parseInt(e, 10));
        const result = flippingBits(x, y);
        ws.write(result.toString() + '\n');
    }
    ws.end();
}
