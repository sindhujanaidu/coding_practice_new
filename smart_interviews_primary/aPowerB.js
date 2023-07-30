// https://www.hackerrank.com/contests/smart-interviews/challenges/si-compute-a-power-b/problem

// bit manipulation

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
 * Complete the 'aPowerB' function below.
 */

function checkBit(n, i) {
    return n>>i & 1;
}

const one = BigInt(1);
const mod = BigInt(1000000007);

function aPowerB(a, b) {
    let ans = one , x = a;
    while(b != 0) {
        if((b & one) == one) { // or checkBit(b, 0)
            ans = ans * x;
        }
        x = (x * x) % mod;
        b = b >> one;
    }
    return ans % mod;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    const res = [];
    for(let i = 0; i<T; i++) {
        const [a, b] = readLine().split(" ").map(e => BigInt(e));
        const result = aPowerB(a, b);
        ws.write(result + '\n');
    }
    ws.end();
}
