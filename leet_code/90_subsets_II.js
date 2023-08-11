// https://leetcode.com/problems/subsets-ii/description/

// recursion

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
        if(!obj[temp]) {
            console.log(obj)
            obj[temp] = arr[i];
            final.push([...temp]);
        }
        recursion(arr.slice(i+1, len), len-(i+1), temp, final);
        temp.pop();
    }
    return final;
}
let obj = {};
var subsetsWithDup = function(nums) {
    let ans = recursion(nums.sort(), nums.length, [], [[]]);
    obj = {};
    return ans;
};
