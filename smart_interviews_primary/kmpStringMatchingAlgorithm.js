// https://www.hackerrank.com/contests/smart-interviews/challenges/si-kmp-string-matching-algorithm/problem


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

function kmpStringMatching(haystack, needle) {
    // Write your code here
    // let k=0, ans = [];
    // for(let i=0;i<haystack.length;i++){
    //     if(haystack[i]==needle[k]){
    //         k++;
    //         if(k==needle.length){
    //             ans.push( i-(k-1))
    //         }
    //     }else{
    //         i=i-(k)
    //         k=0;
    //     }
    // }
    // return ans.length ==0 ? -1 : ans.length;
    let len = needle.length, ans = 0;
    if(!needle || !len){
        return -1;
    }
    
    for(let i=0;i<haystack.length;i++){
        if(haystack.slice(i,i+len) === needle){
            ans++;
        }
    }
    return ans == 0 ? -1 : ans;
}

// function kmpStringMatching(N, M) {
//     // Write your code here
//     let n = N.length;
//     let m = M.length;
    
//     if (m === 0) return 0; // empty needle
    
//     for (let i = 0; i <= n - m; i++) {
//         let found = true;
//         for (let j = 0; j < m; j++) {
//             if (N[i + j] !== M[j]) {
//                 found = false;
//                 break;
//             }
//         }
//         if (found) return i;
//     }
//     return -1; // needle not found
//     N.indexOf(M)
// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const [A, B] = readLine().trim().split(" ");
        let ans = kmpStringMatching(B, A);
        ws.write(ans + '\n');
    }
    ws.end();
}
