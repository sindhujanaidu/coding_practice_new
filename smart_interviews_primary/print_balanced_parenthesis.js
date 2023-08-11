// https://www.hackerrank.com/contests/smart-interviews/challenges/si-printing-balanced-paranthesis/problem

// recursion

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
 * Complete the 'printParenthesis' function below.
 */

let final = [];

// with updating at index directly
function printParenthesis(arr, n, ind, openCount, closeCount) {
    // Write your code here
    if(openCount+closeCount == n) {
        final.push(arr.join(""));
        return;
    }
    
    if(openCount < n/2) {
        arr[ind] = "{";
        printParenthesis([...arr], n, ind+1, openCount+1, closeCount);
    }
    
    if(openCount > closeCount) {
        arr[ind] = "}";
        printParenthesis([...arr], n, ind+1, openCount, closeCount+1);
    }
}
// with push and pop
function printParenthesis(arr, n, ind, openCount, closeCount) {
    // Write your code here
    if(openCount+closeCount == n) {
        final.push(arr.join(""));
        return;
    }
    
    if(openCount < n/2) {
        arr.push("{");
        printParenthesis([...arr], n, ind+1, openCount+1, closeCount);
        arr.pop();
    }
    
    if(openCount > closeCount) {
        arr.push("}");
        printParenthesis([...arr], n, ind+1, openCount, closeCount+1);
        arr.pop();
    }
}

function main() {
   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const n = parseInt(readLine());
        let arr = new Array(2 * n);
        ws.write(`Test Case #${i+1}:` + '\n');
        printParenthesis(arr, 2*n, 0, 0, 0);
        ws.write(final.join("\n") + '\n');
        final = [];
    }
    ws.end();
}
