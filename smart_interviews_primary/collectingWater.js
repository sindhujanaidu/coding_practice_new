// https://www.hackerrank.com/contests/smart-interviews/challenges/si-collecting-water


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
 * Complete the 'collectingWater' function below.
 */

//solution 1 : prefix max and suffix max - 3N, 2N
// function collectingWater(arr, len) {
//     // Write your code here
//     let ps = [];
//     ps[0] = arr[0];
//     for(let k=1; k<len; k++) {
//         ps[k] = Math.max(ps[k-1], arr[k]);
//     }
//     let ss = [];
//     ss[len-1] = arr[len-1];
//     for(let k=len-2; k>=0; k--) {
//         ss[k] = Math.max(ss[k+1], arr[k]);
//     }
//     let ans = 0;
//     for(let k=1; k<=len-2; k++) {
//         ans = ans + (Math.min(ps[k], ss[k]) - arr[k])
//     }
//     return ans;
// }

//solution 2 : prefix max on fly and suffix max(N) - 2N(suffixmax, ans), N (suffixmax)
function collectingWater(arr, len) {
    // Write your code here
    let ss = [];
    ss[len-1] = arr[len-1];
    for(let k=len-2; k>=0; k--) {
        ss[k] = Math.max(ss[k+1], arr[k]);
    }
    let ps = [];
    ps[0] = arr[0];
    let ans = 0;
    for(let k=1; k<=len-2; k++) {
        ps[k] = Math.max(ps[k-1], arr[k]);
        ans = ans + (Math.min(ps[k], ss[k]) - arr[k])
    }
    return ans;
}

// solution 3 : using 2 pointers
// function collectingWater(arr, len) {
//     // Write your code here
//     let p1 = 1, p2 = len-1;
//     let p1_max = arr[0], p2_max = arr[len-1];
//     let water = 0;
//     while(p1 <= p2) {
//          if(p1_max > p2_max) {
//              if(p2_max > arr[p2]) {
//                  water += p2_max - arr[p2];
//              } else {
//                  p2_max = arr[p2]
//              }
//              p2--;
//          } else {
//              if(p1_max > arr[p1]) {
//                  water += p1_max - arr[p1];
//              } else {
//                  p1_max = arr[p1]
//              }
//              p1++;
//          }
//     }
//     return water;
// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = collectingWater(arr, len);
        ws.write(ans + '\n');
    }
    ws.end();
}
