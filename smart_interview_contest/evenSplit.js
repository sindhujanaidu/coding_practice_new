// Even Split

// Given a number N, check if you can split the number into 2 non-zero even parts.

// Input
// First line of input contains T - number of test cases. Its followed by T lines, each line contains a single integer N.

// Output
// For each test case, print "Yes" if you can split the number into 2 non-zero even parts, "No" otherwise, separated by new line.

// Constraints
// 1 <= T <= 105
// 0 <= N <= 1018

// Example

// Input
// 2
// 8
// 1

// Output
// Yes
// No

// Explanation
// Test Case 1
// You can split 8 as 4,4 or 6,2.

// Test Case 2
// You cannot split 1 into 2 even parts.

const zero = BigInt(0)
const two = BigInt(2)
const one = BigInt(1)
function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const lines = input.trim().split("\n");
    const T = parseInt(lines[0]);

    for(let i=zero; i<T; i++) {
        let n = BigInt(lines[i+one]);
        if(((n%two) ==zero) && (n > two)) {
            console.log("Yes");
            continue;
        }
        console.log("No");
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
