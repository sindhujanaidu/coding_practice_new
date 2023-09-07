// https://www.hackerrank.com/contests/smart-interviews/challenges/si-rabin-karp-string-matching-algorithm


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
 * Complete the 'rabinKarpAlg' function below.
 */

function rabinKarpAlg(A, B) {
    // Write your code here
    const k = (1e9+7);
    let n = A.length, m = B.length;
    // let pha = [], phb = [];
    let ha = 0, hb = 0;
    let p = 101;
    let p1 = p;
    let count = 0;
    
    for(let i=0; i<m; i++) {
        ha = (ha % k + ((A.charCodeAt(i)) * p1) % k) % k;
        // pha[i] = ha;
        hb = (hb % k + ((B.charCodeAt(i)) * p1) % k) % k;
        // phb[i] = hb;
        p1 = (p1 * p) % k;
    }
    if(ha == hb) count++; 
    let p2 = p;
    for(let i=m; i<n; i++) {
        hb = (hb * p) % k;
        ha = (((ha - ((A.charCodeAt(i-m))*p2)% k) +k) % k + ((A.charCodeAt(i))*p1) % k ) % k;
        // pha[i] = ha;
        p1 = (p1 * p) % k;
        p2 = (p2 * p) % k;
        if(ha == hb) {
            count++;
        }
    }
    return count % k;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const [A, B] = readLine().trim().split(" ");
        let ans = rabinKarpAlg(B, A);
        ws.write(ans + '\n');
    }
    ws.end();
}
