// https://www.hackerrank.com/contests/smart-interviews/challenges/si-finding-missing-number/problem

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
 * Complete the 'missingNumber' function below.
 */

function missingNumber(len, arr) {
    // Write your code here
    const numArray = [...Array(len+1)].map((e, i) => i+1);
    let missingNum = 0;
    for(let elem of numArray) {
        if(arr.indexOf(elem) == -1)
            missingNum = elem;
    }
    return missingNum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine().trim(), 10);
        const arr = readLine().replace(/\s+$/g, '').split(" ").map(e => parseInt(e));
        const result = missingNumber(len, arr);
        ws.write(result + '\n');
    }
    ws.end();
}
