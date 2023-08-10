// hacker rank primary - base code

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
 * Complete the 'subsetsOfArray' function below.
 */


const one = BigInt(1);
const zero = BigInt(0);
const maxBit = BigInt(32);
const mod = BigInt(1000000007);

function checkBit(n, i) {
    return (n>>i) & one;
}

function countBits(n, i) {
    let count = 0;
    while(n>zero) {
        if(checkBit(n, zero) == one) {
            count++;
        }
        n = n >> one;
    }
    return count;
}

function f(arr, len) {
    // Write your code here
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().trimEnd().split(" ").map(e => parseInt(e));
        const res = f(arr, len);
        
        ws.write(res+"\n");
    }
    ws.end();
}
