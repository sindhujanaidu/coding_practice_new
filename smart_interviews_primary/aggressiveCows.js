// https://www.hackerrank.com/contests/smart-interviews/challenges/si-aggressive-cows

// binary search

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
 * Complete the 'aggressiveCows' function below.
 */

function getMinDistance(arr, len) {
    let min = 999999999;
    for(let i=0; i<len; i++) {
        if(arr[i+1]-arr[i] < min) min = arr[i+1]-arr[i];
    }
    return min;
}

function valid(arr, val, c, len) {
    let c_req = 1;
    let elem = arr[0];
    for(let i=0; i<len; i++) {
        if(arr[i] - elem >= val) {
            c_req++;
            elem = arr[i];
        }
    }
    return (c_req >= c);
}

function aggressiveCows(arr, len, c) {
    // Write your code here
    let low = getMinDistance(arr, len), high = arr[len-1]-arr[0];
    let mid, ans;
    while(low <= high) {
        mid = parseInt((low+high)/2);
        if(valid(arr, mid, c, len)) {
            ans = mid;
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [N, C] = readLine().trim().split(" ").map(e => parseInt(e));
        const tasks = readLine().trim().split(" ").map(e => parseInt(e)).sort((a,b) =>a-b);
        const res = aggressiveCows(tasks, N, C);
        ws.write(res + '\n');
    }
    ws.end();
}
