// https://leetcode.com/problems/minimum-window-substring/description/

/**
 * @param {string} A
 * @param {string} B
 * @return {string}
 */
var check = function(mapA, mapB) {
    for(let i in mapB) {
        if(mapA[i] >= mapB[i]) continue;
        else return false
    }
    return true;
}
var minWindow = function(A, B) {
    let mapA = {}, mapB = {};
    let ans = 9999999999;
    const lenA = A.length, lenB = B.length;

    for(let i=0; i<lenB; i++) {
        mapA[A[i]] = (mapA[A[i]] || 0) + 1;
        mapB[B[i]] = (mapB[B[i]] || 0) + 1;
    }
    
    let p1 = 0, p2 = lenB;
    let str = "";
    while(p1<p2) {
        if(check(mapA, mapB) && p1<lenA) {
            if(ans > p2-p1) {
                ans = p2-p1;
                str = A.substr(p1, ans);
            }

            if(mapA[A[p1]] > 1) {
                mapA[A[p1]]--;
            } else {
                delete mapA[A[p1]];
            }
            p1++
        } 
        else if(p2<lenA) {
            mapA[A[p2]]= (mapA[A[p2]] || 0) + 1;
            p2++;
        } else {
            break;
        }
    }
    return ans == 9999999999 ? "" : str;
};
