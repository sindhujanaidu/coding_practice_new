// https://codeforces.com/problemset/problem/71/A

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
    const leng = parseInt(readLine());
    for(let i=0; i<leng; i++) {
        let str = readLine();
        const len = str.length - 1;
        if(len > 10){
            console.log(str.charAt(0)+(len-2)+str.charAt(len-1));
        } else {
            console.log(str)
        }
    }
});
