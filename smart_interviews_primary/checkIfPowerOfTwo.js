// https://www.hackerrank.com/contests/smart-interviews/challenges/si-check-power-of-two/problem

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

/*
 * Complete the 'countSetBits' function below.
 */

function countSetBits(numb) {
    // Write your code here
    let count = 0;
    let num = numb;
    // solution 1
    // while(num > 0) {
    //     if((num & one) == one) {
    //         count++;
    //     }
    //     num = num >> one;
    // }
    // return count == 1 ? "True" : "False";
    
    // solution 2
    while(num > 0) {
        return ((num & (num-one)) == zero) ? "True" : "False"
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<T; i++) {
        const number = BigInt(readLine().replace(/\s+$/g, ''));
        const result = countSetBits(number);
        ws.write(result + '\n');
    }
    ws.end();
}
