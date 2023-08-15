// https://www.hackerrank.com/contests/smart-interviews/challenges/si-insertion-sort/problem


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
 * Complete the 'insertionSort' function below.
 */

function insertionSort(arr, len) {
    // Write your code here
    let j = 0, key, indArr = [];
    for(let i=1; i<len; i++) {
        key = arr[i];
        j = i-1;
        
        while(j>=0 && arr[j]>key) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        indArr.push(j+1);
        arr[j+1] = key;
    }
    return indArr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().split(" ").map(e=>parseInt(e));
        const result = insertionSort(arr, len);
        ws.write(result.join(" ") + '\n');
    }
    ws.end();
}
