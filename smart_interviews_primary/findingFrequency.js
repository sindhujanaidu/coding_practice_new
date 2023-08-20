// https://www.hackerrank.com/contests/smart-interviews/challenges/si-finding-frequency

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
 * Complete the 'findingFrequency' function below.
 * 
 * SOLUTION 1 using hashmap
 * /

function findingFrequency(obj, q) {
    // Write your code here
    return obj[q] || 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const len = parseInt(readLine().trim());
    const arr = readLine().split(" ").map(e=>parseInt(e));
    let obj = {};
    for(let i=0; i< len; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    const Q = parseInt(readLine().trim());
    for(let i = 0; i<Q; i++) {
        const q = readLine().trim();//parseInt(readLine().trim());
        const result = findingFrequency(obj, q);
        ws.write(result + '\n');
    }
    ws.end();
}


/* 
 * Complete the 'findingFrequency' function below.
 * 
 * SOLUTION 2 using Binary search 1 & 2
 * /

function BS1(arr, len, q) {
    let low=0, high=len-1, mid, p1=-1;
    while(low<=high) {
        mid = parseInt((low+high)/2);
        if(arr[mid] < q) {
            low = mid + 1;
        } else if(arr[mid] > q) {
            high = mid - 1;
        } else {
            p1 = mid;
            high = mid-1;
        }
    }
    return p1;
}

function BS2(arr, len, q) {
    let low=0, high=len-1, mid, p2=-1;
    while(low<=high) {
        mid = parseInt((low+high)/2);
        if(arr[mid] < q) {
            low = mid + 1;
        } else if(arr[mid] > q) {
            high = mid - 1;
        } else {
            p2 = mid;
            low = mid+1;
        }
    }
    return p2;
}

function findingFrequencyUsingBinarySearch(arr, len, q) {
    // Write your code here
    const low = BS1(arr, len, q);
    const high = BS2(arr, len, q);
    if(low == -1 && high == -1)
        return 0;
    return high - low + 1;
}
