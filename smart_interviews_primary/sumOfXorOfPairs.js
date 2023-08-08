// https://www.hackerrank.com/contests/smart-interviews/challenges/si-sum-of-xor-of-pairs/problem

// bit manipulation 

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
    return (n>>i) & 1;
}

function sumOfXorOfOfPairs(arr, len) {
    // Write your code here
    let ans = 0;
    // sol 1 - o(n^2)
    // for(let i =0; i<len-1; i++) {
    //     for(let j =i+1; j<len; j++) {
    //         ans = ans + (arr[i]^arr[j]);
    //     }
    // }
    // sol 2
    for(let i =0; i<31; i++) {
        let count = 0;
        for(let j =0; j<len; j++) {
            if(checkBit(arr[j], i) == 1) {
                count++;
            }
        }
        ans = ans + (count * (len - count)) *(1<<i);
    }
    return 2*ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().split(" ").map(e =>parseInt(e));
        const result = sumOfXorOfOfPairs(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
