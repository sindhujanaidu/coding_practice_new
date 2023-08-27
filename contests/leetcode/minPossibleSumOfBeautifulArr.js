// https://leetcode.com/contest/weekly-contest-360/problems/find-the-minimum-possible-sum-of-a-beautiful-array/

/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    let i = 0, arr = [], elem = 1;
    let sum = 0, count = 0, map = {};
    if(n==1) return 1;
    while(i<=n-1) {
        // console.log(sum, n, elem)
        // if((sum+elem != target)) {
        //     count++;
        //     sum+=elem;
        //     i++;
        // }
        // elem++;
        // console.log(map, target-elem, !map[target-elem])
        if(!map[elem] && !map[target-elem]) {
            map[elem] = elem;
            sum+=elem
            i++;
        }
        elem++;
    }
    // console.log(map)
    return sum;
};
