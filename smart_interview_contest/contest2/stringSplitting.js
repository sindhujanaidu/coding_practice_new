/*
Splitting String

Given a string, find the minimum number of cuts needed to obtain a perfect string. A perfect string is a string in which it has only single type of character. 
Eg: aaaaa. A cut in the string should be done exactly in the middle dividing the string into two equal halves.

Input

First line of input contains T - number of test cases. Its followed by T lines, each line contains a single string consisting only lowercase english alphabets.

Output

For each test case, print the minimum number of cuts required to get a perfect string, separated by a new line. If it is not possible to obtain a perfect string print -1.

Constraints
1 <= T <= 103
1 <= len(str) <= 104

Example

Input
2
aacabbaa
ab

Output
2
1

Explanation
Test Case 1
Cut-1: [aaca][bbaa], Cut-2: [bb][aa]

Test Case 2
Cut-1: [a][b]
*/

function valid(str, l, h) {
    for(let i=l; i<=h; i++) {
        if(str[i] != str[l])
            return false
    }
    return true
}

function solve(str, l, h) {
    if(valid(str, l, h)) return 0;

    if((h-l+1) % 2 == 1) return 1e4;
    let m = parseInt((l+h)/2);
    return Math.min(solve(str, l, m), solve(str, m+1, h))+1;
}

function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const T = parseInt(read());
    for(let i=0; i<T; i++) {
        const str = read().trim();
        const ans = solve(str, 0, str.length - 1);
        console.log((ans >= 1e4) ? -1 : ans);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
input = "";
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", function () {
    inputArr = input.split('\n');
   processData(inputArr);
});

line=0;
function read() {
    return inputArr[line++];
}
