// https://www.interviewbit.com/problems/amazing-subarrays/

module.exports = { 
 //param A : string
 //return an integer
	solve : function(A){
        const mod = 10003;
        const len = A.length;
        let count = 0;
        const a = A.toLowerCase();
        for(let i=0; i<len; i++) {
            if(a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u") {
                count = (count + (len - i)) % mod;
            }
        }
        return count;
	}
};
