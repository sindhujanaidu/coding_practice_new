// https://www.spoj.com/problems/ADDREV/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
let input_array;
let currentLine = 0;

process.stdin.on('data', chunk => {
    input += chunk;
});

function readLine(){
    return input_array[currentLine++];
}

function reverseNum(num) {
    // Write your code here
    let ans = 0;
    while(num !=0) {
    	const rem = num % 10;
    	ans = ans*10 + rem;
    	num = parseInt(num / 10);
    }
    return ans;
}

process.stdin.on('end', _ => {
    input_array = input.split('\n');
    const T = parseInt(readLine());
    for(let i = 0; i<T; i++) {
        const [x, y] = readLine().split(" ").map(e => parseInt(e));
        const result = reverseNum(x)+reverseNum(y);
        console.log(reverseNum(result));
    }
});
