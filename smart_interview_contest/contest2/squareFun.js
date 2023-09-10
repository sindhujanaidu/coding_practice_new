/*
Square Fun

Given two numbers A and B, count the number of perfect squares which lies between A and B (both inclusive).

Input Format
First line of input contains T - number of test cases. Its followed by T lines, each line contains two numbers A and B.

Output Format
For each test case, print the count of perfect squares which lies between A and B (both inclusive), separated by new line.

Constraints

30 points
1 <= T <= 103
1 <= A <= B <= 109

70 points
1 <= T <= 105
1 <= A <= B <= 1018

Example

Input
2
3 9
17 24

Output
2
0


Explanation

Test Case 1
There are 2 perfect squares in the range [3, 9] - 22, 32

Test Case 2
There are no perfect squares in the range [17, 24]
*/

function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const T = parseInt(read());
    for(let i=0; i<T; i++) {
        const [a, b] = read().split(" ").map(e => parseInt(e));
        // let count = 0;
        // for(let j=a; j<=b; j++) {
        //     // const res = perfSquare(j);
        //     // if(res) count++;
        //     // for(let )
        // }
        console.log(Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1)
    }
} 

function perfSquare(n) {
    let l = 1, h = n;
    while(l <= h) {
        const mid = parseInt((l+h)/2);
        const sq = mid*mid;
        if(sq == n) {
            return true
        }
        if(sq < n) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return false
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
input = "";
process.stdin.on("data", function (data) {
    input += data;
});
inputA = [];

process.stdin.on("end", function () {
    inputA = input.split("\n");
   processData(inputA);
});
line = 0;
function read() {
    return inputA[line++];
}
