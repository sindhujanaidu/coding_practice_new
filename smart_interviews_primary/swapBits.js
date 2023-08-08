// https://www.hackerrank.com/contests/smart-interviews/challenges/si-swap-bits/problem

// bit manip

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
 * Complete the 'RepeatedNumber' function below.
 */


const one = BigInt(1);
const zero = BigInt(0);
const maxBit = BigInt(32);
const mod = BigInt(1000000007);

function checkBit(n, i) {
    return (n>>i) & one;
}

function swapBits(num) {
    // Write your code here
    let second, first;
    let ans = 0;
    let ind = 0;
    while (num>0) {
        first = (num & 1);
        second = (num >> 1) & 1;
        ans = ans | (second<<ind);
        ans = ans | (first<<(1+ind));
        ind += 2;
        num = num >> 2;
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const num = parseInt(readLine());
        const result = swapBits(num);
        ws.write(result + '\n');
    }
    ws.end();
}
