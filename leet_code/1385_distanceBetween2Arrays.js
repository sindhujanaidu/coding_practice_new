// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    let x = 0;

    for(let i=0; i<arr1.length; i++) {
        x = 0;
        for(let j=0; j<arr2.length; j++) {
            let diff = Math.abs(arr1[i]-arr2[j]);
            if(diff <= d) {
                j = arr2.length;
            } else {
                x++;
            }
        }
        if(x == arr2.length) count++;
    }
    return count;
};
