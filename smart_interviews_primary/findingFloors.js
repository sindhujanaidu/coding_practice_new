// https://www.hackerrank.com/contests/smart-interviews/challenges/si-finding-the-floor

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
 * Complete the 'findingFloor' function below.
 */

function findingFloor(arr, len, q) {
    // Write your code here
    let p1=0, p2=len-1, ind, mid, INT_MIN = -2147483648;
    while(p1<=p2) {
        mid = parseInt((p1+p2)/2);
        if(q == arr[mid]) {
            return q;
        }
        if(arr[mid] < q) {
            ind = mid;
            p1=mid+1;
        } else {
            p2=mid-1;
        }
    }
    return arr[ind] || INT_MIN;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const len = parseInt(readLine().trim());
    const arr = readLine().trim().split(" ").map(e=>parseInt(e)).sort((a,b) => a-b);
    const Q = parseInt(readLine().trim());
    for(let i = 0; i<Q; i++) {
        const q = parseInt(readLine().trim());
        const result = findingFloor(arr, len, q);
        ws.write(result + '\n');
    }
    ws.end();
}
