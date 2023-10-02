// https://www.hackerrank.com/contests/smart-interviews/challenges/si-tree-traversals


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
 * Complete the 'sumOfAndOfSubarrays' function below.
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

let arr = [];

function inOrderRec(root) {
    // Write your code here
    if(root == null) return;// 1
    inOrderRec(root.left);// 2
    arr.push(root.data)// 3
    inOrderRec(root.right);// 4
}

function inOrder(root) {
    // Write your code here
    arr = [];
    inOrderRec(root);
    return arr.join(" ");
}

function preOrderRec(root) {
    // Write your code here
    if(root == null) return;// 1
    arr.push(root.data)// 3
    preOrderRec(root.left);// 2
    preOrderRec(root.right);// 4
}

function preOrder(root) {
    // Write your code here
    arr = [];
    preOrderRec(root);
    return arr.join(" ");
}

function postOrderRec(root) {
    if(root == null) return;// 1
    postOrderRec(root.left);// 2
    postOrderRec(root.right);// 4
    arr.push(root.data);// 3
}

function postOrder(root) {
    // Write your code here
    arr = [];
    postOrderRec(root);
    return arr.join(" ");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const list = readLine().trim().split(" ").map(e => parseInt(e));
        var tree = new Tree();
        for(let j=0; j<n; j++) {
            tree.root = tree.insert(tree.root, list[j]);
        }
        let ans = preOrder(tree.root);
        ws.write(ans + '\n');
        ans = inOrder(tree.root);
        ws.write(ans + '\n');
        ans = postOrder(tree.root);
        ws.write(ans + '\n\n');
    }
    ws.end();
}// https://www.hackerrank.com/contests/smart-interviews/challenges/si-tree-traversals


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
 * Complete the 'sumOfAndOfSubarrays' function below.
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

let arr = [];

function inOrderRec(root) {
    // Write your code here
    if(root == null) return;// 1
    inOrderRec(root.left);// 2
    arr.push(root.data)// 3
    inOrderRec(root.right);// 4
}

function inOrder(root) {
    // Write your code here
    arr = [];
    inOrderRec(root);
    return arr.join(" ");
}

function preOrderRec(root) {
    // Write your code here
    if(root == null) return;// 1
    arr.push(root.data)// 3
    preOrderRec(root.left);// 2
    preOrderRec(root.right);// 4
}

function preOrder(root) {
    // Write your code here
    arr = [];
    preOrderRec(root);
    return arr.join(" ");
}

function postOrderRec(root) {
    if(root == null) return;// 1
    postOrderRec(root.left);// 2
    postOrderRec(root.right);// 4
    arr.push(root.data);// 3
}

function postOrder(root) {
    // Write your code here
    arr = [];
    postOrderRec(root);
    return arr.join(" ");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim());
    for(let i=0; i<T; i++) {
        const n = parseInt(readLine().trim());
        const list = readLine().trim().split(" ").map(e => parseInt(e));
        var tree = new Tree();
        for(let j=0; j<n; j++) {
            tree.root = tree.insert(tree.root, list[j]);
        }
        let ans = preOrder(tree.root);
        ws.write(ans + '\n');
        ans = inOrder(tree.root);
        ws.write(ans + '\n');
        ans = postOrder(tree.root);
        ws.write(ans + '\n\n');
    }
    ws.end();
}
