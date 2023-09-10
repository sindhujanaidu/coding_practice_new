/*
Sum of 2 Numbers

Given an array, check if there exist 2 elements of the array such that their sum is equal to the sum of the remaining elements of the array.

Input Format

The first line of input contains T - the number of test cases. It is followed by 2T lines, 
the first line contains N - the size of the array. The second line contains N integers - elements of the array.

Output Format

For each test case, print "Yes" if such elements exist, and "No" otherwise, separated by a new line.

Constraints

30 points
1 <= T <= 100
1 <= N <= 1000
-106 <= A[i] <= 106

70 points
1 <= T <= 500
1 <= N <= 10000
-106 <= A[i] <= 106


Example

Input
2
5
-3 5 8 2 -4
6
5 -10 8 4 2 -3

Output
Yes
No

Explanation
Test Case 1
Possible values: 8 + (-4) = (-3) + 5 + 2.
Test Case 2
No 2 elements exist whose sum is equal to the sum of the remaining array elements.

*/

function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const T = parseInt(read());
    for(let i=0; i<T; i++) {
        const len = parseInt(read());
        const arr = read().split(" ").map(e => parseInt(e)).sort((a,b) =>a-b);
        const sum = arr.reduce((a,b) =>a+b, 0)
        const res = sumOf2Num(arr, len, sum);
        console.log(res);
    }
} 

function sumOf2Num(arr, len, sum) {
    let p1=0, p2=len-1;
    while(p1<p2) {
        let twosum = arr[p1]+arr[p2];
        let target = sum-twosum;
        // console.log(arr[p2],target, twosum, sum)
        if(twosum == target) {
            return "Yes";
        }
        if(twosum > target) {
            p2--
        } else{
            p1++
        }
    }
    return "No";
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
input = "";
inputArr = [];
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", function () {
    inputArr = input.split('\n')
   processData(inputArr);
});

line = 0;
function read() {
    return inputArr[line++]
}
