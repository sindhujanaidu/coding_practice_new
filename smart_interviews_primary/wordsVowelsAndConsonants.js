// https://www.hackerrank.com/contests/smart-interviews/challenges/si-words-vowels-and-consonants


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
 * Complete the 'wordsVowelsAndConsonants' function below.
 */

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function wordsVowelsAndConsonants(str) {
    // Write your code here
    const words = str.split(" ");
    let vowCount = 0, letterCount = 0, wordsCount = words.length;
    for(var i=0; i<words.length; i++) {
        if(words[i].length == 0) {
            wordsCount--;
        }
        const letters = words[i].split("");
        letterCount += letters.length;
        for(var j=0; j<letters.length; j++) {
            if(VOWELS.includes(letters[j])) vowCount++;
        }
    }
    return [wordsCount, vowCount, letterCount-vowCount];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const str = readLine().trim().toLowerCase();
        const result = wordsVowelsAndConsonants(str);
        ws.write(result.join(" ") + '\n');
    }
    ws.end();
}
