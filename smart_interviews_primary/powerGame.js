// https://www.hackerrank.com/contests/smart-interviews/challenges/si-power-game


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
 * Complete the 'powerGame' function below.
 */

function powerGame(a, b, len) {
    // Write your code here
    // let a1=0, b1=0, count=BigInt(0);
    // try 1 with descending order of arrays - working
    // while(a1<len && b1<len) {
    //     if(a[a1] > b[b1]) {
    //         count++;
    //         a1++;
    //     }
    //     b1++;
    //     // below code is not needed instead increment b1 by default
    //     // if(a[a1]<b[b1]) {
    //         // a1++;
    //     // }
    // }
    // checked sol
    // for(let i=len-1, j = i; i >= 0 && j >= 0; --j) {
    //     if(a[i]>b[j]) {
    //         ++count;
    //         --i;
    //     }
    // }
    // try 2 - working
    let a1=len-1, b1=len-1, count=BigInt(0);
    while(a1>=0 && b1>=0) {
        if(a[a1] > b[b1]) {
            count++;
            a1--;
        }
        b1--;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = readLine().split(" ").map(e=>parseInt(e));
        const A = readLine().trim().split(" ").map(e=>parseInt(e)).sort((a,b) => a-b);
        const B = readLine().trim().split(" ").map(e=>parseInt(e)).sort((a,b) => a-b);
        const result = powerGame(A, B, len);
        ws.write(result + '\n');
    }
    ws.end();
}
