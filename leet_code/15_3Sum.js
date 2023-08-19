// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const len = nums.length;
    const arr = nums.sort((a,b) => a-b);
    let res = [];
    for(let i=0; i<len-2; i++) {
        let p1 = i+1, p2 = len-1;
        if(i>0) {
            if(arr[i]==arr[i-1]) {
                continue;
            }
        }
        while(p1<p2) {
            if(arr[p1]+arr[p2]+arr[i] == 0) {
                let triplet = [arr[i], arr[p1], arr[p2]]
                res.push(triplet);
                while(arr[p2] == arr[p2-1]) {
                    p2--;
                }
                p2--;
                while(arr[p1] == arr[p1+1]) {
                    p1++;
                }
                p1++;
            } else if(arr[p1]+arr[p2]+arr[i] > 0) {
                p2--;
                
            } else {
                p1++;
            }
        }
    }
    return res
};
