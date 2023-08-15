// https://www.hackerrank.com/contests/smart-interviews/challenges/si-pair-with-difference-k


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
 * Complete the 'diffOfPairs' function below.
 */

function diffOfPairs(arr, len, k) {
    // Write your code here
    // 2 pointer tried but didnt work
    // let p1 = 0, p2 = len - 1;
    // while(p1!=p2) {
    //     if(arr[p2] > k+arr[p1]) {
    //         p1++;
    //     } else if(arr[p2] < k+arr[p1]) {
    //         p2--;
    //     } else {
    //         return "true";
    //     }
    // }
    let obj = {};
    for(let i=0; i<len; i++) {
        obj[arr[i]] = i;
    }
    for(let i=0; i<len; i++) {
        if(obj[k+arr[i]] || obj[arr[i]-k]) {
            return "true";
        }
    }
    
    return "false";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [len, k] = readLine().split(" ").map(e=>parseInt(e));
        const arr = readLine().split(" ").map(e=>parseInt(e)).sort((a,b) => a-b);
        const result = diffOfPairs(arr, len, k);
        ws.write(result + '\n');
    }
    ws.end();
}
