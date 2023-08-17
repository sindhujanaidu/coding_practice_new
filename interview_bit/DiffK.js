// https://www.interviewbit.com/problems/diffk/

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	diffPossible : function(A, B){
        const len = A.length;
        let map = {};
        for(let i=0; i<len; i++) {
            if(!map[A[i]])
                map[A[i]] = [i];
            else {
                map[A[i]].push(i);
            }
        }
        for(let i=0; i<len; i++) {
            if(map[A[i]+B]) {
                if(A[i] == A[i]+B) {
                    if(map[A[i]].length > 1) return 1;
                } else {
                    return 1;
                }
            }
        }
        return 0;
	}
};
