// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let arr = [];
var inOrderRec = function(root) {
    // Write your code here
    if(root == null) return;// 1
    inOrderRec(root.left);// 2
    arr.push(root.val)// 3
    inOrderRec(root.right);// 4
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
var inorderTraversal = function(root) {
    arr = [];
    inOrderRec(root);
    return arr;
};
