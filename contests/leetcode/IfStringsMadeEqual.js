// https://leetcode.com/contest/biweekly-contest-112/problems/check-if-strings-can-be-made-equal-with-operations-i/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let len1 = s1.length;
    let s = '';
    let l1 = [s1[0], s1[1], s1[2], s1[3]];
    let l2 = [s1[2], s1[1], s1[0], s1[3]];
    let l3 = [s1[0], s1[3], s1[2], s1[1]];
    let l4 = [s1[2], s1[3], s1[0], s1[1]];

    
    return l1.join('') == s2 || l2.join('') == s2 || l3.join('') == s2 || l4.join('') == s2
};
