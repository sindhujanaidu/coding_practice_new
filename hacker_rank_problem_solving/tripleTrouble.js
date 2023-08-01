// https://www.hackerrank.com/contests/smart-interviews/challenges/si-triple-trouble/problem

//bit manipulation

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
 * Complete the 'tripleTrouble' function below.
 */


const one = BigInt(1);
const zero = BigInt(0);
const maxBit = BigInt(32);
const mod = BigInt(1000000007);

function checkBit(n, i) {
    return (n>>i) & one;
}

function tripleTrouble(arr, len) {
    // Write your code here
    let ans = zero;
    for(let i=zero; i<maxBit; i++) {
        let count = 0;
        for(let j=0; j<len; j++) {
            if(checkBit(arr[j], i)) {
                count++;
            }
        }
        if(count%3 !=0 ) {
            ans = ans + (one<<i)
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    const res = [];
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().split(" ").map(e => BigInt(e));
        const result = tripleTrouble(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
