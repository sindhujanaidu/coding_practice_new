// https://www.hackerrank.com/contests/smart-interviews-basic/challenges/si-basic-compress-a-string


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
 * Complete the 'compressString' function below.
 */

function compressString(chars) {
    // Write your code here
    let str = "";
    let count = 1;
    let firstChar = chars[0];
    for(let i=1; i<chars.length; i++){
        if(chars[i] == firstChar) {
            count++;
        } else {
            str += (firstChar+count);
            firstChar = chars[i];
            count = 1;
        }
    }
    str += firstChar+count;
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const str = readLine().trim().split('');
    const result = compressString(str);
    ws.write(result + '\n');
    ws.end();
}
