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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return [];

  flatten(root.left)
  flatten(root.right)
  //take the original right subtree
  let rightSubtree = root.right;

  //take the left subtree inside right subtree and making the left null
  root.right = root.left;
  root.left = null;

  //now continue into right subtree originally left subtree until null
  let temp = root;
  while (temp.right !== null) temp = temp.right;

  //then attached with this original right subtree and making it one means right subtree
  temp.right = rightSubtree;




};