// https://www.hackerrank.com/contests/smart-interviews/challenges/si-sum-of-pairs/problem


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
 * Complete the 'sumOfPairs' function below.
 */

function sumOfPairs(arr, len, k) {
    // Write your code here
    let p1 = 0, p2 = len - 1;
    while(p1!=p2) {
        if(arr[p1]+arr[p2] > k) {
            p2--;
        } else if(arr[p1]+arr[p2] < k) {
            p1++;
        } else {
            return "True";
        }
    }
    return "False";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [len, k] = readLine().split(" ").map(e=>parseInt(e));
        const arr = readLine().split(" ").map(e=>parseInt(e)).sort((a,b) => a-b);
        const result = sumOfPairs(arr, len, k);
        ws.write(result + '\n');
    }
    ws.end();
}
