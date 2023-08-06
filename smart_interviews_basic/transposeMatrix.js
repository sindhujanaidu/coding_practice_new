// https://www.hackerrank.com/contests/smart-interviews-basic/challenges/si-basic-transpose-matrix/problem

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

const zero = BigInt(0);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const res = [];
    const [rowlen, columnlen] = readLine().split(" ").map(e => parseInt(e));
    let matArr = [];
    for(let i = 0; i < rowlen ; i++) {
        let arr = [];
        arr[i] = readLine().split(" ");
        matArr.push(arr[i]);
    }
    // solution 1
    // for (let i = 0; i < matArr[0].length; i++) {
    //     const col = []
    //     for (let j = 0; j < matArr.length; j++) {
    //       col.push(matArr[j][i]);
    //     }
    //     ws.write(col.join(" ")+"\n");
    // }

    // solution 2
    for (let i = 0; i < columnlen; i++) {
        const col = []
        for (let j = 0; j < rowlen; j++) {
          col.push(matArr[j][i]);
        }
        ws.write(col.join(" ")+"\n");
    }
    ws.end();
}
