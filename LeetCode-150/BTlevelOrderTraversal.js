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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) return [];

    let res = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let curentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            curentLevel.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        res.push(curentLevel);
    }
    return res;

};