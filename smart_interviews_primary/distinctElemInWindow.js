// https://www.hackerrank.com/contests/smart-interviews/challenges/si-distinct-elements-in-window/problem


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
 * Complete the 'distinctElements' function below.
 */

function distinctElements(arr, len, k) {
    // Write your code here
    let map = {};
    let sizeArr = [];
    // solution 1
    for(let i=0; i<k; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    sizeArr.push(Object.keys(map).length);
    for(let i=k; i<len; i++) {
        if(map[arr[i-k]] > 1) {
            map[arr[i-k]]--;
        } else {
            delete map[arr[i-k]];
        } 
        map[arr[i]] = (map[arr[i]] || 0) + 1;
        sizeArr.push(Object.keys(map).length);
    }
    // solution 2
    for(let i=0; i<len; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
        if(i>=k) {
            if(map[arr[i-k]] > 1) {
                map[arr[i-k]]--;
            } else {
                delete map[arr[i-k]];
            }
        }
        if(i>=k-1) 
            sizeArr.push(Object.keys(map).length);
    }
    return sizeArr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [len, k] = readLine().trim().split(" ").map(a=>parseInt(a));
        const arr = readLine().trim().split(" ");//.map(a=>parseInt(a));
        const res = distinctElements(arr, len, k);
        ws.write(res.join(" ") + '\n');
    }
    ws.end();
}
