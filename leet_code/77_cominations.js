// https://leetcode.com/problems/combinations/description/

// recursion & backtracking

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var recursion = function(arr, len, k, subset, final) {
    if(len == 0) {
        return;
    }
    for(let i=0; i<len; i++) {
        subset.push(arr[i]);
        if(subset.length == k) final.push([...subset]);
        recursion(arr.slice(i+1, len), len-(i+1), k, subset, final);
        subset.pop();
    }
    return final;
}
var combine = function(n, k) {
    const arr = [...Array(n)].map((_, i) => i + 1);
    const res = recursion(arr, arr.length, k, [], []);
    return res;
};

// with conditional recursion - little improvement
// var recursion = function(arr, len, k, subset, final) {
//     for(let i=0; i<len; i++) {
//         subset.push(arr[i]);
//         if (k-1 == 0)
//             final.push([...subset]);
//         else
//             recursion(arr.slice(i+1, len), len-(i+1), k-1, subset, final);
//         subset.pop();
//     }
//     return final;
// }
