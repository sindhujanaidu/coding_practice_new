// https://www.interviewbit.com/problems/sorted-insert-position/

// binary search

class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def searchInsert(self, A, B):
        low = 0
        high=len(A)-1
        ans=-1
        while low<=high:
            mid=int((low+high)/2)
            if(A[mid] == B):
                return mid
            elif(A[mid] < B):
                ans=mid+1
                low=mid+1
            else:
                high=mid-1
        if ans == -1:
            return 0
        else:
            return ans
