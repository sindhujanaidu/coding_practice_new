// https://leetcode.com/contest/weekly-contest-361/problems/count-symmetric-integers/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    for(let i=low; i<=high; i++){
        let arr = [];
        let num = i;
        while(num>0) {
            let rem = num%10;
            arr.push(rem);
            num = parseInt(num/10);
        }
        const len = arr.length;
        if(len%2 ==0) {
            let l = arr.slice(0, len/2).reduce((a,b)=>a+b, 0);
            let r = arr.slice(len/2).reduce((a,b)=>a+b, 0);
            if(l == r)
                count++;
        }
    }
    return count;
};
