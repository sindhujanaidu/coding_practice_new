// https://www.hackerrank.com/contests/smart-interviews/challenges/si-max-element-with-queries


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
 * Complete the 'maxElementWithQueries' function below.
 */

function maxElementWithQueries(arr, a, len) {
    // Write your code here
    let sum = 0;
    for(let k=0; k<len; k++) {
        sum += a[k];
        arr[k] = arr[k] + sum;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        const Q = parseInt(readLine().trim());
        let a = [...Array(len)].fill(0);
        for(let j=0; j<Q; j++) {
            const [m, n, x] = readLine().trim().split(" ").map(e => parseInt(e));
            a[m] = a[m] + x;
            if(n != len - 1) {
                a[n+1]  = a[n+1] - x;
            }
        }
        maxElementWithQueries(arr, a, len);
        ws.write(Math.max(...arr) + '\n');
    }
    ws.end();
}
