// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

// SOLUTION 1: burte force
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

// SOLUTION 2: BINARY Search
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a,b)=>{return a-b})
    return arr1.filter(x => isValid(x,arr2,d)).length
};

let isValid = (num, arr, d)=>{
    let low = 0,high = arr.length-1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(Math.abs(arr[mid]-num)<=d){
            return false   
        }else if(arr[mid] > num){
                    high = mid-1
                 }else{
                    low = mid+1
                 }
        
    }
    return true
}
