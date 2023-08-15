// https://leetcode.com/problems/sort-an-array/description/

// merge sort

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var mergeSort = function(arr, len, low, high) {
    const mid = parseInt((low+high)/2);
    if(len < 2) return;
    const left = arr.slice(low, mid+1);
    mergeSort(left, left.length, 0, left.length-1);
    const right = arr.slice(mid+1);
    mergeSort(right, right.length, 0, right.length-1);

    mergeArray(left, right, arr);
};

var mergeArray = function(left, right, arr) {
    const leftLen = left.length;
    const rightLen = right.length;
    let i=0, j=0, k=0;
    // console.log(left, right)
    while(i<leftLen && j< rightLen) {
        if(left[i] < right[j]) {
            arr[k] = left[i];
            i++;
            k++;
        } else {
            arr[k] = right[j];
            j++;
            k++;
        }
    }
    while(i< leftLen) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while(j< rightLen) {
        arr[k] = right[j];
        j++;
        k++;
    }
};

var sortArray = function(nums) {
    // console.log('before', nums)
    mergeSort(nums, nums.length, 0, nums.length-1);
    // console.log('after', nums)
    return nums;
};

// var mergeSort = function(arr, low, high) {
//     const mid = parseInt((low+high)/2);
//     if(low == high) {
//         return;
//     }
//     mergeSort(arr, low, mid);  
//     mergeSort(arr, mid+1, high);
//     mergeArray(arr, low, high);
// };

// var mergeArray = function(arr, low, high) {
//     let p1 = low;
//     let mid = parseInt((high+low)/2);
//     let p2 = mid+1;
//     let k=0, temp = [];
//     while((p1<=mid) && (p2<= high)) {
//         if(arr[p1] < arr[p2]) {
//             temp[k++] = arr[p1];
//             p1++;
//         } else {
//             temp[k++] = arr[p2];
//             p2++;
//         }
//     }
//     while(p1<=mid) {
//         temp[k++] = arr[p1];
//         p1++;
//     }
//     while(p2<=high) {
//         temp[k++] = arr[p2];
//         p2++;
//     }
//     for(let i=low; i<=high; i++) {
//         arr[i] = temp[i-low];
//     }
//     temp = [];
// };

// var sortArray = function(nums) {
//     // console.log('before', nums)
//     mergeSort(nums, 0, nums.length-1);
//     // console.log('after', nums)
//     return nums;
// };
