// https://www.interviewbit.com/problems/counting-triangles/

module.exports = { 
 //param A : array of integers
 //return an integer
	nTriang : function(Arr){
        let count = 0;
        const A = Arr.sort((a,b)=>a-b);
        const mod = 1e9+7, len = A.length;
        for(let p=len-1; p>=0; p--) {
            let p1 = 0, p2 = p-1;
            while(p1<p2) {
                if(A[p1]+A[p2]>A[p]){
                    count = (count+(p2-p1)%mod)%mod;
                    p2--;
                } else {
                    p1++;
                }
            }
        }
        return count;
	}
};
