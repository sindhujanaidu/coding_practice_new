// Tried
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
 * Complete the 'nextPalindrome' function below.
 */

function nextPalindrome(num) {
    // Write your code here
    let nextNum = 0;
    const two = BigInt(2);
    const one = BigInt(1);
    let arr = [one, one];
    let ind = 2;
    while(num > 0) {
        nextNum = arr[ind-1] + arr[ind-2];
        arr[ind] = nextNum;
        ind++;
        if(nextNum > num)
            break
    }
    return nextNum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);
    const res = [];
    for(let i = 0; i<T; i++) {
        const num = BigInt(readLine().trim(), 10);
        const result = nextPalindrome(num);
        ws.write(result + '\n');
    }
    ws.end();
}
