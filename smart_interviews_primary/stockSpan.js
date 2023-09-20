// https://www.hackerrank.com/contests/smart-interviews/challenges/si-stock-span


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
 * Complete the 'stockSpan' function below.
 */

function stockSpan(n, arr) {
    // Write your code here
    let stock = [arr[0]], span = [1], top = 0;
    let str = "1";
    for(let i = 1; i < n; i++) {
        let cnt = 0;
        while((top >= 0) && (arr[i] >= stock[top])) {
            cnt += span[top];
            stock.pop();
            span.pop();
            top--;
        }
        stock.push(arr[i]);
        span.push(cnt + 1);
        str = str + " " + (cnt+1);
        top++;
    }
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = stockSpan(n, arr);
        ws.write(ans + '\n');
    }
    ws.end();
}
