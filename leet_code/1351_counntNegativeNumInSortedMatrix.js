// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

// binary search

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const len = grid.length;
    let mainCount = 0;
    const innerLen = grid[0].length
    for(let i=0; i<len; i++) {
        let low = 0, high = innerLen-1, mid;
        const arr = grid[i].sort((a,b) => a-b);
        // console.log(arr, innerLen, low)
        let count = 0;
        while(low <= high) {
            mid = parseInt((low+high)/2);
            const elem = arr[mid];
            if(elem <= -1) { 
                // console.log(elem, mid, low, high)
                count = mid+1;
                low = mid+1;
            } else if(elem > -1) {
                high = mid-1;
            }
        }
        mainCount += count; 
    }
    return mainCount;
};
