// https://leetcode.com/problems/find-the-difference/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // let arr = s.split("");
    // let ans = t;
    // for(let i=0; i<t.length; i++) {
    //     if(arr.find(e => e != t[i])) {
    //         ans = t[i];
    //     }
    // }
    // return ans;
    let len = s.length;
    let sortedS = s.split("").sort();
    let sortedT = t.split("").sort()
    for(let i=0; i<s.length; i++) {
        if(sortedS[i] != sortedT[i]) return sortedT[i];
    }
    return sortedT[len];
};
