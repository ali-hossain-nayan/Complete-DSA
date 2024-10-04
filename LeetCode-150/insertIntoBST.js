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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    // If the tree is empty, return a new TreeNode as the root
    if (root === null) {
        return new TreeNode(val);
    }

    let temp = root;
    while (true) {
        // If the value to insert is less than the current node's value
        if (val < temp.val) {
            // If the left child is null, insert the new value here
            if (temp.left === null) {
                temp.left = new TreeNode(val);
                break; // Exit the loop once the node is inserted
            } else {
                temp = temp.left; // Otherwise, move to the left child
            }
        } else {
            // If the value to insert is greater than or equal to the current node's value
            if (temp.right === null) {
                temp.right = new TreeNode(val);
                break; // Exit the loop once the node is inserted
            } else {
                temp = temp.right; // Otherwise, move to the right child
            }
        }
    }

    return root; // Return the root of the updated tree
};
