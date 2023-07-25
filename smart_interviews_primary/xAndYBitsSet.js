//https://www.hackerrank.com/contests/smart-interviews/challenges/si-x-and-y-set-bits/problem

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
 * Complete the 'xOneAndYOne' function below.
 */

function xOneAndYOne(x, y) {
    // Write your code here
    const one = BigInt(1);
    const mod = BigInt(1000000007);
    return ((one<<x)| (one<<y)) % mod;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<T; i++) {
        const [x, y] = readLine().replace(/\s+$/g, '').split(" ").map(e => BigInt(e));
        const result = xOneAndYOne(x, y);
        ws.write(result + '\n');
    }
    ws.end();
}
