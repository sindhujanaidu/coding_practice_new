// https://www.hackerrank.com/contests/smart-interviews/challenges/si-interleavings/problem

// recursion

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
 * Complete the 'interLeaving' function below.
 */

let result = [];

function interLeaving(a, n, b, m, indA, indB, c, indC) {
    // Write your code here
        if(indC==n+m) {
            result.push(c.join(""));
            //console.log(c);
            return;
        }
       if(b[indB] < a[indA]) {
            if(indB<m) {
               c[indC] = b[indB];
               interLeaving(a, n, b, m, indA, indB+1, c, indC+1);
            }
            if(indA<n) {
               c[indC] = a[indA];
               interLeaving(a, n, b, m, indA+1, indB, c, indC+1);
            }
       } else {
            if(indA<n) {
                c[indC] = a[indA];
                interLeaving(a, n, b, m, indA+1, indB, c, indC+1);
            }

            if(indB<m) {
                c[indC] = b[indB];
                interLeaving(a, n, b, m, indA, indB+1, c, indC+1);
            }
       }
    
    return c;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [a, b] = readLine().trim().split(" ");
        let c = [];
        ws.write(`Case #${i+1}:`+'\n');
        interLeaving(a, a.length, b, b.length, 0, 0, c, 0);
        ws.write(result.join("\n") + '\n');
        result = [];
    }
    ws.end();
}
