// https://www.hackerrank.com/contests/smart-interviews/challenges/si-collecting-mangoes


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
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        let s1 = [], s2 = [], top = -1;
        // ws.write(`Case ${i+1}:`+ '\n');
        console.log(`Case ${i+1}:`)
        for(let b = 0; b < n; b++) {
            const [type, elem] = readLine().trim().split(" ");
            if(type == "A") {
                const x = parseInt(elem);
                s1.push(x);
                const m = (top == -1) ? x : s2[top];
                let max = (x > m) ? x : m;
                s2.push(max);
                top++;
            } else if(type == "Q") {
                // console.log(s1, s2)
                // ws.write(top == -1 ? "Empty" : s2[top] + '\n');
                console.log((top == -1) ? "Empty" : s2[top])
            } else if(type == "R") {
                if(top >= 0) {
                    s1.pop();
                    s2.pop();
                    top--;
                }
            }
        }
    }
    // ws.end();
}
