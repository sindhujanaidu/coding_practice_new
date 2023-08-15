// https://www.hackerrank.com/contests/smart-interviews/challenges/si-smaller-elements


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
 * Complete the 'smallerElements' function below.
 */

let count = 0;

function mergeSort(arr, low, high) {
    if(low == high) return;
    
    let mid = parseInt((high+low)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    mergeArray(arr, low, high);
}

function mergeArray(arr, low, high) {
    let mid = parseInt((high+low)/2);
    let p1 = low, p2 = mid+1;
    let i=0;
    let temp = new Array(high-low+1);
    while((p1 <= mid)&& (p2 <= high)) {
        if(arr[p1] <= arr[p2]) {
            temp[i++] = arr[p1];
            p1++;
        } else {
            count+=mid-p1+1;
            temp[i++] = arr[p2];
            p2++;
        }
    }
    while(p1<=mid) {
        temp[i++] = arr[p1];
        p1++;
    }
    while(p2<=high) {
        temp[i++] = arr[p2];
        p2++;
    }
    
    for(let i=low; i<=high; i++) {
        arr[i] = temp[i-low];
    }
}

function smallerElements(arr, len, k) {
    // Write your code here
    mergeSort(arr, 0, arr.length-1, 0);
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const len = readLine().split(" ").map(e=>parseInt(e));
        const arr = readLine().trim().split(" ").map(e=>parseInt(e));
        const result = smallerElements(arr, len);
        count = 0;
        ws.write(result + '\n');
    }
    ws.end();
}
