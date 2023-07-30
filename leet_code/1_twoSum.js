// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // time complexity: O(n^2), space complexity: O(1)
    // for(let i=0; i<nums.length; i++) {
    //     for(let j=0; j<nums.length; j++) {
    //         if(i!=j && nums[i]+nums[j] == target) {
    //             return [i,j];
    //         }
    //     }
    // }

    // time complexity: O(n) + O(n), space complexity: O(n)
    let dict = {};
    for (let i=0; i<nums.length;  i++) {
        if(dict.hasOwnProperty(nums[i])) {
            dict[nums[i]] = [dict[nums[i]], i];
        } else {
            dict[nums[i]] = i;
        }
    };
    for (let i of nums) {
        if(dict[target-i]){
            if(Array.isArray(dict[target-i]))
                return dict[i];
            else if (dict[i] != dict[target-i]) {
                return [dict[i], dict[target-i]];
        }}
    };
};
