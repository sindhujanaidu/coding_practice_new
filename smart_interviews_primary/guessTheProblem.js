// https://www.hackerrank.com/contests/smart-interviews/challenges/si-guess-the-problem-1


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
 * Complete the 'guessTheProblem1' function below.
 */

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function guessTheProblem1(string) {
    // Write your code here
    const words = string.split(" ");
    const second = words[1].split("");
    let str = '';
    for(var i=0; i<second.length; i++) {
        if(!words[0].includes(second[i])){
            str += second[i];
        }
    }
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const str = readLine().trim();
        const result = guessTheProblem1(str);
        ws.write(result + '\n');
    }
    ws.end();
}
