// https://www.interviewbit.com/problems/palindrome-string/

module.exports = { 
 //param A : string
 //return an integer
	isPalindrome : function(A){
        let len = A.length, str='';
        for(let i=0; i<len; i++) {
            if((A.charCodeAt(i) >=65 && A.charCodeAt(i) <=90) || (A.charCodeAt(i) >=97 && A.charCodeAt(i) <=122) || (A.charCodeAt(i) >=48 && A.charCodeAt(i) <=57)) {
                str += A[i].toLowerCase();
            }
        }
        return str == str.split("").reverse().join("") ? 1 : 0
	}
};
