// https://www.hackerrank.com/contests/smart-interviews/challenges/si-x-1s-and-y-0s/problem

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
 * Complete the 'xOnesAndYZeros' function below.
 */

function xOnesAndYZeros(x, y) {
    // Write your code here
    // solution 1
    const one = BigInt(1);
    return ((one<<(x+y))-(one<<y)) % BigInt(1000000007);
    // solution 2
    // return ((1<<x)-1)<<y;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<T; i++) {
        const [x, y] = readLine().replace(/\s+$/g, '').split(" ").map(e => BigInt(e));
        const result = xOnesAndYZeros(x, y);
        ws.write(BigInt(result) + '\n');
    }

    // ws.write(res.join('\n') + '\n');

    ws.end();
}
