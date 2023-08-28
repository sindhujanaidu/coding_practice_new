// https://www.hackerrank.com/contests/smart-interviews/challenges/si-guess-the-problem-2


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
 * Complete the 'guessTheProblem2' function below.
 */

function guessTheProblem2(str, num) {
    // Write your code here
    let res = '';
    for(var i=0; i<str.length; i++) {
        let code = str.charCodeAt(i)+(num%26);
        if(code > 122) {
            code = code-122+96
        }
        res += String.fromCharCode(code);
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [str, num] = readLine().trim().split(" ");
        const result = guessTheProblem2(str, parseInt(num, 10));
        ws.write(result + '\n');
    }
    ws.end();
}
