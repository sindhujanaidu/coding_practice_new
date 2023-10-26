//https://leetcode.com/problems/increasing-order-search-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 //testing
// var increasingBST = function(root) {
//     let node;
//     if(root == null) return null;
//     increasingBST(root.left);
//     node = root;
//     increasingBST(root.right);
//     return node;
// };

var increasingBST = function(root) {
    newRoot = undefined;
    ptr = undefined;
    createIncreasingBST(root);
    return newRoot;
};

var createIncreasingBST = function(root){
    if(root !== null){
        createIncreasingBST(root.left);
        if(newRoot === undefined){
            newRoot = new TreeNode(root.val);
            ptr = newRoot;
        }
        else {
            ptr.right = new TreeNode(root.val);
            ptr = ptr.right;
        }
        createIncreasingBST(root.right);
    }
}
