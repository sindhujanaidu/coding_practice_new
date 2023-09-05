// https://www.hackerrank.com/contests/smart-interviews/challenges/si-enclosing-substring


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
 * Complete the 'enclosingSubstring' function below.
 */

// function enclosingSubstring(A, B) {
//     // Write your code here
//     const lenA = A.length, lenB = B.length;
//     let ca = [...Array(26)].fill(0), cb = [...Array(26)].fill(0);
//     let ans = lenA + 1;
//     for(let i=0; i<lenB; i++) {
//         cb[B.charCodeAt(i) - 97]++;
//     }
    
//     for(let i=0; i<lenA; i++) {
//         for(let j=i; j<lenA; j++) {
//             ca[A.charCodeAt(p2) - 97]++;
//             if(check(ca, cb)) {
//                 ans = Math.min(ans, j-i+1);
//                 p1++
//             } else {
//                 p2++;
//             }
//         }
//     }
//     return ans;
// }

// solution 5 from notes using pointers
function enclosingSubstring(A, lenA, B, lenB) {
    // Write your code here
    let mapA = {}, mapB = {};
    let ans = 9999999999;
    for(let i=0; i<lenB; i++) {
        mapA[A[i]] = (mapA[A[i]] || 0) + 1;
        mapB[B[i]] = (mapB[B[i]] || 0) + 1;
    }
    
    let p1 = 0, p2 = lenB;
    while(p1<p2) {
        if(check(mapA, mapB) && p1<lenA) {
            // console.log(mapA)
            ans = Math.min(ans, p2-p1);
            if(mapA[A[p1]] > 1) {
                mapA[A[p1]]--;
            } else {
                delete mapA[A[p1]];
            }
            p1++
        } 
        else if(p2<lenA) {
            mapA[A[p2]]= (mapA[A[p2]] || 0) + 1;
            p2++;
        } else {
            break;
        }
    }
    return ans == 9999999999 ? -1 : ans;
}

function check(mapA, mapB) {
    for(let i in mapB) {
        // console.log(i, mapA[i], mapB[i])
        if(mapA[i] >= mapB[i]) continue;
        else return false
    }
    return true;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const [a, b] = readLine().trim().split(" ");
        const lenA = a.length, lenB = b.length;
        const result = (lenA > lenB) ? enclosingSubstring(a, lenA, b, lenB) : enclosingSubstring(b, lenB, a, lenA);
        ws.write(result+ '\n');
    }
    ws.end();
}
