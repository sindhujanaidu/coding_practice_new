// https://www.hackerrank.com/contests/smart-interviews/challenges/si-is-full-binary-tree


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function checkBit(n, i) {
    return (n>>i) & 1;
}

/*
 * Complete the 'isFullBinaryTree' function below.
 */

var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
        node = new Node(data);
    }
     else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function isFullBinaryTree(root) {
    // Write your code here
    
    // root node is null
    if(root == null) return true;
    
    // leaf node
    if((root.left == null) && (root.right == null)) return true;
    
    // both left and right node exists
    if((root.left != null) && (root.right != null)) {
        console.log(root.left, root.right)
        return isFullBinaryTree(root.left) && isFullBinaryTree(root.right);
    }
    
    // if above conditions are not satisfied then its not FBT
    return false;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const list = readLine().trim().split(" ").map(Number);
        let tree = new Tree();
        for(let j=0; j<n; j++) {
            tree.root = tree.insert(tree.root, list[j]);
        }
        let ans = isFullBinaryTree(tree.root);
        ws.write((ans ? "True" : "False") + '\n');
    }
    ws.end();
}
