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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let count = 0, res = null;
    const inOrderTraversal = (node) => {

        if (node === null || res !== null) {
            return;
        }

        inOrderTraversal(node.left);

        count++;
        if (count === k) {
            res = node.val;
            return;
        }
        inOrderTraversal(node.right);

    }
    inOrderTraversal(root);
    return res;
};