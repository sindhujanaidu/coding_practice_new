// https://leetcode.com/problems/kth-missing-positive-number/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// SOLUTION 1 - USING OBJECT
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

//SOLUTION 2 - USING FOR OF
var findKthPositive = function(arr, k) {
     let count = 0;
  for (item of arr) {
    if (item <= k + count) {
      count++;
    }
  }

  return k + count;
};
