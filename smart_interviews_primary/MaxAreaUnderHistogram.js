// https://www.hackerrank.com/contests/smart-interviews/challenges/si-rectangular-area-under-histogram


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
 * Complete the 'rectangularAreaUnderHistogram' function below.
 */

//         6   2  5  4  5  1  6
// ans -> -1  -1  1  1  3 -1  5
// stk ->  5  6        

function getFirstMinLeft(n, arr) {
    // Write your code here
    let p1 = [...Array(n)].fill(-1), top = -1;
    let st = [];
    for(let i=0; i<n; i++) {
        while(st.length != 0 && arr[i] <= arr[st[top]]) {
            // p1[st[top]] = i;
            st.pop();
            top--;
        }
        if(st.length != 0)
            p1[i] = st[top];
        st.push(i);
        top++;
    }
    return p1;
}
//         6   2  5  4  5  1  6
// ans -> -1  -1  1  1  3 -1  5
function getFirstMinRight(n, arr) {
    // Write your code here
    let p2 = [...Array(n)].fill(n), top = -1;
    let st = [];
    for(let i=0; i<n; i++) {
        while(st.length != 0 && arr[i] < arr[st[top]]) {
            p2[st[top]] = i;
            st.pop();
            top--;
        }
        // if(st.length != 0)
        //     p2[i] = st[top];
        st.push(i);
        top++;
    }
    return p2
}

function getArea(p1, p2, arr, n) {
    let max = 0;
    for(let i=0; i<n; i++) {
        max = Math.max((p2[i]-p1[i]-1)*arr[i], max)
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        let p1 = getFirstMinLeft(n, arr);
        let p2 = getFirstMinRight(n, arr);
        let ans = getArea(p1, p2, arr, n);
        ws.write(ans + '\n');
    }
    ws.end();
}
