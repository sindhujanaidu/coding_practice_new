// https://www.hackerrank.com/contests/smart-interviews/challenges/si-finding-cuberoot

// 2 pointers

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
 * Complete the 'findingCuberoot' function below.
 */

function findingCuberoot(n) {
    // Write your code here
    let p1=1, p2=n, mid;
    while(p1<=p2) {
        mid = parseInt((p1+p2)/2);
        if(mid*mid*mid == n) {
            return mid;
        }
        if(mid*mid*mid < n) {
            p1=mid+1;
        } else {
            p2=mid-1;
        }
    }
    return mid;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const isNeg = Math.sign(n);
        const result = findingCuberoot(n*isNeg);
        ws.write(result*isNeg + '\n');
    }
    ws.end();
}
