// https://www.hackerrank.com/contests/smart-interviews/challenges/si-repeated-numbers/problem

// bit manupulation

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

function RepeatedNumber(arr, len) {
    // Write your code here
    let ans = zero;
    for(let i=0; i<len; i++) {
        ans = ans ^ arr[i];
    }
    for(let i=one; i<=len - 2; i++) {
        ans = ans ^ i;
    }
    
    let bitPos = 0;
    for(let i=zero; i<32; i++) {
        if(checkBit(ans,i) == one) {
            bitPos = i;
            break;
        }
    }
    
    let rep1 = zero, rep2 = zero;
    for(let i=zero; i<len; i++) {
        if(checkBit(arr[i], bitPos) == one) {
            rep1 = rep1 ^ arr[i];
        } else {
            rep2 = rep2 ^ arr[i];
        }
    }
    for(let i=one; i<=len-2; i++) {
        if(checkBit(i, bitPos) == one) {
            rep1 = rep1 ^ i;
        } else {
            rep2 = rep2 ^ i;
        }
    }
    if(rep1 > rep2) {
        let temp = rep2;
        rep2 = rep1;
        rep1 = temp;
    }
    
    return rep1+" "+rep2;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().split(" ").map(e => BigInt(e));
        const result = RepeatedNumber(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
