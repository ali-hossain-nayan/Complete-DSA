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
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let prev = null;
    let minDifference = Infinity;


    const inOrderTraversal = (node) => {
        if (!node) return;

        inOrderTraversal(node.left)
        if (prev !== null) minDifference = Math.min(minDifference, Math.abs(node.val - prev));
        prev = node.val

        inOrderTraversal(node.right);
    }
    inOrderTraversal(root);

    return minDifference;

};