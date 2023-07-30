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

// normal logic
for(let i=0; i< Arr.length; i++) {
    let count = 0;
    for(let j=0;  j<Arr.length; j++) {
        if(Arr[i] == Arr[j]) {
            count++;
        }
    }
    if(count == 1) return Arr[i];
}
