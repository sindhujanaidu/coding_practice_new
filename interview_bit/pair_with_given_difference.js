// https://www.interviewbit.com/problems/pair-with-given-difference/

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	solve : function(A, B){
        const len = A.length;
        let map = {};
        for(let i=0; i<len; i++) {
            map[A[i]] = (map[A[i]] || 0)+1;
        }
        for(let i=0; i<len; i++) {
            if(map[A[i]+B]) {
                if(A[i] == A[i]+B) {
                    if(map[A[i]] > 1) return 1;
                } else {
                    return 1;
                }
            }
        }
        return 0;
	}
};
