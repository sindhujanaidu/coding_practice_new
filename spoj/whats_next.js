// https://www.spoj.com/problems/ACPC10A/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
let input_array;
let currentLine = 0;

process.stdin.on('data', chunk => {
    input = chunk;
});

function readLine(){
    return input_array[currentLine++];
}

process.stdin.on('end', _ => {
    input_array = input.split('\n');
    // console.log(readLine())
    while(true) {
        let [a, b, c] = readLine().split(" ").map(e => parseInt(e));
        if(a==0 && b == 0 && c== 0) {
            break;
        }
        if(c-b == b-a) {
            console.log("AP "+ (c+c-b)+'\n');
        } else {
            console.log("GP "+ (c*(c/b))+'\n');
        }
    }
});

