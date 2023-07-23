// https://www.hackerrank.com/contests/smart-interviews/challenges/si-print-right-angled-triangle-pattern/problem

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
 * Complete the 'printRightAngledPatternMultiple' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function printRightAngledPatternMultiple(len, arr) {
    // Write your code here
    let res = [];
    for(let i=0; i<len; i++) {
        res[i] = [];
        for(let j=0; j<len; j++) {
            if(j < len - 1 - i)
                res[i].push(' ');
            else
                res[i].push('*');
        }
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<arCount; i++) {
        const count = parseInt(readLine().replace(/\s+$/g, ''), 10);
        const stars = printRightAngledPatternMultiple(count);
        res.push(stars);
    }

    ws.write(res.map((e,i)=>`Case #${i+1}:\n`+e.map(innerAr => innerAr.join("")).join("\n")).join("\n") + '\n');

    ws.end();
}
