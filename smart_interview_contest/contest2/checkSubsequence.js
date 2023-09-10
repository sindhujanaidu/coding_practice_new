contest link: https://hive.smartinterviews.in/contests/dsa-b34-ic2/problems

/*
Check Subsequence

Given 2 strings A and B, check if A is present as a subsequence in B.

Input Format
The first line of input contains T - the number of test cases. It's followed by T lines, each line contains 2 space-separated strings - A and B.


Output Format
For each test case, print "Yes" if A is a subsequence of B, "No" otherwise, separated by a new line.


Constraints
1 <= T <=1000
1 <= len(A), len(B) <=1000
'a' <= A[i],B[i] <='z'

Example

Input
2
data gojdaoncptdhzay
algo plabhagqogxt

Output
Yes
No


Explanation
Self Explanatory
*/

function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const T = parseInt(read());
    for(let i=0; i<T; i++) {
        let ans = "No"
        const [A, B] = read().trim().split(" ");
        const lenA = A.length, lenB = B.length;
        let pa = 0, pb = 0;
        while(pb<lenB && pa<lenA) {
            if(A[pa] == B[pb]) {
                pa++;
                pb++;
            } else {
                pb++;
            }
            if(pa == lenA) ans = "Yes"
        }
        console.log(ans);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
input = "";
inputArr = []
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", function () {
    inputArr = input.split("\n")
   processData(inputArr);
});

line = 0;
function read() {
    return inputArr[line++];
}
