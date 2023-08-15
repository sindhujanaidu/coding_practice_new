// https://www.hackerrank.com/contests/smart-interviews/challenges/si-bubble-sort/

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
 * Complete the 'bubbleSort' function below.
 */

function bubbleSort(arr, len) {
    // Write your code here
    let count = 0;
    for(let i=0; i<len; i++) {
        for(let j=0; j<(len-(i+1)); j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                count++;
            }
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().split(" ").map(e=>parseInt(e));
        const result = bubbleSort(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
