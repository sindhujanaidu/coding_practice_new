// https://www.hackerrank.com/contests/smart-interviews/challenges/si-toggle-01


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

function checkBit(a, b) {
    return ((a>>b) & 1);
}

/*
 * Complete the 'toggle01' function below.
 */

function getCeil(arr, elem) {
    const len = arr.length;
    let l = 0, h = len-1, mid;
    let ceil = -1;
    while(l <= h) {
        mid = parseInt((l+h)/2);
        if(arr[mid] == elem) return arr[mid];

        if(elem < arr[mid]) {
            ceil = arr[mid];
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ceil;
}

function getFloor(arr, elem) {
    const len = arr.length;
    let l = 0, h = len-1, mid;
    let ans = -1;
    while(l <= h) {
        mid = parseInt((l+h)/2);
        if(arr[mid] == elem) return arr[mid];

        if(elem < arr[mid]) {
            h = mid - 1;
        } else {
            ans = arr[mid];
            l = mid + 1;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const [n, q] = readLine().trim().split(" ").map(e => parseInt(e));
        let arr = [];
        let ans;
        for(let j=0; j<q; j++) {
            const [type, ind] = readLine().trim().split(" ").map(e => parseInt(e));
            if(type == 1) {
                let id = arr.indexOf(ind);
                if(id == -1)
                    arr.push(ind);
                else arr.splice(id, 1);
            } else {
                // do BS
                arr = arr.sort((a,b) => a-b)
                const ceil = getCeil(arr, ind);
                const floor = getFloor(arr, ind);

                if(ceil == -1 && floor == -1) 
                    ans = -1;
                else if(ceil == -1)
                    ans = Math.abs((floor-ind));
                else if(floor == -1)
                    ans = Math.abs((ceil-ind))
                else ans = Math.min(Math.abs((ceil-ind)), Math.abs((floor-ind)));
                ws.write(ans + '\n');
            }
        }
    }
    ws.end();
}
