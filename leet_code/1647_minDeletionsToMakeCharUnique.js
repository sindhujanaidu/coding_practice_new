// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/description/

// sol 1 using count array
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const len = s.length;
    let map = {}, cnt = [], c = 0;
    for(let i=0; i<len; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for(let i in map) {
        while(cnt.find(e => e == map[i])) {
            map[i]--;
            c++;
        }
        cnt.push(map[i]);
    }
    return c;
};

// sol 2 using hashmap
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const len = s.length;
    let map = {}, cnt = {}, c = 0;
    for(let i=0; i<len; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    // console.log(map)
    for(let i in map) {
        while(cnt[map[i]] == 1 && map[i]>0) {
            map[i]--;
            c++;
        }
        cnt[map[i]] = 1;
    }
    // console.log(map, cnt)
    return c;
};
