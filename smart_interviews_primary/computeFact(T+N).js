// https://www.hackerrank.com/contests/smart-interviews/challenges/si-compute-factorial/problem

// time complexity

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
const mod = BigInt(1000000007);

/*
 * Complete the 'computeFactorial' function below.
 */

const Max = 1000000;

let fact = [];

function computeFactorial() {
    // Write your code here
    fact[0] = 1;
    for(let i=1; i<=Max; i++) {
        fact[i] = (fact[i-1] * i) % 1000000007;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    computeFactorial();
    for(let i = 0; i<T; i++) {
        const num = parseInt(readLine());
        ws.write(fact[num] + '\n');
    }
    ws.end();
}
