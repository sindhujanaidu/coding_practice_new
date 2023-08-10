// https://leetcode.com/problems/subsets/description/

// bit manipulation

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const len = nums.length;
    let res = [];
    for(let i=0; i<(1<<len); i++) {
        let subset = [];
        for(let j=0; j<len; j++) {
            if(((i>>j) & 1) == 1) {
                subset.push(nums[j])
            }
        }
        res.push(subset)
    }
    return res;
};

// recursion & backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var recursion = function(arr, len, temp, final) {
    if(len == 0) {
        return;
    }

    for(let i=0; i<len; i++) {
        temp.push(arr[i]);
        final.push([...temp]);
        recursion(arr.slice(i+1, len), len-(i+1), temp, final);
        temp.pop();
    }

    return final;
}
var subsets = function(nums) {
    const res = recursion(nums, nums.length, [], [[]]);
    return res;
};
