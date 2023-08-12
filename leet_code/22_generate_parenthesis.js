// https://leetcode.com/problems/generate-parentheses/description/

//recursion and backtracking

/**
 * @param {number} n
 * @return {string[]}
 */
let final = [];
var recursion = function(n, arr, ind, openCount, closeCount) {
    if(openCount + closeCount == n) {
        // console.log(arr)
        final.push(arr.join(""));
        return arr;
    }
    if(openCount < n/2) {
        arr[ind] = "(";
        recursion(n, [...arr], ind+1, openCount+1, closeCount);
    }
    if(openCount > closeCount) {
        arr[ind] = ")";
        recursion(n, [...arr], ind+1, openCount, closeCount+1);
    }
    return final;
}
var generateParenthesis = function(n) {
    const res = recursion(n*2, [], 0, 0, 0);
    final = [];
    return res;
};
