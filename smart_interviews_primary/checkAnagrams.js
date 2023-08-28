// https://www.hackerrank.com/contests/smart-interviews/challenges/si-check-anagrams


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
 * Complete the 'checkAnagram' function below.
 */

function checkAnagram(a, b) {
    // Write your code here
    if(a.length != b.length) return 'False';
    let count = 0, map = {}, mapB = {};
    for(var i=0; i<a.length; i++) {
        map[a[i]] = (map[a[i]] || 0) + 1;
    }
    for(var i=0; i<b.length; i++) {
        if(b[i] in map) {
            if(map[b[i]] > 1) map[b[i]]--
            else delete map[b[i]]
        }
    }
    // console.log(map)
    return (Object.keys(map).length == 0) ? 'True' : 'False';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const arr = readLine().trim().split(" ");
        const result = checkAnagram(arr[0], arr[1]);
        ws.write(result + '\n');
    }
    ws.end();
}
