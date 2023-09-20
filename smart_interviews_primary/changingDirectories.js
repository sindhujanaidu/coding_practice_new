// https://www.hackerrank.com/contests/smart-interviews/challenges/si-changing-directories


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

function checkBit(n, i) {
    return (n>>i) & 1;
}

/*
 * Complete the 'main' function below.
 */

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i = 0; i < T; i++) {
        const Q = parseInt(readLine().trim());
        let stack = [];
        for(let j = 0; j < Q; j++) {
            const [cmd, path] = readLine().trim().split(" ");
            if(cmd == "cd") {
                const arr = path.split("/");
                let len = arr.length, cnt = 0;
                if(arr[0] == "") {
                    stack = [];
                }
                else if(arr[0] == "..") {
                    stack.pop();
                } else {
                    stack.push(arr[0]);
                }
                for(let k = 1; k < len; k++) {
                    if(arr[k] == "..") {
                        stack.pop();
                    } else if(arr[k] != "") {
                        stack.push(arr[k])
                    }
                }
            } else {
                const s = stack.join("/");
                console.log(s == "" ? "/" : "/"+s+"/");
            }
        }
        console.log();
        // ws.write(ans + '\n');
    }
    // ws.end();
}
