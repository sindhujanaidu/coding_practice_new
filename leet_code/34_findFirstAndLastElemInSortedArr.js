// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// BS

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var BS1 = function(arr, len, x) {
    let low = 0, high=len-1, mid, p1=-1;
    while(low <= high) {
        mid = parseInt((low+high)/2);
        if(arr[mid] < x) {
            low = mid+1;
        } else if(arr[mid]>x) {
            high = mid-1;
        } else {
            p1 = mid;
            high = mid - 1;
        }
    }
    return p1;
}

var BS2 = function(arr, len, x) {
    let low = 0, high=len-1, mid, p2=-1;
    while(low <= high) {
        mid = parseInt((low+high)/2);
        if(arr[mid]<x) {
            low = mid+1;
        } else if(arr[mid]>x) {
            high = mid-1;
        } else  {
            p2 = mid;
            low = mid + 1;
        }
    }
    return p2;
}
var searchRange = function(nums, target) {
    const len = nums.length;
    return [BS1(nums, len, target), BS2(nums, len, target)];
};
