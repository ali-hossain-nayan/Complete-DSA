/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    const map = new Map();
    const visitingNode = (current) => {
        if (map.has(current)) {
            return map.get(current);
        }

        const cloneNode = new Node(current.val);
        map.set(current, cloneNode);
        for (let neighbor of current.neighbors) {
            cloneNode.neighbors.push(visitingNode(neighbor))
        }
        return cloneNode;
    }
    return visitingNode(node);
};