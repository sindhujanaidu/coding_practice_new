// https://www.hackerrank.com/contests/smart-interviews/challenges/si-product-manufacturing

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
 * Complete the 'productManufacturing' function below.
 */

function productManufacturing(arr, q) {
    // Write your code here
    let count=0;
    for(let i=0; i<arr.length; i++) {
        if(q>=arr[i][0] && q<=arr[i][1]) {
            count++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const M = parseInt(readLine().trim());
        const arr= [];
        for(let j = 0; j<M; j++) {
            const [S, E] = readLine().trim().split(" ").map(e=>parseInt(e));
            arr.push([S, E]);
        }
        const Q = parseInt(readLine().trim());
        for(let k = 0; k<Q; k++) {
            const q = parseInt(readLine().trim());
            const result = productManufacturing(arr, q);
            ws.write(result + '\n');
        }
    }
    ws.end();
}
