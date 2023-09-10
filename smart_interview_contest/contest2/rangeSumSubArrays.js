/*
Range Sum Subarrays

Given an array of integers and a range [A, B], you have to find the number of subarrays whose sum lies in the given range inclusive.

Input Format

The first line of input contains T - the number of test cases. It is followed by 2T lines, 
the first line of each test case contains N, A, and B - the size of the array and the range separated by space, and the second line contains the elements of the array.


Output Format
For each test case, print the number of subarrays whose sum lies in the given range, separated by a new line.

Constraints

30 points
1 <= T <=100
1 <= N <=100
-106 <= A <=B <=106
-104 <= ar[i] <=104

70 points
1 <= T <=100
1 <= N <=1000
-107 <= A <=B <=107
-104 <= ar[i] <=104

Example

Input
4
3 -10 5
-5 10 -3
4 -10000 1000
929 -4041 -2470 -6445
9 -36116 6820
4605 -626 -3454 -2532 -91 3010 -3557 5552 4055
6 392 5416
-4905 -2388 5352 -3231 4902 -7485

Output
4
8
41
6

Explanation
Self Explanatory
*/

function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */
    const T = parseInt(readLine());
    for(let i=0; i<T; i++) {
        const [N, A, B] = readLine().trim().split(" ").map(e => parseInt(e));
        const arr = readLine().split(" ").map(e => parseInt(e));
        const res = rangeSum(arr, N, A, B);
        console.log(res);//N, A, B, arr, res);
    }
}

function rangeSum(arr, n, a, b) {
    let count = 0;
    for(let i=0; i<n; i++) {
        let sum = 0
        for(let j=i; j<n; j++) {
            sum+= arr[j];
            if(sum >= a && sum <= b) count++;
        }
    }
    return count;
}
line = 0;
function readLine() {
    return inputArr[line++];
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
input = "";
inputArr = []
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", function () {
    inputArr = input.split('\n')
    processData(inputArr);
});
