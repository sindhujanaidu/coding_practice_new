// https://leetcode.com/problems/kth-missing-positive-number/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let obj = new Object();

    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = 1;
    }

    let count = 0, currentNum = 0;
    while(count < k) {
        currentNum++;
        if(!obj[currentNum]) {
            count++;
            if(count == k) return currentNum;
        }
    }
};
