// https://www.hackerrank.com/contests/smart-interviews/challenges/si-exclusion-product


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
 * Complete the 'exclusionProduct' function below.
 */
const mod = BigInt(1e9 + 7);
function exclusionProduct(arr, len) {
    // Write your code here
    let ps = [], ss = [];
    ps[0] = (arr[0])%mod;
    ss[len-1] = (arr[len-1])%mod;
    
    for(let i=1; i<len; i++) {
        ps[i] = (ps[i-1]*arr[i])%mod;
    }
    for(let i=len-2; i>=0; i--) {
        ss[i] = (ss[i+1]*arr[i])%mod;
    }
    let b = [];
    b[0] = ss[1] % mod;
    b[len-1]=ps[len-2] % mod;
    for(let i=1; i<=len-2; i++) {
        b[i] = (ps[i-1] * ss[i+1]) % mod;
    }
    
    return b.join(" ");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => BigInt(e));
        let ans = exclusionProduct(arr, len);
        ws.write(ans + '\n');
    }
    ws.end();
}
