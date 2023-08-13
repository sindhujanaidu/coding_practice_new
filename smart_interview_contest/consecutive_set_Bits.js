Consecutive Set Bits
Given a number N, find the max number of consecutive set bits in the number.

Input
First line of input contains T - number of test cases. Its followed by T lines, each containing a single number N.

Output
For each test case, print the max number of consecutive set bits, separated by newline.

Constraints
1 <= T <= 10000
0 <= N <= 1018

Example
Input
3
5
15
13

Output
1
4
2

Explanation
Test Case 1
Binary Representation of 5: 101
Maximum Consecutive Set Bits: 1

Test Case 2
Binary Representation of 15: 1111
Maximum Consecutive Set Bits: 4

Test Case 3
Binary Representation of 13: 1101
Maximum Consecutive Set Bits: 2

// solution
const one = BigInt(1);
const zero = BigInt(0);

function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const inp = input.trim().split("\n");
    const T = parseInt(inp[0]);
    for(let i=zero; i<T; i++) {
        let num = BigInt(inp[i+one]);
        let count = zero;
        let max = zero;
	// solution 1
        while(num > zero) {
            if((num & one) == one) {
                count++;
                max = count > max ? count : max;
            } else {
                count = zero;
            }
            num = num >> one;
        }
        console.log(max+'');

	// solution 2
	while(num > zero) {
	    num = num & (num << one);
            count++;
        }
        console.log(count+'');
    }
} 

process.stdin.resume();
process.stdin.setEncoding("utf-8");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
