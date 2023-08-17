// https://www.interviewbit.com/problems/3-sum/

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	threeSumClosest : function(a, B){
        const A = a.sort((a,b)=>a-b)
        const len = A.length;
        let sum = 0, min = 999999999;
        for(let i=0; i<len-2; i++) {
            let c = i;
            let p1 = i+1, p2 = len - 1;
            while(p1<p2) {
                sum = A[p1]+A[p2]+A[c];
                if(A[p1]+A[p2] > B - A[c]) {
                    // min = (sum - B) < min ? sum - B : min;
                    p2--;
                } else if(A[p1]+A[p2] < B - A[c]) {
                    p1++;
                } else {
                    return sum;
                }
                if(Math.abs(sum - B) < Math.abs(min - B)) min = sum;
            }
        }
        return min;
	}
};
