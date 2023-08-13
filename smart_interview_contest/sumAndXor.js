Sum and XOR
Given a integer N, find the number of positive integers X such that X<=N and N+X = N^X (N xor X).

Input
First line of input contains T - number of test cases. Its followed by T lines, each line contains a single integer N.

Output
For each test case, print the count of X's, separated by new line.

Constraints
20 points
1 <= T <= 103
0 <= N <= 103

80 points
1 <= T <= 104
0 <= N <= 1018

Example
Input
2
5
10

Output
1
3

Explanation

Test Case 1
Possible values: 5+2 = 5^2.

Test Case 2
Possible values: 10+1 = 10^1, 10+4=10^4, 10+5=10^5

//solution
const zero = BigInt(0);
const one = BigInt(1);
function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    let lines = input.trim().split("\n");
    let T = parseInt(lines[0]);
    for(let i =0; i<T; i++ ) {
        let num = BigInt(lines[i+1]);
        let count = zero;
        // solution 1 // timeout error
        // for(let j=one; j<num; j++) {
        //     if((num ^ j) == (num + j)) {
        //         count++;
        //     }
        // }
        while(num > zero) {
            if((num & one) == zero) {
                count++;
            }
            num = num >> one;
        }
        console.log((one<<count)-one+'')
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
