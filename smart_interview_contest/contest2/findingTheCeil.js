/*
Finding the Ceil
Given an array, you have to find the ceil of a number x. The ceil of a number x is nothing but the smallest number in the array greater than or equal to x.


Input Format

The first line of input contains the N-size of the array. The next line contains N integers, the elements of the array. The next line contains Q - number of queries. 
Each of the next Q lines contains a single integer X, for which you have to find the ceil of X in the given array.

Output Format
For each query, print the ceil of X, separated by a new line. If ceil is not found, print the value of "INT_MAX


Constraints

30 points
1 <= N <=105
1 <= Q <=102
-108 <= ar[i] <=108

70 points
1 <= N <=105
1 <= Q <=105
-108 <= ar[i] <=108

Example

Input
6
-6 10 -1 20 15 5
5
-1
10
13
25
-10


Output
-1
10
15
2147483647
-6


Explanation
Self Explanatory
*/

function processData(input) {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    const len = parseInt(read());
    const arr = read().split(" ").map(e => parseInt(e));
    const Q = parseInt(read());
    const arr1 = arr.sort((a,b) => a-b)
    for(let j=0; j<Q; j++) {
        const q = parseInt(read());
        const res = findCeil(arr1, len, q);
        console.log(res)
    }
}

function findCeil(arr, len, q) {
    let l = 0, h = len-1, m, ans=2147483647;
    while(l <= h) {
        m = parseInt((l+h)/2);
        const mid = arr[m]
        if(mid == q) {
            return q;
        }
        if(mid > q) {
            ans = mid;
            h = m - 1;
        } else {
            l = m + 1;
        }
    }
    return ans;
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

line = 0;
function read() {
    return inputArr[line++]
}
