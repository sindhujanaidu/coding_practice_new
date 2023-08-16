// https://www.hackerrank.com/contests/smart-interviews/challenges/si-frequency-sort


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
 * Complete the 'frequencySort' function below.
 */

function frequencySort(arr, len) {
    // Write your code here
    let map = {};
    for(let i=0; i<len; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    console.log(map, arr)
    return arr.sort((a,b) => map[a] - map[b] || a-b);;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = parseInt(readLine());
        const arr = readLine().trim().split(" ").map(a=>parseInt(a));
        const result = frequencySort(arr, len);
        ws.write(result.join(" ") + '\n');
    }
    ws.end();
}
