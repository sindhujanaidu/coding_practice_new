// https://codeforces.com/problemset/problem/282/A

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
    let x = 0;
    for(let i=0; i<leng; i++) {
        let str = readLine();
        if(str.charAt(1) == '+'){
            x++;
        } else {
            x--;
        }
    }
    console.log(x)
});
