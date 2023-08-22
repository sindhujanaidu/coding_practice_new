// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

// binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var BS1 = function(arr, len, x) {
    let low=0, high=len-1, ind = -1;
    while(low<=high) {
        mid = parseInt((low+high)/2);
        if(arr[mid] < x) {
            low = mid + 1;
        } else if(arr[mid] > x) {
            high = mid -1;
        } else {
            ind = mid;
            high = mid - 1;
        }
    }
    return ind;
}
var BS2 = function(arr, len, x) {
    let low=0, high=len-1, ind = -1;
    while(low<=high) {
        mid = parseInt((low+high)/2);
        // console.log(mid)
        if(arr[mid] < x) {
            low = mid + 1;
        } else if(arr[mid] > x) {
            high = mid -1;
        } else {
            ind = mid;
            low = mid + 1;
        }
    }
    return ind;
}
var targetIndices = function(nums, target) {
    let len = nums.length;
    let arr = nums.sort((a,b) =>a-b);
    let left = BS1(arr, len, target);
    let right = BS2(arr, len, target);
    // console.log(left, right)
    if(left == -1 && right == -1) return [];
    if(left == -1) return [right];
    if(right == -1) return [left];
    if(left == right) return [left];
    return [...Array(right-left+1).fill(0).map((e,i) => left+i)];
};
