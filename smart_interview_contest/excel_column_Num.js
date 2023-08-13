Excel Column Number
Given the column title as it appears in a standard excel sheet, find its corresponding column number.

Input
First line of input contains T - number of test cases. Its followed by T lines, each contains a single string.

Output
For each test case, print the column number, separated by newline.

Constraints
1 <= T <= 105
1 <= len(str) <= 10

Example
Input
4
A
Z
AA
AB

Output
1
26
27
28

// solution
function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const T = parseInt(readLine());
    for(let i=0; i<T; i++) {
        let str = readLine().trim();
        if(str.length == 1) {
            const res = str.charCodeAt(0);
            console.log(res-64);
        } else {
            let sol =0;
            while(str.length >= 1) {
                const res = str.charCodeAt(0);
                sol = (sol * 26) +res - 64;
                str = str.substring(1)
            }
            console.log(sol)
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
inputStr = "";
process.stdin.on("data", function (input) {
    inputStr += input;
});
let currentLine = 0;
function readLine() {
    return inputStr[currentLine++];
}

process.stdin.on("end", function () {
    inputStr = inputStr.split("\n");
    processData(inputStr);
});
