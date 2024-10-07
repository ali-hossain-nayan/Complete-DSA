/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {

    if (inorder.length === 0 || postorder === 0) return null;
    //inorder->left-root-right
    //postorder->left-right-root
    let root = new TreeNode(postorder[postorder.length - 1]);
    let midIndex = inorder.indexOf(root.val);

    root.left = buildTree(inorder.slice(0, midIndex), postorder.slice(0, midIndex))
    root.right = buildTree(inorder.slice(midIndex + 1), postorder.slice(midIndex, postorder.length - 1))

    return root;
};