// https://www.hackerrank.com/contests/smart-interviews/challenges/si-find-first-repeating-character-variation


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
 * Complete the 'findFirstRepeatingCharacter' function below.
 */

function findFirstRepeatingCharacter(str) {
    // Write your code here
    let count = [...Array(26)].fill(false);
    for(var i=0; i<str.length; i++) {
        if(count[str.charCodeAt(i)-97] == true) {
            return str[i];
        }
        count[str.charCodeAt(i)-97] = true;
    }
    return '.';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const arr = readLine().trim();
        const result = findFirstRepeatingCharacter(arr);
        ws.write(result + '\n');
    }
    ws.end();
}
