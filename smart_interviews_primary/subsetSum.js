// https://www.hackerrank.com/contests/smart-interviews/challenges/si-subset-sum/problem

// bit manipulation

// only 20 points - 1 test case timedout
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

const one = BigInt(1);
const zero = BigInt(0);
const maxBit = BigInt(32);
const mod = BigInt(1000000007);

function checkBit(n, i) {
    return (n>>i) & 1;
}
/*
 * Complete the 'subsetSum' function below.
 */

function subsetSum(arr, len, targetSum) {
    // Write your code here
    let ans = 0, res;
    for(let i=0; i<(1<<len); i++) {
        let sum = 0;
        for(let j=0; j<len; j++) {
            if(checkBit(i,j)) {
                sum = sum + arr[j];
            }
        }
        if(sum == targetSum) return "YES";
    }
    return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    for(let i = 0; i<T; i++) {
        const [len, targetSum] = readLine().split(" ").map(e => parseInt(e));
        const arr = readLine().replace(/\s+$/g, '').split(" ").map(e => parseInt(e));
        const result = subsetSum(arr, len, targetSum);
        ws.write(result + '\n');
    }
    ws.end();
}
