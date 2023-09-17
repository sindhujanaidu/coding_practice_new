// https://www.hackerrank.com/contests/smart-interviews/challenges/si-implement-stack


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

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    let stack = [];
    for(let i=0; i<T; i++) {
        let [oper, elem] = readLine().trim().split(" ");
        const x = parseInt(elem);
        if(oper == "push") {
            stack.push(x)
        }
        if(oper == "pop") {
            let ans = stack.length > 0 ? stack.pop() : "Empty";
            ws.write(ans + '\n');
        }
    }
    ws.end();
}
