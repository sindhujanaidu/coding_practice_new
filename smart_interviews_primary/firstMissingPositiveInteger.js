// https://www.hackerrank.com/contests/smart-interviews/challenges/si-first-missing-positive-integer


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
 * Complete the 'firstMissingPositive' function below.
 */

// solution 1 - didnt work : tried from notes
function firstMissingPositive1(arr, len) {
    // Write your code here
    const max = BigInt(-9999999);
    const one = BigInt(1)
    const two = BigInt(2)
    const mod = BigInt(1e9+7)
    let l = BigInt(0), h = BigInt(len - one), p = BigInt(-1), ans = max;
    while(l <= h) {
        let m = BigInt((l+h)/two);
        let elem = arr[m];
        if(elem <= 0) {
            p = m;
            l = m + one;
        } else {
            h = m - one; 
        }
    }
    l = p + one, h = len - one;
    
    while(l <= h) {
        let m = BigInt((l+h)/two);
        let elem = arr[m];
        // console.log("arr",arr, elem, m-p)
        if(elem == m-p) {
            l = m + one;
            ans = m - p + one;
        } else {
            h = m - one; 
        }
    }
   return ans == max ? BigInt(1) : ans % mod;
}

// solution 2 - works : creating map with 1 to n and iterate on nums and delete for the elements > 0
const firstMissingPositive = (nums) => {
    let  map = new Map();
    for (let i = 1; i <= nums.length + 1; i++) {
        map.set(i, 1);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) map.delete(nums[i])
    }
    const [firstValue] = map.keys();
    return firstValue;
};

// solution 3 - works : creating map with nums and checking from 1 to nums if something is missing in map
const firstMissingPositive = (nums) => {
    let  map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 1);
    }
    for (let i = 1; i < nums.length+1; i++) {
        if (map.get(i)) continue;
        else return i;
    }
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const len = BigInt(readLine().trim());
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        let ans = firstMissingPositive(arr, len);
        // let ans = firstMissingPositive(arr.sort((a,b) => a-b), len);
        ws.write(ans + '\n');
    }
    ws.end();
}
