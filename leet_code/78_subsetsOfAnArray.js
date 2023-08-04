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
