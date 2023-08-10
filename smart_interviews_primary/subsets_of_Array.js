// https://www.hackerrank.com/contests/smart-interviews/challenges/si-subsets-of-an-array/problem

// recursion & backtracking

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

function subsetsOfArray(arr, len, subset, output) {
    // Write your code here
    if(len == 0) {
        return;
    }
    
    for(let i=0; i< len; i++) {
        subset.push(arr[i]);
        output.push([...subset]);
        subsetsOfArray(arr.slice(i+1, len), len-(i+1), subset , output);
        subset.pop();
    }
    return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().trimEnd().split(" ").map(e => parseInt(e)).sort((a,b) => a-b);
        let subset = [], output = [];
        const res = subsetsOfArray(arr, len, subset, output);
        
        ws.write(res.map(e=>e.join(" ")).join("\n")+"\n\n");
    }
    ws.end();
}
