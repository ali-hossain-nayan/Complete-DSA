/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder 
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    //preorder=root->left-right
    let root = new TreeNode(preorder[0])
    //inorder=left->root->right
    let midIndex = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex));
    root.right = buildTree(preorder.slice(midIndex + 1), inorder.slice(midIndex + 1));
    return root



};