// https://www.hackerrank.com/contests/smart-interviews/challenges/si-trailing-zeros

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
 * Complete the 'noOfTrailingZeros' function below.
 */

const zero = BigInt(0);
const ten = BigInt(10);
const five = BigInt(5);

function noOfTrailingZeros(num) {
    // Write your code here
    const one = BigInt(1);
    // let fact = one;
    // for(let i=one; i<=num; i++) {
    //     fact *= i;
    // }
    // solution 1
    // const str = fact.toString().split("");
    // const res = [];
    // for(let j=str.length-1; j>=0; j--) {
    //     if(str[j] == 0) {
    //         res.push(str[j]);
    //     } else {
    //         break;
    //     }
    // }
    // return res.length;
    // solution 2
    // let count = zero;
    // while(fact > zero) {
    //     if(fact % ten == zero) {
    //         count++;
    //     } else {
    //         break;
    //     }
    //     fact = fact / ten;
    // }
    // return count;
    let t = BigInt(num/five);
    let count = t;
    while(t>=5) {
        t = BigInt(t/five);
        count+=t;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = BigInt(readLine().trim());
    for(let i = 0; i<T; i++) {
        const num = BigInt(readLine().trim(), 10);
        const result = noOfTrailingZeros(num);
        ws.write(result + '\n');
    }
    ws.end();
}
