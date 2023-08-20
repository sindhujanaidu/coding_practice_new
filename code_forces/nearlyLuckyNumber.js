// https://codeforces.com/problemset/problem/110/A

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
    const arr = readLine().trim().split("");//.map(e=>parseInt(e));
    const leng = arr.length;
    let ans = "NO";
    const four = arr.filter(e=>e=='4').length;
    const seven = arr.filter(e=>e=='7').length;
    if(four+seven == 7 || four+seven == 4)
        ans = "YES";
    console.log(ans);
});
