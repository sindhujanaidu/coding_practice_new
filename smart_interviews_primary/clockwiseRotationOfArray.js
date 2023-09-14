// https://www.hackerrank.com/contests/smart-interviews/challenges/si-clockwise-rotation-of-array


3 10 4 5 10 7 2

5 4 10 3  | 2 7 10

10 7 2 3 10 4 5


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
 * Complete the 'clockwiseRotationOfArray' function below.
 */

function clockwiseRotationOfArray(nums, len, k) {
    // Write your code here
        // find modulus of k with length because there is no need to reverse the array till length ,result will be same as original array 
           k = k % len;
        // reverse function to interchange the element in array
           const reverse = (nums, low, high) => {
               while(low < high){
                    // array destructuring
                   [nums[low],nums[high]] = [nums[high],nums[low]];
                   low++;
                   high--;
               }
           }
        // reverse from start to index where array is not rotated
           reverse(nums,0,len-k-1);
        // reverse from index where array is rotated to end
           reverse(nums,len-k,len-1);
        // reverse whole array
           reverse(nums,0,len-1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const [len, k] = readLine().trim().split(" ").map(e => parseInt(e));
        const arr = readLine().trim().split(" ").map(e => parseInt(e));
        clockwiseRotationOfArray(arr, len, k);
        ws.write(arr.join(" ") + '\n');
    }
    ws.end();
}
