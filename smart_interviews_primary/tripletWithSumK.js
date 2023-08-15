// https://www.hackerrank.com/contests/smart-interviews/challenges/si-triplet-with-sum-k


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
 * Complete the 'tripletWithSumK' function below.
 */

function tripletWithSumK(arr, len, k) {
    // Write your code here
    for(let i=0; i<len; i++) {
        let c = arr[i];
        let p1 = i+1;
        let p2 = len-1;
        while(p1<p2) {
            if(arr[p1]+arr[p2] > k-c) {
                p2--;
            } else if(arr[p1]+arr[p2] < k-c) {
                p1++;
            } else {
                return "true";
            }
        }
    }
    return "false";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [len, k] = readLine().split(" ").map(e=>parseInt(e));
        const arr = readLine().trim().split(" ").map(e=>parseInt(e)).sort((a,b) => a-b);
        const result = tripletWithSumK(arr, len, k);
        ws.write(result + '\n');
    }
    ws.end();
}
