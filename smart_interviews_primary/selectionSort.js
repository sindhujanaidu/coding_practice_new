// https://www.hackerrank.com/contests/smart-interviews/challenges/si-selection-sort


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
 * Complete the 'selectionSort' function below.
 */

function selectionSort(arr, len) {
    // Write your code here
    let indArr =[];
    for(let i=len-1; i>0; i--) {
        let max = i;
        for(let j=i-1; j>=0; j--) {
            // console.log(j, arr[j])
            if(arr[j] >= arr[max]) {
                max = j;
            }
        }
        const temp = arr[max];
        arr[max] = arr[i];
        arr[i] = temp;
        indArr.push(max)
    }
    return indArr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().trim().split(" ").map(e=>parseInt(e));
        const res = selectionSort(arr, len);
        ws.write(res.join(' ') + '\n');
    }
    ws.end();
}
