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

/*
 * Complete the 'countSetBits' function below.
 */

function countSetBits(numb) {
    // Write your code here
    let count = 0;
    // while(num > 0) {
    //     num = num & ( num - 1);
    //     count++;
    // }
    let num = numb;
    const one = BigInt(1);
    while(num > 0) {
        if((num & one) == one) {
            count++;
        }
        num = num >> one;
    }
    return count == 1 ? "True" : "False";
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
