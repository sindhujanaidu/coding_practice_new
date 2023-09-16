// https://www.hackerrank.com/contests/smart-interviews/challenges/si-reverse-the-sentence


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
 * Complete the 'reverseTheSentence' function below.
 */

function reverseTheSentence(str) {
    // Write your code here
//     let len = str.length;
    
//     for(let b = 0; b<len; b++) {
//         let t = str[len-b-1];
//         str[len-b-1] = str[b];
//         str[b] = t;
//     }
//     return str;
    let len = str.length;
    let ans = [];
    for(let i = len-1; i>=0; i--) {
        ans.push(str[i])
    }
    return ans.join(" ")
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        let str = readLine().trim().split(" ");
        let ans = reverseTheSentence(str);
        ws.write(ans + '\n');
    }
    ws.end();
}
