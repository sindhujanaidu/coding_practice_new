// https://www.hackerrank.com/contests/smart-interviews/challenges/si-sort-0s-and-1s


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
 * Complete the 'countSort' function below.
 */

function countSort(arr, len) {
    // Write your code here
    let p1 = 0, p2 = len - 1;
    while(p1 <= p2) {
        if((arr[p1] == '0') && (arr[p2] == '0')) {
            p1++;
        } else if((arr[p2]=='1') && (arr[p1] == '1')) {
            p2--;
        } else if((arr[p1] == '0') && (arr[p2] == '1')) {
            p1++;
            p2--;
        }
        else if((arr[p1] == '1') && (arr[p2] == '0')) {
            arr[p1]='0';
            arr[p2]='1';
            p1++;
            p2--;
        }
    }
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().split(" ");
        const result = countSort(arr, len);
        ws.write(result.join(" ") + '\n');
    }
    ws.end();
}
