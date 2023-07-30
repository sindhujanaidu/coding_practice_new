// https://www.interviewbit.com/problems/single-number/
// bit manipulation

module.exports = { 
 //param A : array of integers
 //return an integer
	singleNumber : function(Arr){
        let finalXor = 0;
        Arr.forEach((e) => finalXor = finalXor ^ e);
        return finalXor;
	}
};
