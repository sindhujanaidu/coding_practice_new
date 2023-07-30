// https://www.hackerrank.com/contests/smart-interviews/challenges/si-lcm-and-hcf/problem

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
 * Complete the 'getGCD' function below.
 */

function getGCD(a, b) {
    // Write your code here
    if (a == 0)
        return b;
    return getGCD(b % a, a);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    const res = [];
    for(let i = 0; i<T; i++) {
        const [a, b] = readLine().split(" ").map(e=> BigInt(e));
        const gcd = getGCD(a, b);
        const lcm = (a * b) / gcd;
        ws.write(lcm + " " + gcd + '\n');
    }
    ws.end();
}
