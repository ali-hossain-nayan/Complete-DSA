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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (root === 0) return [];
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            levelSum += currentNode.val;
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        result.push(levelSum / levelSize)
    }
    return result;

};