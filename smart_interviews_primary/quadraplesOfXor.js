// https://www.hackerrank.com/contests/smart-interviews/challenges/si-quadruples-of-xor


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
 * Complete the 'quadraplesOfXOR' function below.
 */

function quadraplesOfXOR(a, b, c, d, len) {
    // Write your code here
    let map1 = {}, map2 = {}, count = 0;
    
    //find a^b and c^d check if there are common elements in both arrays
    
    // solution 2 using dictionary
    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            // aXorB.push(a[i]^b[j])
            const ab = a[i]^b[j]
            map1[ab] = (map1[ab] || 0) + 1;
        }
    }
    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            // cXorD.push(c[i]^d[j])
            const cd = c[i]^d[j]
            map2[cd] = (map2[cd] || 0) + 1;
            if(cd in map1) count += map1[cd];
        }
    }
    
    // solution 1 using list
    let aXorB = [], cXorD = [], count1 = 0;
    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            aXorB.push(a[i]^b[j])
        }
    }
    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            cXorD.push(c[i]^d[j])
        }
    }
    const l = aXorB.length;
    for(let i=0; i<l; i++) {
        for(let j=0; j<l; j++) {
            if((aXorB[i] ^ cXorD[j]) == 0) count1++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const a = readLine().trim().split(" ").map(e => parseInt(e));
        const b = readLine().trim().split(" ").map(e => parseInt(e));
        const c = readLine().trim().split(" ").map(e => parseInt(e));
        const d = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = quadraplesOfXOR(a, b, c, d, len);
        ws.write(ans + '\n');
    }
    ws.end();
}
