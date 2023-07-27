// https://www.hackerrank.com/contests/smart-interviews/challenges/si-binary-representation/problem
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
 * Complete the 'binaryRepresentation' function below.
 */

function binaryRepresentation(num) {
    // Write your code here
    let binary = "";
    const two = BigInt(2);
    const one = BigInt(1);
    while(num > 0) {
        binary = (num % two) + binary;
        num = num >> one;
    }
    return binary || 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<T; i++) {
        const num = BigInt(readLine().trim(), 10);
        const result = binaryRepresentation(num);
        ws.write(result + '\n');
    }
    ws.end();
}
