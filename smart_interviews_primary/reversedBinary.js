// https://www.hackerrank.com/contests/smart-interviews/challenges/si-reverse-bits/problem

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
 * Complete the 'reversedBinary' function below.
 */

function reversedBinary(num) {
    // Write your code here
    let reversed = BigInt(0);
    const one = BigInt(1);
    let count = 32;
    
    while(count > 0) {
        reversed = reversed << one;
        const setBit = (num & one) == one;
        if(setBit) {
            reversed = reversed | one;
        }
        num = num >> one;
        count--;
    }
    return reversed;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    for(let i = 0; i<T; i++) {
        const number = BigInt(readLine().replace(/\s+$/g, ''));
        const result = reversedBinary(number);
        ws.write(result + '\n');
    }


    ws.end();
}

//using strings
function reversedBinary(num) {
    // Write your code here
    let reversed = BigInt(0);
    const one = BigInt(1);
    let count = 32;
    const binaryNum = num.toString(2);
    const arr = binaryNum.split("").reverse();
    const lenOfBin = arr.length;
    const finalArr = arr.concat(Array(32-lenOfBin).fill(0));
    return finalArr.join("");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    for(let i = 0; i<T; i++) {
        const number = BigInt(readLine().replace(/\s+$/g, ''));
        const result = reversedBinary(number);
        ws.write(parseInt(result, 2) + '\n');
    }
    ws.end();
}
