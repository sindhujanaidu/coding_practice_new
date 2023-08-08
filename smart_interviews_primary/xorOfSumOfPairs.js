// https://www.hackerrank.com/contests/smart-interviews/challenges/si-xor-of-sum-of-pairs/problem

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

function xorOfSumOfPairs(arr, len) {
    // Write your code here
    let ans = 0;
    for(let i =0; i<len; i++) {
        ans = ans ^ arr[i]
    }
    return 2*ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().split(" ").map(e =>parseInt(e));
        const result = xorOfSumOfPairs(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
