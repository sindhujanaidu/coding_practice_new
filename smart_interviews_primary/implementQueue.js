// https://www.hackerrank.com/contests/smart-interviews/challenges/si-implement-queue


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

function checkBit(n, i) {
    return (n>>i) & 1;
}

/*
 * Complete the 'main' function below.
 */

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
        let queue = [];
    for(let i=0; i<T; i++) {
        const [oper, x] = readLine().trim().split(" ");
        let front = -1, rear = -1;
        if(oper == "Enqueue") {
            rear++;
            queue.push(x)
        } else {
            rear--;
            let t = queue.shift();
            if(t) {
                ws.write(t + '\n');
            } else {
                ws.write("Empty" + '\n');
            }
        }
    }
    ws.end();
}
