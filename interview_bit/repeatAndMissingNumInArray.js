// https://www.interviewbit.com/problems/repeat-and-missing-number-array/

//bit manipulation

module.exports = { 
 //param A : array of integers
 //return a array of integers
	repeatedNumber : function(A){
        let x = 0, N = A.length;
        
        for(let i=0; i<N; i++) {
            x = x ^ A[i] ^ (i+1);
        }
        
        let bit_pos = 0;
        for(let i=0; i<32; i++) {
            if(((x>>i) & 1 ) == 1) {
                bit_pos = i;
                break;
            }
                
        }
        
        let p = 0, q = 0;
        for(let i=0; i<N; i++) {
            if(((A[i]>>bit_pos) & 1 ) == 1) {
                p = p ^ A[i];
            } else {
                q = q^ A[i];
            }
            
            if( (((i+1) >> bit_pos) & 1) == 1)
                p = p ^ (i+1);
            else
                q = q ^ (i+1)
                
        }
        
        let ans = [];
        ans[0] = q;
        ans[1] = p;
        for(let i=0; i<N; i++) {
            if(A[i]==p) {
                ans[0] = p;
                ans[1]=q;
                break;
            }
        }
        return ans;
	}
};
