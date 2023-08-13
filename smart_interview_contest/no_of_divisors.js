Number of Divisors
Given a number, find the number of divisors of that number.

Input
First line of input contains T - number of test cases. Its followed by T lines, each containing a single number N.

Output
For each test case, print the number of divisors of N, separated by newline.

Constraints
30 points
1 <= T <= 100
1 <= N <= 106

70 points
1 <= T <= 100
1 <= N <= 109

Example
Input
5
8
16808
9
23
97158

Output
4
16
3
2
8


//solution
'use-strict'
const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString = "";
let currentLine = 0;
process.stdin.on("data", function (input) {
    inputString += input;
});

process.stdin.on("end", function () {
   inputString = inputString.split("\n");

   main();
});

function readLine() {
    return inputString[currentLine++];
}

const zero = BigInt(0);
const one = BigInt(1);
const two = BigInt(2);

function divisors(n) {
    let count = 0;
    for(let i=one; i*i<=n; i++) {
        if(n%i == 0) {
            if(i == n/i) count++;
            else count = count+2;
        }
    }
    return count;
}

function main() {
    const T = parseInt(readLine());
    for(let i=0; i<T; i++) {
        const res = divisors(BigInt(readLine()));
        console.log(res);
    }
}
