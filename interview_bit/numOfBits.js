// https://www.interviewbit.com/problems/number-of-1-bits/

module.exports = { 
	//param A : integer
	//return an integer
	numSetBits : function(A){
        let count = 0;
        // using log method in js
        // for(let i=0; i<Math.log(A); i++) {
        //     count++;
        // }
        // return count;
        while(A!=0) {
            A = A&(A-1);
            count++;
        }
        return count;
	}
};
