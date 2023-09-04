// https://www.interviewbit.com/problems/vowel-and-consonant-substrings/

module.exports = { 
 //param A : string
 //return an integer
	solve : function(a){
        const mod = 1e9+7;
        const len = a.length;
        let count = 0;
        let vow = [];
        let cons = [];
        for(let i=0; i<len; i++) {
            if(a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u") {
                vow.push(i);
            } else {
                cons.push(i);
            }
        }
        const lenV = vow.length, lenC = cons.length;
        let p1 = 0, p2 = 0;
        while(p1 <= lenV && p2 <= lenC) {
            if(vow[p1] < cons[p2]) {
                count = (count + lenC - p2 + mod) % mod;
                p1++;
            } else {
                p2++;
            }
        }
        p1 = 0, p2 = 0;
        while(p1 <= lenV && p2 <= lenC) {
            if(cons[p2] < vow[p1]) {
                count = (count + lenV - p1 + mod) % mod;
                p2++;
            } else {
                p1++;
            }
        }
        return count % mod;
	}
};
