// https://www.hackerrank.com/contests/smart-interviews/challenges/si-substring-matching


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
 * Complete the 'substringMatching' function below.
 */

// solution 1: brute force

// function substringMatching(A, B, i, j, k, l) {
//     // Write your code here
//     const lenA = A.length, lenB = B.length;
//     let a = '', b = '';
//     for(let ind=i; ind<=j; ind++) {
//         a += A[ind]
//     }
//     for(let ind=k; ind<=l; ind++) {
//         b += B[ind]
//     }
//     // console.log(a, b)
//     return (a == b) ? "Yes" : "No";
// }

const zero = BigInt(0);
const one = BigInt(1);
const mod = BigInt(1e9+7);
const p = BigInt(97);

// let powers = [one];
// let map = {zero: one}

function computePowers(lim) {
    let powers = [one];
    for(let i=one; i<=lim; i++) {
        // if(!map[i]) 
            // map[i] = (BigInt(map[i-one]) * p) % mod;
        powers[i] = (powers[i-one] * p) % mod;
    }
    return powers;
}

function hash(x, power) {
    return (BigInt(x.charCodeAt(0)) * power) % mod;
}

function substringMatching(pha, phb, i, j, k, l, powers) {
    // Write your code here

    const diff = k - i;
    let ha = (i == zero) ? pha[j] : (pha[j] - pha[i-one] + mod) % mod; // pha[j]- pha[i] + pha[0];
    let hb = (k == zero) ? phb[l] : (phb[l] - phb[k-one] + mod) % mod;

    if(diff > zero) {
        ha = (ha * powers[diff]) % mod;
    } else if(diff < zero) {
        hb = (hb * powers[(-one*diff)]) % mod;
    }

    // console.log(ha, hb);
    return (ha == hb) ? "Yes" : "No";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const A = readLine().trim();
        const B = readLine().trim();
        
        const lenA = BigInt(A.length);
        const lenB = BigInt(B.length);
        
        const lim = lenA > lenB ? lenA : lenB;
        const powers = computePowers(lim);
        
        let pha = [], phb = [];

        pha[zero] = (BigInt(A.charCodeAt(0)) * p) % mod;
        let sum = pha[zero];
        for(let ind=one; ind<lenA; ind++) {
            sum = (sum % mod + (hash(A[ind], powers[ind+one])) % mod) % mod;
            pha[ind] = sum;
        }

        phb[zero] = (BigInt(B.charCodeAt(0)) * p) % mod;
        sum = phb[zero];
        for(let ind=one; ind<lenB; ind++) {
            sum = (sum % mod + (hash(B[ind], powers[ind+one])) % mod) % mod;
            phb[ind] = sum;
        }
        
        const Q = parseInt(readLine().trim());
        for(let j = 0; j<Q; j++) {
            const [i, j, k, l] = readLine().split(" ").map(e => BigInt(e));
            const result = substringMatching(pha, phb, i, j, k, l, powers);
            ws.write(result + '\n');
        }
    }
    ws.end();
}
