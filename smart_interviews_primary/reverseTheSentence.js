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
    const len = str.length;
    // solution 1: without using split, created stack(array)
    // let stack = [];
    // for(let b = 0; b<len; b++) {
    //     stack.push(str[b]);
    // }
    // let main = "";
    // let temp = "";
    // for(let b = 0; b < len; b++) {
    //     let char = stack.pop();
    //     if(char == " ") {
    //         main = (main == "") ? temp : main + " " + temp;
    //         temp = "";
    //     } else {
    //         temp = char + temp;
    //     }
    //     if(b == len-1) {
    //         main = (main == "") ? temp : main + " " + temp;
    //     }
    // }
    // return main;

    // solution 2: using split and array (stack)
    let main = "";
    let stack = [];
    for(let b = 0; b<len; b++) {
        stack.push(str[b]);
    }
    for(let i = len-1; i>=0; i--) {
        let char = stack.pop();
        main = (main == "") ? char : main + " " + char;
    }
    return main;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        // let str = readLine().trim(); // solution 1
        let str = readLine().trim().split(" "); // solution 2
        let ans = reverseTheSentence(str);
        ws.write(ans + '\n');
    }
    ws.end();
}
