// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let arr = [];
var postOrderRec = function(root) {
    // Write your code here
    if(root == null) return;// 1
    postOrderRec(root.left);// 2
    postOrderRec(root.right);// 4
    arr.push(root.val)// 3
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    arr = [];
    postOrderRec(root);
    return arr;
};
