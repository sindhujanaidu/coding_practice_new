// https://www.hackerrank.com/contests/smart-interviews/challenges/si-cabinets-partitioning

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
 * Complete the 'cabinetsPartitioning' function below.
 */

function findLowAndHigh(arr, len) {
    let sum = 0, max = arr[0];
    for(let i=0; i<len; i++) {
        sum += arr[i];
        if(max < arr[i]) max = arr[i];
    }
    return {low: max, high: sum};
}

function valid(arr, val, k, len) {
    let sum = 0, k_req = 0;
    for(let i=0; i<len; i++) {
        sum = sum + arr[i];
        if(sum == val) {
            k_req++;
            sum = 0;
        } else if(sum < val) {
            continue;
        } else {
            k_req++;
            sum = arr[i]
        }
    }
    if(sum > 0) k_req++;
    return (k_req <= k);
}

function cabinetsPartitioning(arr, len, k) {
    // Write your code here
    let {low, high} = findLowAndHigh(arr, len);
    let mid, ans;
    while(low <= high) {
        mid = parseInt((low+high)/2);
        if(valid(arr, mid, k, len)) {
            ans = mid;
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [N, K] = readLine().trim().split(" ").map(e => parseInt(e));
        const tasks = readLine().trim().split(" ").map(e => parseInt(e));
        const res = cabinetsPartitioning(tasks, N, K);
        ws.write(res + '\n');
    }
    ws.end();
}
