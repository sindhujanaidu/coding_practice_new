// https://www.hackerrank.com/contests/smart-interviews/challenges/si-count-the-triangles


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
 * Complete the 'countOfTriangles' function below.
 */

function countOfTriangles(arr, len) {
    // Write your code here
    let count = 0;
    for(let p3=len-1; p3>=0; p3--) {
        let p1 = 0, p2 = p3-1;
        while(p1<p2) {
            if(arr[p1]+arr[p2]>arr[p3]){
                count += p2-p1;
                p2--;
            } else {
                p1++;
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
        const arr = readLine().trim().split(" ").map(a=>parseInt(a)).sort((a,b)=>a-b);;
        const result = countOfTriangles(arr, len);
        ws.write(result + '\n');
    }
    ws.end();
}
